"use client";

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from "@/hooks/use-toast";
import type { Product } from '@/lib/products';
import { getProductsByIds } from '@/lib/products';

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId:string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const cartData: { id: string; quantity: number }[] = JSON.parse(savedCart);
      const productIds = cartData.map(item => item.id);
      const products = getProductsByIds(productIds);
      const loadedCartItems = products.map(product => {
        const cartDataItem = cartData.find(item => item.id === product.id);
        return { ...product, quantity: cartDataItem ? cartDataItem.quantity : 0 };
      }).filter(item => item.quantity > 0);
      setCartItems(loadedCartItems);
    }
  }, []);

  useEffect(() => {
    const cartData = cartItems.map(item => ({ id: item.id, quantity: item.quantity }));
    localStorage.setItem('cart', JSON.stringify(cartData));
  }, [cartItems]);

  const addToCart = (productId: string, quantity = 1) => {
    const products = getProductsByIds([productId]);
    const productToAdd = products[0];

    if (!productToAdd) return;

    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === productId);
      if (existingItem) {
        toast({ title: "Added to Cart", description: `${productToAdd.name} quantity updated.` });
        return prev.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      toast({ title: "Added to Cart", description: `${productToAdd.name} has been added to your cart.` });
      return [...prev, { ...productToAdd, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
    toast({ title: "Removed from Cart", description: "Product has been removed from your cart." });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(prev =>
        prev.map(item => (item.id === productId ? { ...item, quantity } : item))
      );
    }
  };
  
  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};
