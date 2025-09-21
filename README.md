# ShopEase - Portfolio E-commerce Demo

A demo e-commerce site I built to showcase my web development skills. Uses Next.js, TypeScript, and Tailwind CSS, deployed on Cloudflare Pages.

## What I Built

- **Product pages** with image galleries and detailed info
- **Shopping cart** that remembers what you add
- **Checkout flow** with form validation (demo only)
- **Search and filtering** for products
- **Responsive design** that works on mobile and desktop
- **Clean UI** with smooth interactions

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - For type safety
- **Tailwind CSS** - For styling
- **React Context** - For state management
- **Cloudflare Pages** - For hosting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-ecom
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To build the project for production:

```bash
npm run build
```

This will create a static export in the `out` directory, ready for deployment to Cloudflare Pages.

## How to Deploy

I deployed this to Cloudflare Pages. Here's how:

1. Build the project:
```bash
npm run build
```

2. Connect your GitHub repo to Cloudflare Pages
3. Set build command to `npm run build` and output directory to `out`
4. Deploy!

The site uses static export so it works great with Cloudflare Pages.

### Build Configuration

The project is configured for static export with the following settings in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout process
│   ├── contact/           # Contact page
│   ├── products/          # Product listing and details
│   └── search/            # Search results
├── components/            # Reusable components
│   ├── layout/           # Header, Footer
│   ├── product/          # Product-related components
│   └── ui/               # Basic UI components
├── context/              # React Context providers
├── data/                 # Sample data and utilities
├── lib/                  # Utility functions
└── types/                # TypeScript type definitions
```

## Customization

### Adding Products

Edit `src/data/products.ts` to add, modify, or remove products:

```typescript
export const products: Product[] = [
  {
    id: 'unique-id',
    name: 'Product Name',
    description: 'Product description',
    price: 99.99,
    image: '/images/product.jpg',
    category: 'Electronics',
    inStock: true,
    rating: 4.5,
    reviewCount: 100,
    // ... other properties
  }
]
```

### Styling

The project uses Tailwind CSS for styling. You can customize the design by:

1. Modifying Tailwind classes in components
2. Adding custom CSS in `src/app/globals.css`
3. Updating the Tailwind configuration

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. The route will be automatically available

## Features in Detail

### Shopping Cart
- Persistent cart state using localStorage
- Add/remove items with quantity controls
- Real-time price calculations
- Cart persistence across browser sessions

### Product Search
- Full-text search across product names, descriptions, and tags
- Category filtering
- Sort by price, rating, or name
- Responsive search interface

### Checkout Process
- Multi-step checkout form
- Form validation
- Order summary with tax and shipping calculations
- Order confirmation

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Touch-friendly interface
- Optimized for all screen sizes

## Performance Optimizations

- Static site generation for fast loading
- Optimized images and assets
- Minimal JavaScript bundle
- Efficient CSS with Tailwind
- Client-side routing with Next.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## About This Project

This is a portfolio project I built to demonstrate my web development skills. 
It's not a real e-commerce site - just a demo to show what I can build.

## Contact

If you have questions about this project or want to discuss development work, 
feel free to reach out!