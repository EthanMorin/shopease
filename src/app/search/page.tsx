'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProductCard } from '@/components/product/ProductCard';
import { searchProducts } from '@/data/products';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function SearchPage() {
	const searchParams = useSearchParams();
	const [query, setQuery] = useState('');
	const [results, setResults] = useState(searchProducts(''));

	useEffect(() => {
		const searchQuery = searchParams.get('q') || '';
		setQuery(searchQuery);
		setResults(searchProducts(searchQuery));
	}, [searchParams]);

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (query.trim()) {
			setResults(searchProducts(query.trim()));
		}
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Search Header */}
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-4">
						Search Results
					</h1>

					<form onSubmit={handleSearch} className="max-w-2xl">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
							<input
								type="text"
								placeholder="Search products..."
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							{query && (
								<button
									type="button"
									onClick={() => {
										setQuery('');
										setResults(searchProducts(''));
									}}
									className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
								>
									<X className="h-4 w-4" />
								</button>
							)}
						</div>
					</form>
				</div>

				{/* Results */}
				{query ? (
					<div className="mb-6">
						<p className="text-gray-600">
							{results.length} result{results.length !== 1 ? 's' : ''} found for
							"{query}"
						</p>
					</div>
				) : (
					<div className="text-center py-12">
						<div className="text-gray-400 mb-4">
							<Search className="h-16 w-16 mx-auto" />
						</div>
						<h3 className="text-lg font-medium text-gray-900 mb-2">
							Start your search
						</h3>
						<p className="text-gray-600 mb-6">
							Enter a product name or keyword to find what you're looking for
						</p>
						<Link href="/products">
							<Button>Browse All Products</Button>
						</Link>
					</div>
				)}

				{/* Products Grid */}
				{results.length > 0 ? (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{results.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				) : query ? (
					<div className="text-center py-12">
						<div className="text-gray-400 mb-4">
							<Search className="h-16 w-16 mx-auto" />
						</div>
						<h3 className="text-lg font-medium text-gray-900 mb-2">
							No products found
						</h3>
						<p className="text-gray-600 mb-6">
							Try adjusting your search terms or browse our categories
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								onClick={() => {
									setQuery('');
									setResults(searchProducts(''));
								}}
							>
								Clear Search
							</Button>
							<Link href="/products">
								<Button variant="outline">Browse All Products</Button>
							</Link>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
}
