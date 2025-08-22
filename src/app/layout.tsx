
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { WishlistProvider } from '@/contexts/wishlist-context';
import { CartProvider } from '@/contexts/cart-context';
import { Toaster } from '@/components/ui/toaster';
import { SiteHeader } from '@/components/site-header';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'MobiShop Showcase',
  description: 'A modern and professional mobile shop website with a portfolio-style design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable)}>
        <WishlistProvider>
          <CartProvider>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <footer className="py-6 md:px-8 md:py-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                  <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                    &copy; {new Date().getFullYear()} MobiShop Showcase. All Rights Reserved.
                  </p>
                </div>
              </footer>
            </div>
            <Toaster />
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
