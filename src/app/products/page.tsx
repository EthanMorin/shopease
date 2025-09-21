'use client';

import { useState, useMemo } from 'react';
import { ProductCard } from '@/components/product/ProductCard';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { products, categories, searchProducts } from '@/data/products';
import { Search, Filter, X } from 'lucide-react';

export default function ProductsPage() {
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('All');
	const [sortBy, setSortBy] = useState('name');
	const [showFilters, setShowFilters] = useState(false);

	const filteredProducts = useMemo(() => {
		let filtered = products;

		// Filter by category
		if (selectedCategory !== 'All') {
			filtered = filtered.filter(
				(product) => product.category === selectedCategory
			);
		}

		// Filter by search query
		if (searchQuery.trim()) {
			filtered = searchProducts(searchQuery);
			if (selectedCategory !== 'All') {
				filtered = filtered.filter(
					(product) => product.category === selectedCategory
				);
			}
		}

		// Sort products
		filtered.sort((a, b) => {
			switch (sortBy) {
				case 'price-low':
					return a.price - b.price;
				case 'price-high':
					return b.price - a.price;
				case 'rating':
					return b.rating - a.rating;
				case 'name':
				default:
					return a.name.localeCompare(b.name);
			}
		});

		return filtered;
	}, [searchQuery, selectedCategory, sortBy]);

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Header */}
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-4">Products</h1>
					<p className="text-lg text-gray-600">
						Discover our amazing collection of products
					</p>
				</div>

				{/* Search and Filters */}
				<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
					<div className="flex flex-col lg:flex-row gap-4">
						{/* Search */}
						<div className="flex-1">
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
								<Input
									type="text"
									placeholder="Search products..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="pl-10"
								/>
							</div>
						</div>

						{/* Mobile Filter Button */}
						<Button
							variant="outline"
							onClick={() => setShowFilters(!showFilters)}
							className="lg:hidden"
						>
							<Filter className="h-4 w-4 mr-2" />
							Filters
						</Button>

						{/* Desktop Filters */}
						<div className="hidden lg:flex gap-4">
							<select
								value={selectedCategory}
								onChange={(e) => setSelectedCategory(e.target.value)}
								className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							>
								{categories.map((category) => (
									<option key={category} value={category}>
										{category}
									</option>
								))}
							</select>

							<select
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
								className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							>
								<option value="name">Sort by Name</option>
								<option value="price-low">Price: Low to High</option>
								<option value="price-high">Price: High to Low</option>
								<option value="rating">Highest Rated</option>
							</select>
						</div>
					</div>

					{/* Mobile Filters */}
					{showFilters && (
						<div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
							<div className="space-y-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Category
									</label>
									<select
										value={selectedCategory}
										onChange={(e) => setSelectedCategory(e.target.value)}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									>
										{categories.map((category) => (
											<option key={category} value={category}>
												{category}
											</option>
										))}
									</select>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Sort By
									</label>
									<select
										value={sortBy}
										onChange={(e) => setSortBy(e.target.value)}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									>
										<option value="name">Sort by Name</option>
										<option value="price-low">Price: Low to High</option>
										<option value="price-high">Price: High to Low</option>
										<option value="rating">Highest Rated</option>
									</select>
								</div>
							</div>
						</div>
					)}
				</div>

				{/* Results */}
				<div className="mb-6">
					<p className="text-gray-600">
						{filteredProducts.length} product
						{filteredProducts.length !== 1 ? 's' : ''} found
						{searchQuery && ` for "${searchQuery}"`}
						{selectedCategory !== 'All' && ` in ${selectedCategory}`}
					</p>
				</div>

				{/* Products Grid */}
				{filteredProducts.length > 0 ? (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{filteredProducts.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				) : (
					<div className="text-center py-12">
						<div className="text-gray-400 mb-4">
							<Search className="h-16 w-16 mx-auto" />
						</div>
						<h3 className="text-lg font-medium text-gray-900 mb-2">
							No products found
						</h3>
						<p className="text-gray-600 mb-4">
							Try adjusting your search or filter criteria
						</p>
						<Button
							onClick={() => {
								setSearchQuery('');
								setSelectedCategory('All');
								setSortBy('name');
							}}
						>
							Clear Filters
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}
