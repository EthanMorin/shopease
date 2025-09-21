imcport { useState } from 'react';
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
import { ProductCard } from '../../components/product/ProductCard';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
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

	const relatedProducts = products
		.filter((p) => p.category === product.category && p.id !== product.id)
		.slice(0, 4);

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Breadcrumb */}
				<nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
					<Link href="/" className="hover:text-blue-600">
						Home
					</Link>
					<span>/</span>
					<Link href="/products" className="hover:text-blue-600">
						Products
					</Link>
					<span>/</span>
					<span className="text-gray-900">{product.name}</span>
				</nav>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
					{/* Product Images */}
					<div className="space-y-4">
						<div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
							<Image
								src={product.images?.[selectedImage] || product.image}
								alt={product.name}
								fill
								className="object-cover"
								onError={() => {
									console.error(
										'Image failed to load:',
										product.images?.[selectedImage] || product.image
									);
									console.error('Selected image index:', selectedImage);
									console.error('Product images:', product.images);
								}}
								onLoad={() => {
									console.log(
										'Image loaded successfully:',
										product.images?.[selectedImage] || product.image
									);
								}}
							/>
							{!product.inStock && (
								<>
									{/* Subtle overlay for better text readability */}
									<div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20 pointer-events-none" />
									{/* Out of Stock badge */}
									<div className="absolute top-4 right-4">
										<Badge className="text-sm px-4 py-2 bg-red-600/90 backdrop-blur-md border border-red-500/50 text-white font-semibold shadow-xl">
											Out of Stock
										</Badge>
									</div>
									{/* Optional: Add a subtle diagonal stripe pattern */}
									<div className="absolute inset-0 opacity-5 pointer-events-none">
										<div
											className="w-full h-full bg-gradient-to-br from-red-500/20 via-transparent to-red-500/20"
											style={{
												backgroundImage:
													'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(239, 68, 68, 0.1) 10px, rgba(239, 68, 68, 0.1) 20px)',
											}}
										/>
									</div>
								</>
							)}
						</div>

						{product.images && product.images.length > 1 && (
							<div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
								{product.images.map((image, index) => (
									<button
										key={index}
										onClick={() => {
											console.log('Selecting image', index, 'URL:', image);
											setSelectedImage(index);
										}}
										className={`aspect-square relative overflow-hidden rounded-md border-2 transition-colors touch-manipulation ${
											selectedImage === index
												? 'border-blue-500'
												: 'border-gray-200 hover:border-gray-300'
										}`}
									>
										<Image
											src={image}
											alt={`${product.name} view ${index + 1}`}
											fill
											className="object-cover"
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

					{/* Product Details */}
					<div className="space-y-6">
						<div>
							<h1 className="text-3xl font-bold text-gray-900 mb-2">
								{product.name}
							</h1>
							<div className="flex items-center gap-4 mb-4">
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
								</div>
								<span className="text-gray-600">
									{product.rating} ({product.reviewCount} reviews)
								</span>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<span className="text-3xl font-bold text-gray-900">
								{formatPrice(product.price)}
							</span>
							{product.originalPrice &&
								product.originalPrice > product.price && (
									<>
										<span className="text-xl text-gray-500 line-through">
											{formatPrice(product.originalPrice)}
										</span>
										<Badge variant="destructive">
											{Math.round(
												((product.originalPrice - product.price) /
													product.originalPrice) *
													100
											)}
											% OFF
										</Badge>
									</>
								)}
						</div>

						<p className="text-gray-700 text-lg leading-relaxed">
							{product.description}
						</p>

						{/* Specifications */}
						{product.specifications && (
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-3">
									Specifications
								</h3>
								<div className="space-y-2">
									{Object.entries(product.specifications).map(
										([key, value]) => (
											<div
												key={key}
												className="flex justify-between py-2 border-b border-gray-200"
											>
												<span className="font-medium text-gray-700">{key}</span>
												<span className="text-gray-600">{value}</span>
											</div>
										)
									)}
								</div>
							</div>
						)}

						{/* Tags */}
						{product.tags && product.tags.length > 0 && (
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-3">
									Tags
								</h3>
								<div className="flex flex-wrap gap-2">
									{product.tags.map((tag) => (
										<Badge key={tag} variant="secondary">
											{tag}
										</Badge>
									))}
								</div>
							</div>
						)}

						{/* Add to Cart */}
						<div className="space-y-4">
							<div className="flex items-center gap-4">
								<label className="text-sm font-medium text-gray-700">
									Quantity:
								</label>
								<div className="flex items-center border border-gray-300 rounded-md">
									<button
										onClick={() => {
											console.log('Decreasing quantity from', quantity);
											setQuantity(Math.max(1, quantity - 1));
										}}
										className="px-4 py-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation text-lg font-semibold"
										disabled={quantity <= 1}
									>
										-
									</button>
									<span className="px-4 py-3 border-x border-gray-300 min-w-[3rem] text-center text-lg font-medium">
										{quantity}
									</span>
									<button
										onClick={() => {
											console.log('Increasing quantity from', quantity);
											setQuantity(quantity + 1);
										}}
										className="px-4 py-3 hover:bg-gray-50 touch-manipulation text-lg font-semibold"
									>
										+
									</button>
								</div>
							</div>

							<div className="flex flex-col sm:flex-row gap-4">
								<Button
									onClick={handleAddToCart}
									disabled={!product.inStock}
									size="lg"
									className="flex-1 touch-manipulation"
								>
									{product.inStock ? (
										<>
											<ShoppingCart className="h-5 w-5 mr-2" />
											Add to Cart
										</>
									) : (
										<>
											<div className="h-5 w-5 mr-2 rounded-full bg-red-500" />
											Out of Stock
										</>
									)}
								</Button>
								<Button
									variant="outline"
									size="lg"
									onClick={handleWishlist}
									title="Add to Wishlist"
									className="touch-manipulation"
								>
									<Heart className="h-5 w-5" />
								</Button>
								<Button
									variant="outline"
									size="lg"
									onClick={handleShare}
									title="Share Product"
									className="touch-manipulation"
								>
									<Share2 className="h-5 w-5" />
								</Button>
							</div>
						</div>

						{/* Features */}
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
							<div className="flex items-center gap-2">
								<Truck className="h-5 w-5 text-blue-600" />
								<span className="text-sm text-gray-600">Free Shipping</span>
							</div>
							<div className="flex items-center gap-2">
								<Shield className="h-5 w-5 text-green-600" />
								<span className="text-sm text-gray-600">Secure Payment</span>
							</div>
							<div className="flex items-center gap-2">
								<RotateCcw className="h-5 w-5 text-purple-600" />
								<span className="text-sm text-gray-600">Easy Returns</span>
							</div>
						</div>
					</div>
				</div>

				{/* Related Products */}
				{relatedProducts.length > 0 && (
					<div className="mt-16">
						<h2 className="text-2xl font-bold text-gray-900 mb-8">
							Related Products
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
							{relatedProducts.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
