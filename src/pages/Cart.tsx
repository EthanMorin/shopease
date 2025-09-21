import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';

export default function Cart() {
	const {
		items,
		removeFromCart,
		updateQuantity,
		getTotalPrice,
		getTotalItems,
	} = useCart();

	if (items.length === 0) {
		return (
			<div className="min-h-screen bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="text-center">
						<div className="text-gray-400 mb-4">
							<svg
								className="h-16 w-16 mx-auto"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
								/>
							</svg>
						</div>
						<h1 className="text-2xl font-bold text-gray-900 mb-4">
							Your cart is empty
						</h1>
						<p className="text-gray-600 mb-8">
							Looks like you haven&apos;t added any items to your cart yet.
						</p>
						<Link to="/products">
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
				<div className="flex items-center mb-8">
					<Link to="/products" className="mr-4">
						<Button variant="outline" size="sm">
							<ArrowLeft className="h-4 w-4 mr-2" />
							Back to Products
						</Button>
					</Link>
					<h1 className="text-3xl font-bold text-gray-900">
						Shopping Cart ({getTotalItems()})
					</h1>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Cart Items */}
					<div className="lg:col-span-2">
						<div className="bg-white rounded-lg shadow-sm border border-gray-200">
							<div className="p-6">
								<h2 className="text-lg font-semibold text-gray-900 mb-4">
									Cart Items
								</h2>
								<div className="space-y-4">
									{items.map((item) => (
										<div
											key={item.id}
											className="flex items-center space-x-4 py-4 border-b border-gray-200 last:border-b-0"
										>
											<img
												src={item.image}
												alt={item.name}
												className="w-16 h-16 object-cover rounded-md"
											/>
											<div className="flex-1">
												<h3 className="text-sm font-medium text-gray-900">
													{item.name}
												</h3>
												<p className="text-sm text-gray-500">
													${item.price.toFixed(2)}
												</p>
											</div>
											<div className="flex items-center space-x-2">
												<button
													onClick={() =>
														updateQuantity(item.id, item.quantity - 1)
													}
													className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
												>
													-
												</button>
												<span className="w-8 text-center">{item.quantity}</span>
												<button
													onClick={() =>
														updateQuantity(item.id, item.quantity + 1)
													}
													className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
												>
													+
												</button>
											</div>
											<button
												onClick={() => removeFromCart(item.id)}
												className="text-red-500 hover:text-red-700"
											>
												<Trash2 className="h-4 w-4" />
											</button>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Order Summary */}
					<div className="lg:col-span-1">
						<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
							<h2 className="text-lg font-semibold text-gray-900 mb-4">
								Order Summary
							</h2>
							<div className="space-y-3">
								<div className="flex justify-between">
									<span className="text-gray-600">Subtotal</span>
									<span className="font-medium">
										${getTotalPrice().toFixed(2)}
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-600">Shipping</span>
									<span className="font-medium">Free</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-600">Tax</span>
									<span className="font-medium">$0.00</span>
								</div>
								<div className="border-t border-gray-200 pt-3">
									<div className="flex justify-between">
										<span className="text-lg font-semibold text-gray-900">
											Total
										</span>
										<span className="text-lg font-semibold text-gray-900">
											${getTotalPrice().toFixed(2)}
										</span>
									</div>
								</div>
							</div>
							<Link to="/checkout" className="block mt-6">
								<Button size="lg" className="w-full">
									Proceed to Checkout
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
