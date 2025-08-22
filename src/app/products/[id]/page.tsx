import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProductById, getProducts } from '@/lib/products';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';
import { WishlistButton } from '@/components/wishlist-button';
import { AddToCartButton } from '@/components/add-to-cart-button';
import AiProductRecommendations from '@/components/ai-product-recommendations';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Separator } from '@/components/ui/separator';

type ProductPageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  const products = getProducts();
  return products.map(product => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <Carousel className="w-full">
            <CarouselContent>
              {product.images.map((img, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden">
                    <Image
                      src={img}
                      alt={`${product.name} image ${index + 1}`}
                      width={800}
                      height={800}
                      className="w-full h-auto object-cover aspect-square"
                      data-ai-hint="mobile phone"
                    />
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <Badge variant="secondary">{product.brand}</Badge>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary">{product.name}</h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.round(product.rating) ? 'fill-current' : ''}`} />
                ))}
              </div>
              <span className="text-muted-foreground">{product.rating.toFixed(1)} ({product.reviews} reviews)</span>
            </div>
          </div>
          
          <p className="text-base text-muted-foreground">{product.description}</p>

          <p className="text-4xl font-bold text-gray-900 dark:text-gray-50">${product.price.toFixed(2)}</p>
          
          <div className="flex items-center gap-4">
            <AddToCartButton productId={product.id} />
            <WishlistButton productId={product.id} />
          </div>

          <Separator />
          
          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {Object.entries(product.specs).map(([key, value]) => (
                  <li key={key} className="flex justify-between">
                    <span className="font-medium text-muted-foreground">{key}</span>
                    <span className="text-right">{value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">You Might Also Like</h2>
        <AiProductRecommendations currentProductId={product.id} />
      </div>
    </div>
  );
}
