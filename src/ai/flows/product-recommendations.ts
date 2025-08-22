'use server';

/**
 * @fileOverview Provides AI-powered product recommendations based on browsing history.
 *
 * - getProductRecommendations - A function that retrieves product recommendations.
 * - ProductRecommendationsInput - The input type for the getProductRecommendations function.
 * - ProductRecommendationsOutput - The return type for the getProductRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductRecommendationsInputSchema = z.object({
  browsingHistory: z
    .array(z.string())
    .describe('An array of product IDs representing the user\'s browsing history.'),
  currentProductId: z
    .string()
    .optional()
    .describe('The ID of the product currently being viewed.'),
  numberOfRecommendations: z
    .number()
    .default(3)
    .describe('The number of product recommendations to return.'),
});

export type ProductRecommendationsInput = z.infer<
  typeof ProductRecommendationsInputSchema
>;

const ProductRecommendationsOutputSchema = z.object({
  recommendedProducts: z.array(z.string()).describe('An array of recommended product IDs.'),
});

export type ProductRecommendationsOutput = z.infer<
  typeof ProductRecommendationsOutputSchema
>;

export async function getProductRecommendations(
  input: ProductRecommendationsInput
): Promise<ProductRecommendationsOutput> {
  return productRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productRecommendationsPrompt',
  input: {schema: ProductRecommendationsInputSchema},
  output: {schema: ProductRecommendationsOutputSchema},
  prompt: `You are an expert in product recommendations for a mobile shop.

  Based on the user's browsing history and the current product they are viewing,
  recommend {{numberOfRecommendations}} related products that they might be interested in.

  Browsing History: {{#each browsingHistory}}{{{this}}}, {{/each}}
  Current Product: {{currentProductId}}

  Return only a list of product IDs. Do not provide any additional explanation.
  Ensure that the recommendations are relevant to the user's browsing history and the current product.
  `,
});

const productRecommendationsFlow = ai.defineFlow(
  {
    name: 'productRecommendationsFlow',
    inputSchema: ProductRecommendationsInputSchema,
    outputSchema: ProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
