'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartPage() {
	const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } =
		useCart();
	const [isUpdating, setIsUpdating] = useState<string | null>(null);

	const handleQuantityChange = async (
		productId: string,
		newQuantity: number
	) => {
		setIsUpdating(productId);
		// Simulate API call delay
		await new Promise((resolve) => setTimeout(resolve, 300));
		updateQuantity(productId, newQuantity);
		setIsUpdating(null);
	};

	const handleRemoveItem = async (productId: string) => {
		setIsUpdating(productId);
		await new Promise((resolve) => setTimeout(resolve, 300));
		removeFromCart(productId);
		setIsUpdating(null);
	};

	if (items.length === 0) {
		return (
			<div className="min-h-screen bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<div className="text-center">
						<div className="text-gray-400 mb-6">
							<ShoppingBag className="h-24 w-24 mx-auto" />
						</div>
						<h1 className="text-2xl font-bold text-gray-900 mb-4">
							Your cart is empty
						</h1>
						<p className="text-gray-600 mb-8">
							Looks like you haven't added any items to your cart yet.
						</p>
						<Link href="/products">
							<Button size="lg">
								<ArrowLeft className="h-5 w-5 mr-2" />
								Continue Shopping
							</Button>
						</Link>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
					<p className="text-gray-600 mt-2">
						{items.length} item{items.length !== 1 ? 's' : ''} in your cart
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Cart Items */}
					<div className="lg:col-span-2">
						<div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
							{items.map((item) => (
								<div
									key={item.product.id}
									className="flex items-center p-6 border-b border-gray-200 last:border-b-0"
								>
									<div className="relative w-20 h-20 flex-shrink-0">
										<Image
											src={item.product.image}
											alt={item.product.name}
											fill
											className="object-cover rounded-md"
										/>
									</div>

									<div className="flex-1 ml-4">
										<Link
											href={`/products/${item.product.id}`}
											className="text-lg font-medium text-gray-900 hover:text-blue-600"
										>
											{item.product.name}
										</Link>
										<p className="text-gray-600 text-sm mt-1">
											{item.product.category}
										</p>
										<div className="flex items-center mt-2">
											<span className="text-lg font-semibold text-gray-900">
												{formatPrice(item.product.price)}
											</span>
											{item.product.originalPrice &&
												item.product.originalPrice > item.product.price && (
													<span className="text-sm text-gray-500 line-through ml-2">
														{formatPrice(item.product.originalPrice)}
													</span>
												)}
										</div>
									</div>

									<div className="flex items-center space-x-4">
										{/* Quantity Controls */}
										<div className="flex items-center border border-gray-300 rounded-md">
											<button
												onClick={() =>
													handleQuantityChange(
														item.product.id,
														item.quantity - 1
													)
												}
												disabled={
													item.quantity <= 1 || isUpdating === item.product.id
												}
												className="p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
											>
												<Minus className="h-4 w-4" />
											</button>
											<span className="px-4 py-2 border-x border-gray-300 min-w-[3rem] text-center">
												{isUpdating === item.product.id ? '...' : item.quantity}
											</span>
											<button
												onClick={() =>
													handleQuantityChange(
														item.product.id,
														item.quantity + 1
													)
												}
												disabled={isUpdating === item.product.id}
												className="p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
											>
												<Plus className="h-4 w-4" />
											</button>
										</div>

										{/* Remove Button */}
										<button
											onClick={() => handleRemoveItem(item.product.id)}
											disabled={isUpdating === item.product.id}
											className="p-2 text-red-600 hover:bg-red-50 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
										>
											<Trash2 className="h-4 w-4" />
										</button>
									</div>
								</div>
							))}
						</div>

						{/* Clear Cart */}
						<div className="mt-6 flex justify-end">
							<Button
								variant="outline"
								onClick={clearCart}
								className="text-red-600 border-red-300 hover:bg-red-50"
							>
								Clear Cart
							</Button>
						</div>
					</div>

					{/* Order Summary */}
					<div className="lg:col-span-1">
						<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
							<h2 className="text-lg font-semibold text-gray-900 mb-4">
								Order Summary
							</h2>

							<div className="space-y-3 mb-6">
								<div className="flex justify-between">
									<span className="text-gray-600">Subtotal</span>
									<span className="font-medium">
										{formatPrice(getTotalPrice())}
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-600">Shipping</span>
									<span className="font-medium">
										{getTotalPrice() >= 50 ? 'Free' : formatPrice(9.99)}
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-600">Tax</span>
									<span className="font-medium">
										{formatPrice(getTotalPrice() * 0.08)}
									</span>
								</div>
								<div className="border-t border-gray-200 pt-3">
									<div className="flex justify-between text-lg font-semibold">
										<span>Total</span>
										<span>
											{formatPrice(
												getTotalPrice() +
													(getTotalPrice() >= 50 ? 0 : 9.99) +
													getTotalPrice() * 0.08
											)}
										</span>
									</div>
								</div>
							</div>

							<div className="space-y-3">
								<Link href="/checkout" className="block">
									<Button size="lg" className="w-full">
										Proceed to Checkout
									</Button>
								</Link>
								<Link href="/products">
									<Button variant="outline" size="lg" className="w-full">
										Continue Shopping
									</Button>
								</Link>
							</div>

							{/* Promo Code */}
							<div className="mt-6 pt-6 border-t border-gray-200">
								<h3 className="text-sm font-medium text-gray-900 mb-2">
									Promo Code
								</h3>
								<div className="flex gap-2">
									<input
										type="text"
										placeholder="Enter code"
										className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
									<Button size="sm" variant="outline">
										Apply
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
