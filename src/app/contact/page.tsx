'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log('Form submitted:', formData);
		alert("Thank you for your message! We'll get back to you soon.");
		setFormData({ name: '', email: '', subject: '', message: '' });
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Get in Touch
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Questions about this project or want to discuss development work?
						I'd love to hear from you.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Form */}
					<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
						<h2 className="text-2xl font-bold text-gray-900 mb-6">
							Send a message
						</h2>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<Input
									label="First Name"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									required
								/>
								<Input
									label="Email Address"
									type="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									required
								/>
							</div>
							<Input
								label="Subject"
								name="subject"
								value={formData.subject}
								onChange={handleInputChange}
								required
							/>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Message
								</label>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleInputChange}
									rows={6}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
									placeholder="Tell us how we can help you..."
									required
								/>
							</div>
							<Button type="submit" size="lg" className="w-full">
								<Send className="h-5 w-5 mr-2" />
								Send Message
							</Button>
						</form>
					</div>

					{/* Contact Information */}
					<div className="space-y-8">
						{/* Contact Details */}
						<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								Get in touch
							</h2>
							<div className="space-y-6">
								<div className="flex items-start">
									<div className="bg-blue-100 p-3 rounded-lg mr-4">
										<Mail className="h-6 w-6 text-blue-600" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">Email</h3>
										<p className="text-gray-600">ethan@example.com</p>
										<p className="text-sm text-gray-500">
											I'll get back to you soon
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="bg-green-100 p-3 rounded-lg mr-4">
										<Phone className="h-6 w-6 text-green-600" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
										<p className="text-gray-600">+1 (555) 123-4567</p>
										<p className="text-sm text-gray-500">Available most days</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="bg-purple-100 p-3 rounded-lg mr-4">
										<MapPin className="h-6 w-6 text-purple-600" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">
											Location
										</h3>
										<p className="text-gray-600">
											Remote Developer
											<br />
											Available worldwide
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="bg-yellow-100 p-3 rounded-lg mr-4">
										<Clock className="h-6 w-6 text-yellow-600" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">
											Availability
										</h3>
										<p className="text-gray-600">
											Flexible schedule
											<br />
											Quick response time
											<br />
											Open to new projects
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* FAQ */}
						<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								Frequently Asked Questions
							</h2>
							<div className="space-y-4">
								<div>
									<h3 className="font-semibold text-gray-900 mb-2">
										How can I track my order?
									</h3>
									<p className="text-gray-600 text-sm">
										Once your order ships, you'll receive a tracking number via
										email. You can also track your order in your account
										dashboard.
									</p>
								</div>
								<div>
									<h3 className="font-semibold text-gray-900 mb-2">
										What is your return policy?
									</h3>
									<p className="text-gray-600 text-sm">
										We offer a 30-day return policy for most items. Items must
										be in original condition with tags attached.
									</p>
								</div>
								<div>
									<h3 className="font-semibold text-gray-900 mb-2">
										Do you offer international shipping?
									</h3>
									<p className="text-gray-600 text-sm">
										Currently, we ship within the United States and Canada.
										International shipping is coming soon!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
