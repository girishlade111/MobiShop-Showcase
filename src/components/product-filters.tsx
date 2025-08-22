"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from './ui/button';

interface ProductFiltersProps {
  brands: string[];
  selectedBrands: string[];
  onBrandChange: (brands: string[]) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
  maxPrice: number;
}

export function ProductFilters({
  brands,
  selectedBrands,
  onBrandChange,
  priceRange,
  onPriceChange,
  maxPrice,
}: ProductFiltersProps) {

  const handleBrandChange = (brand: string) => {
    const newSelection = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand];
    onBrandChange(newSelection);
  };

  const clearFilters = () => {
    onBrandChange([]);
    onPriceChange([0, maxPrice]);
  }

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-white/10">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Filters</CardTitle>
        <Button variant="ghost" size="sm" onClick={clearFilters}>Clear</Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-4">Brand</h3>
          <div className="space-y-3">
            {brands.map(brand => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() => handleBrandChange(brand)}
                />
                <Label htmlFor={`brand-${brand}`} className="font-normal cursor-pointer text-base">
                  {brand}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Price Range</h3>
          <Slider
            min={0}
            max={maxPrice}
            step={10}
            value={priceRange}
            onValueChange={onPriceChange}
          />
           <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
