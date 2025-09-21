'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { formatPrice } from '@/lib/utils';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export default function CheckoutPage() {
	const { items, getTotalPrice, clearCart } = useCart();
	const router = useRouter();
	const [isProcessing, setIsProcessing] = useState(false);
	const [isComplete, setIsComplete] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		firstName: '',
		lastName: '',
		address: '',
		city: '',
		state: '',
		zipCode: '',
		country: 'United States',
		phone: '',
		cardNumber: '',
		expiryDate: '',
		cvv: '',
		nameOnCard: '',
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsProcessing(true);

		// Simulate processing
		await new Promise((resolve) => setTimeout(resolve, 2000));

		setIsComplete(true);
		clearCart();
		setIsProcessing(false);
	};

	if (items.length === 0 && !isComplete) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-2xl font-bold text-gray-900 mb-4">
						Your cart is empty
					</h1>
					<p className="text-gray-600 mb-6">
						Add some items to your cart before checking out.
					</p>
					<Button onClick={() => router.push('/products')}>
						<ArrowLeft className="h-4 w-4 mr-2" />
						Continue Shopping
					</Button>
				</div>
			</div>
		);
	}

	if (isComplete) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="text-center max-w-md mx-auto">
					<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
						<CheckCircle className="h-8 w-8 text-green-600" />
					</div>
					<h1 className="text-3xl font-bold text-gray-900 mb-4">
						Demo Order Complete!
					</h1>
					<p className="text-gray-600 mb-4">
						This demonstrates a complete checkout flow with form validation,
						calculations, and order processing.
					</p>
					<div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
						<p className="text-blue-800 text-sm">
							<strong>Portfolio Demo:</strong> No real transaction was
							processed. This showcases full-stack e-commerce functionality.
						</p>
					</div>
					<div className="space-y-4">
						<Button
							onClick={() => router.push('/products')}
							size="lg"
							className="w-full"
						>
							Continue Shopping
						</Button>
						<Button
							variant="outline"
							onClick={() => router.push('/')}
							className="w-full"
						>
							Back to Home
						</Button>
					</div>
				</div>
			</div>
		);
	}

	const subtotal = getTotalPrice();
	const shipping = subtotal >= 50 ? 0 : 9.99;
	const tax = subtotal * 0.08;
	const total = subtotal + shipping + tax;

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Portfolio Demo Warning */}
				<div className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
					<div className="flex items-start">
						<div className="flex-shrink-0">
							<div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
								<span className="text-yellow-800 font-bold text-sm">⚠️</span>
							</div>
						</div>
						<div className="ml-3">
							<h3 className="text-lg font-semibold text-yellow-800 mb-2">
								Portfolio Demo - Checkout Process
							</h3>
							<p className="text-yellow-700">
								This is a demonstration of a complete e-commerce checkout flow.
								All form validation, calculations, and UI interactions are fully
								functional to showcase development skills.{' '}
								<strong>No real transactions will be processed.</strong>
							</p>
						</div>
					</div>
				</div>

				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
					<p className="text-gray-600 mt-2">
						Complete your order (Portfolio Demo)
					</p>
				</div>

				<form
					onSubmit={handleSubmit}
					className="grid grid-cols-1 lg:grid-cols-2 gap-8"
				>
					{/* Checkout Form */}
					<div className="space-y-8">
						{/* Contact Information */}
						<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
							<h2 className="text-lg font-semibold text-gray-900 mb-4">
								Contact Information
							</h2>
							<div className="space-y-4">
								<Input
									label="Email Address"
									type="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									required
								/>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<Input
										label="First Name"
										name="firstName"
										value={formData.firstName}
										onChange={handleInputChange}
										required
									/>
									<Input
										label="Last Name"
										name="lastName"
										value={formData.lastName}
										onChange={handleInputChange}
										required
									/>
								</div>
								<Input
									label="Phone Number"
									type="tel"
									name="phone"
									value={formData.phone}
									onChange={handleInputChange}
									required
								/>
							</div>
						</div>

						{/* Shipping Address */}
						<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
							<h2 className="text-lg font-semibold text-gray-900 mb-4">
								Shipping Address
							</h2>
							<div className="space-y-4">
								<Input
									label="Street Address"
									name="address"
									value={formData.address}
									onChange={handleInputChange}
									required
								/>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<Input
										label="City"
										name="city"
										value={formData.city}
										onChange={handleInputChange}
										required
									/>
									<Input
										label="State"
										name="state"
										value={formData.state}
										onChange={handleInputChange}
										required
									/>
								</div>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<Input
										label="ZIP Code"
										name="zipCode"
										value={formData.zipCode}
										onChange={handleInputChange}
										required
									/>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Country
										</label>
										<select
											name="country"
											value={formData.country}
											onChange={handleInputChange}
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
											required
										>
											<option value="United States">United States</option>
											<option value="Canada">Canada</option>
											<option value="United Kingdom">United Kingdom</option>
										</select>
									</div>
								</div>
							</div>
						</div>

						{/* Payment Information */}
						<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
							<h2 className="text-lg font-semibold text-gray-900 mb-4">
								Payment Information
							</h2>
							<div className="space-y-4">
								<Input
									label="Card Number"
									name="cardNumber"
									value={formData.cardNumber}
									onChange={handleInputChange}
									placeholder="1234 5678 9012 3456"
									required
								/>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<Input
										label="Expiry Date"
										name="expiryDate"
										value={formData.expiryDate}
										onChange={handleInputChange}
										placeholder="MM/YY"
										required
									/>
									<Input
										label="CVV"
										name="cvv"
										value={formData.cvv}
										onChange={handleInputChange}
										placeholder="123"
										required
									/>
								</div>
								<Input
									label="Name on Card"
									name="nameOnCard"
									value={formData.nameOnCard}
									onChange={handleInputChange}
									required
								/>
							</div>
						</div>
					</div>

					{/* Order Summary */}
					<div className="lg:col-span-1">
						<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
							<h2 className="text-lg font-semibold text-gray-900 mb-4">
								Order Summary
							</h2>

							{/* Order Items */}
							<div className="space-y-3 mb-6">
								{items.map((item) => (
									<div
										key={item.product.id}
										className="flex justify-between text-sm"
									>
										<span className="text-gray-600">
											{item.product.name} × {item.quantity}
										</span>
										<span className="font-medium">
											{formatPrice(item.product.price * item.quantity)}
										</span>
									</div>
								))}
							</div>

							{/* Totals */}
							<div className="space-y-3 mb-6 border-t border-gray-200 pt-4">
								<div className="flex justify-between">
									<span className="text-gray-600">Subtotal</span>
									<span className="font-medium">{formatPrice(subtotal)}</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-600">Shipping</span>
									<span className="font-medium">
										{shipping === 0 ? 'Free' : formatPrice(shipping)}
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-600">Tax</span>
									<span className="font-medium">{formatPrice(tax)}</span>
								</div>
								<div className="border-t border-gray-200 pt-3">
									<div className="flex justify-between text-lg font-semibold">
										<span>Total</span>
										<span>{formatPrice(total)}</span>
									</div>
								</div>
							</div>

							<Button
								type="submit"
								size="lg"
								className="w-full"
								disabled={isProcessing}
							>
								{isProcessing
									? 'Processing Demo...'
									: `Complete Demo Order - ${formatPrice(total)}`}
							</Button>

							<div className="mt-4 space-y-2">
								<p className="text-xs text-gray-500 text-center">
									<strong>Portfolio Demo:</strong> This simulates a complete
									checkout process.
								</p>
								<p className="text-xs text-gray-500 text-center">
									No real payment will be processed.
								</p>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
