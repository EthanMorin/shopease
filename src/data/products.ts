import { Product } from '@/types'

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Great wireless headphones with noise cancellation and long battery life. Works well for music and calls.',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&crop=center'
    ],
    category: 'Electronics',
    inStock: true,
    rating: 4.8,
    reviewCount: 1247,
    tags: ['wireless', 'noise-cancelling', 'bluetooth'],
    specifications: {
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Weight': '250g',
      'Charging': 'USB-C'
    }
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Fitness watch that tracks your workouts, heart rate, and has GPS. Waterproof for swimming.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center&auto=format&q=80'
    ],
    category: 'Electronics',
    inStock: true,
    rating: 4.6,
    reviewCount: 892,
    tags: ['fitness', 'smartwatch', 'gps'],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': '7 days',
      'Water Resistance': '50m',
      'Sensors': 'Heart Rate, GPS, Accelerometer'
    }
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    description: 'Soft cotton t-shirt made from organic materials. Comes in different colors.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&crop=center'
    ],
    category: 'Clothing',
    inStock: true,
    rating: 4.4,
    reviewCount: 456,
    tags: ['organic', 'cotton', 'sustainable'],
    specifications: {
      'Material': '100% Organic Cotton',
      'Care': 'Machine Wash Cold',
      'Origin': 'Made in USA'
    }
  },
  {
    id: '4',
    name: 'Minimalist Backpack',
    description: 'Simple backpack that works for work or travel. Has a laptop pocket and other compartments.',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center&auto=format&q=80'
    ],
    category: 'Accessories',
    inStock: true,
    rating: 4.7,
    reviewCount: 634,
    tags: ['minimalist', 'laptop', 'travel'],
    specifications: {
      'Capacity': '25L',
      'Material': 'Water-resistant Nylon',
      'Laptop Compartment': 'Up to 15"',
      'Weight': '1.2kg'
    }
  },
  {
    id: '5',
    name: 'Mechanical Keyboard',
    description: 'Mechanical keyboard with RGB lights and clicky switches. Good for gaming and coding.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=400&h=400&fit=crop&crop=center'
    ],
    category: 'Electronics',
    inStock: false,
    rating: 4.9,
    reviewCount: 1123,
    tags: ['mechanical', 'rgb', 'gaming'],
    specifications: {
      'Switch Type': 'Cherry MX Blue',
      'Backlighting': 'RGB',
      'Connectivity': 'USB-C',
      'Layout': 'Full-size'
    }
  },
  {
    id: '6',
    name: 'Wireless Charging Pad',
    description: 'Wireless charger that works with most phones. Has a light to show when charging.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1601972602288-526ecb541d1e?w=400&h=400&fit=crop&crop=center'
    ],
    category: 'Electronics',
    inStock: true,
    rating: 4.3,
    reviewCount: 789,
    tags: ['wireless', 'charging', 'qi'],
    specifications: {
      'Power Output': '15W',
      'Compatibility': 'Qi-enabled devices',
      'Material': 'Silicone',
      'LED Indicator': 'Yes'
    }
  }
]

export const categories = [
  'All',
  'Electronics',
  'Clothing',
  'Accessories'
]

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') return products
  return products.filter(product => product.category === category)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}
