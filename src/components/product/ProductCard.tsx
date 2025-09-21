'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
	product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
	const { addToCart } = useCart();

	const handleAddToCart = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		addToCart(product);
	};

	return (
		<div className="group relative bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
			<Link href={`/products/${product.id}`} className="block">
				<div className="aspect-square relative overflow-hidden bg-gray-100">
					<Image
						src={product.image}
						alt={product.name}
						fill
						className="object-cover group-hover:scale-105 transition-transform duration-200"
					/>
					{!product.inStock && (
						<>
							{/* Subtle overlay for better text readability */}
							<div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20 pointer-events-none" />
							{/* Out of Stock badge */}
							<div className="absolute top-2 right-2">
								<Badge className="text-xs px-3 py-1 bg-red-600/90 backdrop-blur-md border border-red-500/50 text-white font-semibold shadow-lg">
									Out of Stock
								</Badge>
							</div>
						</>
					)}
					{product.originalPrice && product.originalPrice > product.price && (
						<div className="absolute top-2 left-2">
							<Badge variant="destructive">
								{Math.round(
									((product.originalPrice - product.price) /
										product.originalPrice) *
										100
								)}
								% OFF
							</Badge>
						</div>
					)}
					<button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-50">
						<Heart className="h-4 w-4 text-gray-600" />
					</button>
				</div>

				<div className="p-4">
					<div className="flex items-center gap-1 mb-2">
						<div className="flex items-center">
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className={`h-4 w-4 ${
										i < Math.floor(product.rating)
											? 'text-yellow-400 fill-current'
											: 'text-gray-300'
									}`}
								/>
							))}
						</div>
						<span className="text-sm text-gray-600 ml-1">
							({product.reviewCount})
						</span>
					</div>

					<h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
						{product.name}
					</h3>

					<div className="flex items-center gap-2 mb-3">
						<span className="text-lg font-semibold text-gray-900">
							{formatPrice(product.price)}
						</span>
						{product.originalPrice && product.originalPrice > product.price && (
							<span className="text-sm text-gray-500 line-through">
								{formatPrice(product.originalPrice)}
							</span>
						)}
					</div>

					<div className="flex items-center gap-2">
						<Button
							onClick={handleAddToCart}
							disabled={!product.inStock}
							className="flex-1"
							size="sm"
						>
							{product.inStock ? (
								<>
									<ShoppingCart className="h-4 w-4 mr-2" />
									Add to Cart
								</>
							) : (
								<>
									<div className="h-4 w-4 mr-2 rounded-full bg-red-500" />
									Out of Stock
								</>
							)}
						</Button>
					</div>
				</div>
			</Link>
		</div>
	);
}
