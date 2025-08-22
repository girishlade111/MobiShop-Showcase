# MobiShop Showcase

Welcome to **MobiShop Showcase**, a modern, professional, and high-performance e-commerce website designed for showcasing and selling mobile phones. This project is built with Next.js, React, and Tailwind CSS, featuring a sleek, portfolio-style design that highlights products beautifully.

## Key Features

*   **Modern & Responsive Design**: A professional interface that looks great on all devices, from desktops to smartphones.
*   **Dynamic Product Catalog**: Easily manage and display a wide range of products with detailed specifications, ratings, and multiple images.
*   **Advanced Product Filtering & Sorting**: Users can effortlessly find products by brand, price range, or name.
*   **AI-Powered Recommendations**: The site uses AI to suggest relevant products to users, enhancing their shopping experience.
*   **Shopping Cart & Wishlist**: Fully functional cart and wishlist features allow users to save and manage their desired products.
*   **Interactive UI**: Smooth animations and interactive elements create an engaging and pleasant user experience.

## Getting Started

This is a Next.js project bootstrapped with `create-next-app`. To get started with development:

1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Run the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

*   `src/app/`: Contains all the pages of the application, following the Next.js App Router structure.
*   `src/components/`: Reusable React components used throughout the application, including UI elements from `shadcn/ui`.
*   `src/lib/`: Core utilities and data, such as product information (`products.ts`).
*   `src/ai/`: Contains the Genkit flows for AI-powered features like product recommendations.
*   `src/contexts/`: React context providers for managing global state like the cart and wishlist.
*   `src/hooks/`: Custom React hooks for interacting with contexts and other logic.
*   `public/`: Static assets like images.
*   `styles/`: Global CSS styles and Tailwind CSS configuration.

This project serves as an excellent starting point for building a professional and feature-rich e-commerce platform. Enjoy exploring MobiShop Showcase!
