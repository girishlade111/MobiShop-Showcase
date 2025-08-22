import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/lib/products';
import { WishlistButton } from './wishlist-button';
import { Star } from 'lucide-react';
import { AddToCartButton } from './add-to-cart-button';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 group bg-card/50 backdrop-blur-sm border-white/10 hover:border-white/20 shadow-md hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0 relative">
        <Link href={`/products/${product.id}`} className="block overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-auto object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="mobile phone"
          />
        </Link>
        <div className="absolute top-3 right-3 z-10">
          <WishlistButton productId={product.id} />
        </div>
         <Badge variant="secondary" className="absolute top-3 left-3 z-10">{product.brand}</Badge>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <Link href={`/products/${product.id}`}>
          <CardTitle className="text-lg font-semibold hover:text-primary transition-colors">{product.name}</CardTitle>
        </Link>
        <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-current' : ''}`} />
                ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews})</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <p className="text-xl font-bold text-primary">${product.price.toFixed(2)}</p>
        <AddToCartButton productId={product.id} />
      </CardFooter>
    </Card>
  );
}
