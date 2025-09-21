import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { ProductCard } from '../components/product/ProductCard';
import { Button } from '../components/ui/Button';
import { products } from '../data/products';

export default function Home() {
	const featuredProducts = products.slice(0, 4);

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
					<div className="text-center">
						<h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
							Welcome to ShopEase
						</h1>
						<p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-blue-100">
							Portfolio E-commerce Demo
						</p>
						<p className="text-base sm:text-lg mb-6 sm:mb-8 text-blue-200 px-4">
							Showcasing modern web development with React, TypeScript &
							Tailwind CSS
						</p>
						<div className="bg-yellow-400/20 border border-yellow-400/30 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 max-w-2xl mx-auto mx-4">
							<p className="text-yellow-100 font-semibold text-sm sm:text-base">
								⚠️ This is a portfolio demonstration project - no real purchases
								can be made
							</p>
						</div>
						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
							<Link to="/products" className="w-full sm:w-auto">
								<Button
									size="lg"
									className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100"
								>
									Shop Now
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</Link>
							<Link to="/about" className="w-full sm:w-auto">
								<Button
									size="lg"
									variant="outline"
									className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600"
								>
									Learn More
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-12 sm:py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
						<div className="text-center">
							<div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
								<Truck className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
							</div>
							<h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">
								Free Shipping
							</h3>
							<p className="text-xs sm:text-base text-gray-600">
								On orders over $50
							</p>
						</div>
						<div className="text-center">
							<div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
								<Shield className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
							</div>
							<h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">
								Secure Payment
							</h3>
							<p className="text-xs sm:text-base text-gray-600">
								100% secure checkout
							</p>
						</div>
						<div className="text-center">
							<div className="bg-purple-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
								<RotateCcw className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
							</div>
							<h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">
								Easy Returns
							</h3>
							<p className="text-xs sm:text-base text-gray-600">
								30-day return policy
							</p>
						</div>
						<div className="text-center">
							<div className="bg-yellow-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
								<Star className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />
							</div>
							<h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">
								Quality Guarantee
							</h3>
							<p className="text-xs sm:text-base text-gray-600">
								Premium products only
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Products */}
			<section className="py-12 sm:py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-8 sm:mb-12">
						<h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
							Featured Products
						</h2>
						<p className="text-base sm:text-lg text-gray-600">
							Discover our most popular items
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
						{featuredProducts.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>

					<div className="text-center mt-8 sm:mt-12">
						<Link to="/products">
							<Button size="lg" className="w-full sm:w-auto">
								View All Products
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
