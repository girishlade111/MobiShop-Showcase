
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/products';
import { ArrowRight, Info, Smartphone, Users, Tag, Zap, TrendingUp } from 'lucide-react';

export default function LandingPage() {
  const featuredProducts = products.slice(0, 3);
  const bestOffers = products.slice(3, 6);
  const clearanceProducts = products.slice(1, 4).reverse();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[500px] flex items-center text-center text-white bg-gradient-to-br from-gray-900 via-background to-gray-800 overflow-hidden">
          <div className="container z-10">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary animate-fade-in-down">
              Experience Innovation
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground animate-fade-in-up">
              Discover the next generation of mobile technology. Powerful, elegant, and designed for you.
            </p>
            <div className="mt-8 flex justify-center gap-4 animate-fade-in-up">
              <Button asChild size="lg" className="text-lg">
                <Link href="/products">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
           <div className="absolute inset-0 z-0">
             <Image
                src="https://images.unsplash.com/photo-1674062284636-c7b6b6c7a358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNnx8bW9iaWxlJTIwc2hvcHxlbnwwfHx8fDE3NTU4ODQ2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Hero background"
                layout="fill"
                objectFit="cover"
                className="opacity-20"
                data-ai-hint="abstract tech background"
              />
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 lg:py-32">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                 <div className="inline-flex items-center gap-2 text-primary">
                    <Users className="h-6 w-6" />
                    <h2 className="text-sm font-bold uppercase tracking-widest">About MobiShop</h2>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Your Trusted Partner in Mobile Technology
                </h3>
                <p className="text-muted-foreground text-lg">
                  MobiShop is more than just a retailer; we are enthusiasts dedicated to bringing you the latest and greatest in mobile innovation. Our mission is to provide a curated selection of top-tier devices, ensuring quality, performance, and a seamless customer experience. We believe in the power of technology to connect and inspire.
                </p>
                 <Button asChild variant="link" className="px-0 text-lg">
                    <Link href="/contact">Learn More <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1753199917594-e79ee1ba6f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8UGFydG5lciUyMGluJTIwTW9iaWxlJTIwVGVjaG5vbG9neXxlbnwwfHx8fDE3NTU4ODQ3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="MobiShop Team"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                  data-ai-hint="modern office team"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="featured-products" className="py-20 lg:py-32 bg-secondary/20">
          <div className="container mx-auto">
            <div className="text-center mb-12">
               <div className="inline-flex items-center gap-2 text-primary">
                    <Smartphone className="h-6 w-6" />
                    <h2 className="text-sm font-bold uppercase tracking-widest">Featured Products</h2>
                </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
                Check Out Our Best Sellers
              </h3>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground text-lg">
                Handpicked for their exceptional performance, design, and user satisfaction.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
             <div className="text-center mt-12">
               <Button asChild size="lg">
                    <Link href="/products">View All Products <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
            </div>
          </div>
        </section>

        {/* Best Offers Section */}
        <section id="best-offers" className="py-20 lg:py-32">
          <div className="container mx-auto">
            <div className="text-center mb-12">
               <div className="inline-flex items-center gap-2 text-primary">
                    <Tag className="h-6 w-6" />
                    <h2 className="text-sm font-bold uppercase tracking-widest">Best Offers</h2>
                </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
                Exclusive Deals Just For You
              </h3>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground text-lg">
                Don't miss out on these limited-time offers on top-rated smartphones.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {bestOffers.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Clearance Sale Section */}
        <section id="clearance-sale" className="py-20 lg:py-32 bg-secondary/20">
          <div className="container mx-auto">
            <div className="text-center mb-12">
               <div className="inline-flex items-center gap-2 text-primary">
                    <Zap className="h-6 w-6" />
                    <h2 className="text-sm font-bold uppercase tracking-widest">Clearance Sale</h2>
                </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
                Last Chance to Grab a Deal
              </h3>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground text-lg">
                Amazing discounts on quality devices. Get them before they're gone!
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {clearanceProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
