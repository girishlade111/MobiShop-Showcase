
"use client";

import { WishlistProvider } from '@/contexts/wishlist-context';
import { CartProvider } from '@/contexts/cart-context';
import { Toaster } from '@/components/ui/toaster';
import { SiteHeader } from '@/components/site-header';
import SparkleBackground from '@/components/sparkle-background';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Smartphone, Twitter, Instagram, Facebook } from 'lucide-react';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <WishlistProvider>
          <CartProvider>
            <div className="relative flex min-h-screen flex-col">
              <SparkleBackground />
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <footer className="bg-secondary/20 border-t border-border/40">
                <div className="container py-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-4">
                      <Link href="/" className="flex items-center gap-2 mb-2">
                        <Smartphone className="h-6 w-6 text-primary" />
                        <span className="font-bold text-lg">MobiShop</span>
                      </Link>
                      <p className="text-muted-foreground text-sm">Discover the future of mobile technology with our curated selection of premium smartphones.</p>
                       <div className="flex space-x-4 mt-4">
                        <Link href="#"><Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" /></Link>
                        <Link href="#"><Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" /></Link>
                        <Link href="#"><Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" /></Link>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="font-semibold mb-2">Shop</h4>
                      <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">All Products</Link>
                      <Link href="/cart" className="text-muted-foreground hover:text-primary transition-colors text-sm">Cart</Link>
                      <Link href="/wishlist" className="text-muted-foreground hover:text-primary transition-colors text-sm">Wishlist</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                       <h4 className="font-semibold mb-2">Support</h4>
                      <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact Us</Link>
                      <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">FAQs</Link>
                       <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Shipping & Returns</Link>
                    </div>
                     <div className="flex flex-col gap-2">
                       <h4 className="font-semibold mb-2">Stay Updated</h4>
                       <p className="text-muted-foreground text-sm">Join our newsletter to get the latest news and promotions.</p>
                       <div className="flex mt-2">
                         <Input placeholder="Enter your email" className="rounded-r-none" />
                         <Button className="rounded-l-none">Subscribe</Button>
                       </div>
                    </div>
                  </div>
                  <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} MobiShop Showcase. All Rights Reserved.</p>
                  </div>
                </div>
              </footer>
            </div>
            <Toaster />
          </CartProvider>
        </WishlistProvider>
    )
}
