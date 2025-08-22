"use client";

import Link from 'next/link';
import { useWishlist } from '@/hooks/use-wishlist';
import { getProductsByIds } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist } = useWishlist();
  const wishlistedProducts = getProductsByIds(wishlist);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-primary">Your Wishlist</h1>
      {wishlistedProducts.length === 0 ? (
        <div className="text-center py-20 border-dashed border-2 rounded-lg">
          <Heart className="mx-auto h-16 w-16 text-muted-foreground" />
          <h2 className="mt-6 text-xl font-semibold">Your wishlist is empty</h2>
          <p className="mt-2 text-muted-foreground">Products you add to your wishlist will appear here.</p>
          <Button asChild className="mt-6">
            <Link href="/">Discover Products</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
