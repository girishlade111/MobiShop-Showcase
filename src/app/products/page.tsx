
"use client";

import { useState, useMemo } from 'react';
import { products, Product } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { ProductFilters } from '@/components/product-filters';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1800]);
  const [sortOption, setSortOption] = useState('price-asc');

  const availableBrands = useMemo(() => {
    const brands = new Set(products.map(p => p.brand));
    return Array.from(brands);
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesBrand && matchesPrice;
    });

    switch (sortOption) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return filtered;
  }, [searchTerm, selectedBrands, priceRange, sortOption]);

  const maxPrice = useMemo(() => Math.max(...products.map(p => p.price)), []);

  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight text-primary animate-fade-in-down">Our Products</h1>
        <p className="mt-4 text-lg text-muted-foreground animate-fade-in-up">Discover the Latest in Mobile Technology</p>
      </div>

      <div className="grid lg:grid-cols-[280px_1fr] gap-8">
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <ProductFilters
              brands={availableBrands}
              selectedBrands={selectedBrands}
              onBrandChange={setSelectedBrands}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              maxPrice={maxPrice}
            />
          </div>
        </aside>

        <main>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-white/10">
            <div className="relative w-full md:max-w-sm">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search products or brands..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="bg-transparent pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A-Z</SelectItem>
                  <SelectItem value="name-desc">Name: Z-A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredAndSortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredAndSortedProducts.length === 0 && (
             <div className="col-span-full flex flex-col items-center justify-center py-24 text-center bg-card/50 backdrop-blur-sm border border-white/10 rounded-lg">
                <h2 className="text-2xl font-semibold text-primary">No Products Found</h2>
                <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
