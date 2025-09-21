import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Star,
	Heart,
	Share2,
	Truck,
	Shield,
	RotateCcw,
	ShoppingCart,
} from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types';
import { products } from '../../data/products';
import { formatPrice } from '../../lib/utils';

interface ProductPageClientProps {
	product: Product;
}

export function ProductPageClient({ product }: ProductPageClientProps) {
	const { addToCart } = useCart();
	const [selectedImage, setSelectedImage] = useState(0);
	const [quantity, setQuantity] = useState(1);

	const handleAddToCart = () => {
		console.log('Adding to cart:', product.name, 'quantity:', quantity);
		addToCart(product, quantity);
		// Show a simple alert for now to confirm it's working
		alert(`Added ${quantity} ${product.name}(s) to cart!`);
	};

	const handleWishlist = () => {
		console.log('Adding to wishlist:', product.name);
		alert('Added to wishlist!');
	};

	const handleShare = () => {
		console.log('Sharing product:', product.name);
		if (navigator.share) {
			navigator.share({
				title: product.name,
				text: product.description,
				url: window.location.href,
			});
		} else {
			// Fallback: copy to clipboard
			navigator.clipboard.writeText(window.location.href);
			alert('Product link copied to clipboard!');
		}
	};

	// Get related products (same category, excluding current product)
	const relatedProducts = products
		.filter((p) => p.category === product.category && p.id !== product.id)
		.slice(0, 4);

	const images = product.images || [product.image];

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Breadcrumb */}
				<nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
					<Link to="/" className="hover:text-gray-700">
						Home
					</Link>
					<span>/</span>
					<Link to="/products" className="hover:text-gray-700">
						Products
					</Link>
					<span>/</span>
					<span className="text-gray-900">{product.name}</span>
				</nav>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
					{/* Product Images */}
					<div className="space-y-4">
						{/* Main Image */}
						<div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
							<img
								src={images[selectedImage]}
								alt={product.name}
								className="w-full h-full object-cover"
								onError={() => {
									console.error(
										'Image failed to load:',
										images[selectedImage] || product.image
									);
									console.error('Selected image index:', selectedImage);
									console.error('Product images:', images);
								}}
							/>
						</div>

						{/* Thumbnail Images */}
						{images.length > 1 && (
							<div className="grid grid-cols-4 gap-2">
								{images.map((image, index) => (
									<button
										key={index}
										onClick={() => setSelectedImage(index)}
										className={`aspect-square overflow-hidden rounded-lg border-2 ${
											selectedImage === index
												? 'border-blue-500'
												: 'border-gray-200 hover:border-gray-300'
										}`}
									>
										<img
											src={image}
											alt={`${product.name} ${index + 1}`}
											className="w-full h-full object-cover"
											onError={() => {
												console.error(
													`Thumbnail image ${index} failed to load:`,
													image
												);
											}}
											onLoad={() => {
												console.log(`Thumbnail image ${index} loaded:`, image);
											}}
										/>
									</button>
								))}
							</div>
						)}
					</div>

					{/* Product Info */}
					<div className="space-y-6">
						<div>
							<h1 className="text-3xl font-bold text-gray-900 mb-2">
								{product.name}
							</h1>
							<div className="flex items-center space-x-4 mb-4">
								<div className="flex items-center">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className={`h-5 w-5 ${
												i < Math.floor(product.rating)
													? 'text-yellow-400 fill-current'
													: 'text-gray-300'
											}`}
										/>
									))}
									<span className="ml-2 text-sm text-gray-600">
										({product.reviewCount} reviews)
									</span>
								</div>
								<Badge variant="secondary">{product.category}</Badge>
							</div>
							<div className="flex items-center space-x-4 mb-4">
								<span className="text-3xl font-bold text-gray-900">
									{formatPrice(product.price)}
								</span>
								{product.originalPrice &&
									product.originalPrice > product.price && (
										<span className="text-xl text-gray-500 line-through">
											{formatPrice(product.originalPrice)}
										</span>
									)}
								{product.originalPrice &&
									product.originalPrice > product.price && (
										<Badge variant="destructive">
											{Math.round(
												((product.originalPrice - product.price) /
													product.originalPrice) *
													100
											)}
											% OFF
										</Badge>
									)}
							</div>
						</div>

						<div>
							<p className="text-gray-700 leading-relaxed">
								{product.description}
							</p>
						</div>

						{/* Stock Status */}
						<div className="flex items-center space-x-2">
							{product.inStock ? (
								<>
									<div className="w-3 h-3 bg-green-500 rounded-full"></div>
									<span className="text-green-600 font-medium">In Stock</span>
								</>
							) : (
								<>
									<div className="w-3 h-3 bg-red-500 rounded-full"></div>
									<span className="text-red-600 font-medium">Out of Stock</span>
								</>
							)}
						</div>

						{/* Quantity and Add to Cart */}
						{product.inStock && (
							<div className="space-y-4">
								<div className="flex items-center space-x-4">
									<label className="text-sm font-medium text-gray-700">
										Quantity:
									</label>
									<div className="flex items-center border border-gray-300 rounded-md">
										<button
											onClick={() => setQuantity(Math.max(1, quantity - 1))}
											className="px-3 py-2 text-gray-600 hover:text-gray-800"
										>
											-
										</button>
										<span className="px-4 py-2 border-x border-gray-300">
											{quantity}
										</span>
										<button
											onClick={() => setQuantity(quantity + 1)}
											className="px-3 py-2 text-gray-600 hover:text-gray-800"
										>
											+
										</button>
									</div>
								</div>
								<div className="flex space-x-4">
									<Button
										onClick={handleAddToCart}
										size="lg"
										className="flex-1"
									>
										<ShoppingCart className="h-5 w-5 mr-2" />
										Add to Cart
									</Button>
									<Button onClick={handleWishlist} variant="outline" size="lg">
										<Heart className="h-5 w-5" />
									</Button>
									<Button onClick={handleShare} variant="outline" size="lg">
										<Share2 className="h-5 w-5" />
									</Button>
								</div>
							</div>
						)}

						{/* Features */}
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
							<div className="flex items-center space-x-3">
								<Truck className="h-6 w-6 text-blue-600" />
								<div>
									<p className="text-sm font-medium text-gray-900">
										Free Shipping
									</p>
									<p className="text-xs text-gray-500">On orders over $50</p>
								</div>
							</div>
							<div className="flex items-center space-x-3">
								<Shield className="h-6 w-6 text-green-600" />
								<div>
									<p className="text-sm font-medium text-gray-900">
										Secure Payment
									</p>
									<p className="text-xs text-gray-500">100% secure checkout</p>
								</div>
							</div>
							<div className="flex items-center space-x-3">
								<RotateCcw className="h-6 w-6 text-purple-600" />
								<div>
									<p className="text-sm font-medium text-gray-900">
										Easy Returns
									</p>
									<p className="text-xs text-gray-500">30-day return policy</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Related Products */}
				{relatedProducts.length > 0 && (
					<div>
						<h2 className="text-2xl font-bold text-gray-900 mb-8">
							Related Products
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
							{relatedProducts.map((relatedProduct) => (
								<ProductCard key={relatedProduct.id} product={relatedProduct} />
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
