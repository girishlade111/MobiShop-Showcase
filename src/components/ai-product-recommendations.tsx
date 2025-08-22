"use client";

import { useState, useEffect } from 'react';
import { getProductRecommendations } from '@/ai/flows/product-recommendations';
import { getProductsByIds, Product } from '@/lib/products';
import { ProductCard } from './product-card';
import { Skeleton } from './ui/skeleton';

const BROWSING_HISTORY_KEY = 'browsingHistory';
const MAX_HISTORY_LENGTH = 10;

export default function AiProductRecommendations({ currentProductId }: { currentProductId: string }) {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Track browsing history
    try {
      const history = JSON.parse(localStorage.getItem(BROWSING_HISTORY_KEY) || '[]');
      const updatedHistory = [currentProductId, ...history.filter((id: string) => id !== currentProductId)];
      if (updatedHistory.length > MAX_HISTORY_LENGTH) {
        updatedHistory.pop();
      }
      localStorage.setItem(BROWSING_HISTORY_KEY, JSON.stringify(updatedHistory));
    } catch (e) {
      console.error("Could not update browsing history", e);
    }
  }, [currentProductId]);

  useEffect(() => {
    async function fetchRecommendations() {
      try {
        setLoading(true);
        const history = JSON.parse(localStorage.getItem(BROWSING_HISTORY_KEY) || '[]');
        
        const result = await getProductRecommendations({
          browsingHistory: history,
          currentProductId,
          numberOfRecommendations: 3,
        });

        if (result && result.recommendedProducts) {
          const recommendedProducts = getProductsByIds(result.recommendedProducts);
          // Filter out the current product from recommendations if it appears
          setRecommendations(recommendedProducts.filter(p => p.id !== currentProductId));
        }
      } catch (err) {
        console.error('Error fetching recommendations:', err);
        setError('Could not load recommendations.');
      } finally {
        setLoading(false);
      }
    }

    fetchRecommendations();
  }, [currentProductId]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-destructive">{error}</p>;
  }

  if (recommendations.length === 0) {
    return null; // Don't show the section if there are no recommendations
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recommendations.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
