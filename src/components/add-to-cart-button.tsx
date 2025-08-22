"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface AddToCartButtonProps {
    productId: string;
    className?: string;
    variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
}

export function AddToCartButton({ productId, className, variant="default", size="sm" }: AddToCartButtonProps) {
    const { addToCart } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(productId, 1);
    };

    return (
        <Button onClick={handleAddToCart} className={className} variant={variant} size={size}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
        </Button>
    );
}
