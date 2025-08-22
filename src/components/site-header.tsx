
"use client";

import Link from 'next/link';
import { Smartphone, Heart, ShoppingCart, Package, User } from 'lucide-react';
import { useWishlist } from '@/hooks/use-wishlist';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';

export function SiteHeader() {
  const { wishlist } = useWishlist();
  const { cartCount } = useCart();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Smartphone className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">MobiShop</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Button variant="link" asChild>
            <Link href="/products">Products</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
           <Button variant="ghost" className="md:hidden" size="icon" asChild>
            <Link href="/products">
              <Package className="h-5 w-5" />
              <span className="sr-only">Products</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/wishlist">
              <Heart className="h-5 w-5" />
              {isClient && wishlist.length > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 justify-center p-0">{wishlist.length}</Badge>
              )}
              <span className="sr-only">Wishlist</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
               {isClient && cartCount > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 justify-center p-0">{cartCount}</Badge>
              )}
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
           <Button variant="ghost" size="icon" asChild>
            <Link href="/auth">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
