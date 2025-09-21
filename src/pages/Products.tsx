import { useState } from 'react';
import { ProductCard } from '../components/product/ProductCard';
import { products } from '../data/products';

export default function Products() {
	const [selectedCategory, setSelectedCategory] = useState('all');

	const categories = ['all', 'Electronics', 'Clothing', 'Accessories'];

	const filteredProducts =
		selectedCategory === 'all'
			? products
			: products.filter((product) => product.category === selectedCategory);

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Header */}
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-4">
						Our Products
					</h1>
					<p className="text-lg text-gray-600">
						Discover our amazing collection of products
					</p>
				</div>

				{/* Category Filter */}
				<div className="flex flex-wrap justify-center gap-2 mb-8">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
								selectedCategory === category
									? 'bg-blue-600 text-white'
									: 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
							}`}
						>
							{category === 'all' ? 'All' : category}
						</button>
					))}
				</div>

				{/* Products Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{filteredProducts.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>

				{/* Results Count */}
				<div className="text-center mt-8">
					<p className="text-gray-600">
						Showing {filteredProducts.length} product
						{filteredProducts.length !== 1 ? 's' : ''}
					</p>
				</div>
			</div>
		</div>
	);
}
