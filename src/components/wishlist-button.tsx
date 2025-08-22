"use client";

import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/hooks/use-wishlist';
import { cn } from '@/lib/utils';

interface WishlistButtonProps {
  productId: string;
  className?: string;
}

export function WishlistButton({ productId, className }: WishlistButtonProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isWishlisted = isInWishlist(productId);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn(
        "rounded-full bg-white/80 backdrop-blur-sm hover:bg-white",
        "dark:bg-zinc-950/80 dark:hover:bg-zinc-950",
        className)}
      onClick={toggleWishlist}
      aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart className={cn(
        "h-5 w-5 transition-all",
        isWishlisted ? "text-red-500 fill-red-500" : "text-gray-500"
      )} />
    </Button>
  );
}
