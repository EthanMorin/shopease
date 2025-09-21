import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useCart } from '../context/CartContext';

export default function Checkout() {
	const { items, getTotalPrice, clearCart } = useCart();
	const [isComplete, setIsComplete] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		firstName: '',
		lastName: '',
		address: '',
		city: '',
		zipCode: '',
		cardNumber: '',
		expiryDate: '',
		cvv: '',
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Simulate checkout process
		setIsComplete(true);
		clearCart();
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
					<Link to="/products">
						<Button>Continue Shopping</Button>
					</Link>
				</div>
			</div>
		);
	}

	if (isComplete) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="text-center max-w-md mx-auto">
					<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
						<CheckCircle className="h-8 w-8 text-green-600" />
					</div>
					<h1 className="text-2xl font-bold text-gray-900 mb-4">
						Order Complete!
					</h1>
					<p className="text-gray-600 mb-6">
						Thank you for your order. This is a demo, so no real payment was
						processed.
					</p>
					<Link to="/products">
						<Button>Continue Shopping</Button>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="flex items-center mb-8">
					<Link to="/cart" className="mr-4">
						<Button variant="outline" size="sm">
							<ArrowLeft className="h-4 w-4 mr-2" />
							Back to Cart
						</Button>
					</Link>
					<h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Checkout Form */}
					<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
						<h2 className="text-lg font-semibold text-gray-900 mb-6">
							Shipping Information
						</h2>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
								label="Email"
								type="email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
								required
							/>
							<Input
								label="Address"
								name="address"
								value={formData.address}
								onChange={handleInputChange}
								required
							/>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<Input
									label="City"
									name="city"
									value={formData.city}
									onChange={handleInputChange}
									required
								/>
								<Input
									label="ZIP Code"
									name="zipCode"
									value={formData.zipCode}
									onChange={handleInputChange}
									required
								/>
							</div>

							<h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">
								Payment Information
							</h3>
							<Input
								label="Card Number"
								name="cardNumber"
								value={formData.cardNumber}
								onChange={handleInputChange}
								placeholder="1234 5678 9012 3456"
								required
							/>
							<div className="grid grid-cols-2 gap-4">
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

							<Button type="submit" size="lg" className="w-full mt-6">
								Complete Order
							</Button>
						</form>
					</div>

					{/* Order Summary */}
					<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
						<h2 className="text-lg font-semibold text-gray-900 mb-4">
							Order Summary
						</h2>
						<div className="space-y-3">
							{items.map((item) => (
								<div key={item.id} className="flex items-center space-x-3">
									<img
										src={item.image}
										alt={item.name}
										className="w-12 h-12 object-cover rounded-md"
									/>
									<div className="flex-1">
										<h3 className="text-sm font-medium text-gray-900">
											{item.name}
										</h3>
										<p className="text-sm text-gray-500">
											Qty: {item.quantity}
										</p>
									</div>
									<span className="text-sm font-medium">
										${(item.price * item.quantity).toFixed(2)}
									</span>
								</div>
							))}
						</div>
						<div className="border-t border-gray-200 pt-4 mt-4">
							<div className="flex justify-between text-lg font-semibold">
								<span>Total</span>
								<span>${getTotalPrice().toFixed(2)}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
