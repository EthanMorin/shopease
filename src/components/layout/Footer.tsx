import { Link } from 'react-router-dom';
import {
	Facebook,
	Twitter,
	Instagram,
	Mail,
	Phone,
	MapPin,
} from 'lucide-react';

export function Footer() {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div>
						<h3 className="text-xl font-bold mb-4">
							ShopEase{' '}
							<span className="text-sm text-gray-400 font-normal">
								(Portfolio Demo)
							</span>
						</h3>
						<p className="text-gray-300 mb-4">
							This is a portfolio demonstration project showcasing modern
							e-commerce web development skills. Built with Next.js, TypeScript,
							and Tailwind CSS.
							<strong className="text-yellow-400 block mt-2">
								⚠️ This is not a real store - no actual purchases can be made.
							</strong>
						</p>
						<div className="flex space-x-4">
							<a
								className="text-gray-300 hover:text-white transition-colors"
							>
								<Facebook className="h-5 w-5" />
							</a>
							<a
								className="text-gray-300 hover:text-white transition-colors"
							>
								<Twitter className="h-5 w-5" />
							</a>
							<a
								className="text-gray-300 hover:text-white transition-colors"
							>
								<Instagram className="h-5 w-5" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/products"
									className="text-gray-300 hover:text-white transition-colors"
								>
									All Products
								</Link>
							</li>
							<li>
								<Link
									to="/products?category=Electronics"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Electronics
								</Link>
							</li>
							<li>
								<Link
									to="/products?category=Clothing"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Clothing
								</Link>
							</li>
							<li>
								<Link
									to="/products?category=Accessories"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Accessories
								</Link>
							</li>
							<li>
								<Link
									to="/about"
									className="text-gray-300 hover:text-white transition-colors"
								>
									About Us
								</Link>
							</li>
						</ul>
					</div>

					{/* Customer Service */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Customer Service</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/contact"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									to="/shipping"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Shipping Info
								</Link>
							</li>
							<li>
								<Link
									to="/returns"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Returns & Exchanges
								</Link>
							</li>
							<li>
								<Link
									to="/faq"
									className="text-gray-300 hover:text-white transition-colors"
								>
									FAQ
								</Link>
							</li>
							<li>
								<Link
									to="/privacy"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Contact Info</h3>
						<div className="space-y-3">
							<div className="flex items-center">
								<Mail className="h-4 w-4 mr-3 text-gray-300" />
								<span className="text-gray-300">ethanmorin2004@gmail.com</span>
							</div>
							<div className="flex items-center">
								<Phone className="h-4 w-4 mr-3 text-gray-300" />
								<span className="text-gray-300">+1 (801) 651-5559</span>
							</div>
							<div className="flex items-start">
								<MapPin className="h-4 w-4 mr-3 mt-1 text-gray-300" />
								<span className="text-gray-300">
									Herriman, UT
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-8 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-300 text-sm">
							© {new Date().getFullYear()} Ethan Morin. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
