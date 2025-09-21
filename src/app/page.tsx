import Link from 'next/link';
import { ArrowRight, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { ProductCard } from '@/components/product/ProductCard';
import { Button } from '@/components/ui/Button';
import { products } from '@/data/products';

export default function Home() {
	const featuredProducts = products.slice(0, 4);

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
					<div className="text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Welcome to ShopEase
						</h1>
						<p className="text-xl md:text-2xl mb-4 text-blue-100">
							Portfolio E-commerce Demo
						</p>
						<p className="text-lg mb-8 text-blue-200">
							Showcasing modern web development with Next.js, TypeScript &
							Tailwind CSS
						</p>
						<div className="bg-yellow-400/20 border border-yellow-400/30 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
							<p className="text-yellow-100 font-semibold">
								⚠️ This is a portfolio demonstration project - no real purchases
								can be made
							</p>
						</div>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/products">
								<Button
									size="lg"
									className="bg-white text-blue-600 hover:bg-gray-100"
								>
									Shop Now
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</Link>
							<Link href="/about">
								<Button
									size="lg"
									variant="outline"
									className="border-white text-white hover:bg-white hover:text-blue-600"
								>
									Learn More
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<Truck className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
							<p className="text-gray-600">On orders over $50</p>
						</div>
						<div className="text-center">
							<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<Shield className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
							<p className="text-gray-600">100% secure checkout</p>
						</div>
						<div className="text-center">
							<div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<RotateCcw className="h-8 w-8 text-purple-600" />
							</div>
							<h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
							<p className="text-gray-600">30-day return policy</p>
						</div>
						<div className="text-center">
							<div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<Star className="h-8 w-8 text-yellow-600" />
							</div>
							<h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
							<p className="text-gray-600">Premium products only</p>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Products */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							Featured Products
						</h2>
						<p className="text-lg text-gray-600">
							Discover our most popular items
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{featuredProducts.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>

					<div className="text-center mt-12">
						<Link href="/products">
							<Button size="lg">
								View All Products
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Newsletter Section */}
			<section className="bg-gray-900 text-white py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
					<p className="text-xl text-gray-300 mb-8">
						Subscribe to our newsletter for exclusive deals and new product
						updates
					</p>
					<div className="max-w-md mx-auto flex gap-4">
						<input
							type="email"
							placeholder="Enter your email"
							className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<Button className="px-8">Subscribe</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
