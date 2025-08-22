"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
    productId: string;
    className?: string;
}

export function AddToCartButton({ productId, className }: AddToCartButtonProps) {
    const { addToCart } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(productId, 1);
    };

    return (
        <Button onClick={handleAddToCart} className={className}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
        </Button>
    );
}
