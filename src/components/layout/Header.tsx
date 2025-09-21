'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/utils';

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const { getTotalItems } = useCart();
	const router = useRouter();
	const pathname = usePathname();

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchQuery.trim()) {
			router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
			setSearchQuery('');
			setIsSearchOpen(false);
		}
	};

	const totalItems = getTotalItems();

	// Helper function to check if a link is active
	const isActive = (path: string) => {
		if (path === '/') {
			return pathname === '/';
		}
		return pathname.startsWith(path);
	};

	return (
		<header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Main header row */}
				<div className="flex items-center justify-between h-16">
					{/* Logo - Mobile optimized */}
					<Link href="/" className="flex items-center flex-shrink-0">
						<div className="text-xl sm:text-2xl font-bold text-blue-600">
							ShopEase
							<span className="text-xs text-gray-500 ml-1 sm:ml-2 font-normal hidden sm:inline">
								(Portfolio Demo)
							</span>
						</div>
					</Link>

					{/* Desktop Search - Hidden on mobile */}
					<div className="hidden lg:block flex-1 max-w-lg mx-8">
						<form onSubmit={handleSearch}>
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
								<Input
									type="text"
									placeholder="Search products..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="pl-10"
								/>
							</div>
						</form>
					</div>

					{/* Desktop Navigation - Hidden on mobile */}
					<nav className="hidden lg:flex items-center space-x-8">
						<Link
							href="/"
							className={cn(
								'transition-colors text-sm font-medium',
								isActive('/')
									? 'text-blue-600'
									: 'text-gray-700 hover:text-blue-600'
							)}
						>
							Home
						</Link>
						<Link
							href="/products"
							className={cn(
								'transition-colors text-sm font-medium',
								isActive('/products')
									? 'text-blue-600'
									: 'text-gray-700 hover:text-blue-600'
							)}
						>
							Products
						</Link>
						<Link
							href="/about"
							className={cn(
								'transition-colors text-sm font-medium',
								isActive('/about')
									? 'text-blue-600'
									: 'text-gray-700 hover:text-blue-600'
							)}
						>
							About
						</Link>
						<Link
							href="/contact"
							className={cn(
								'transition-colors text-sm font-medium',
								isActive('/contact')
									? 'text-blue-600'
									: 'text-gray-700 hover:text-blue-600'
							)}
						>
							Contact
						</Link>
					</nav>

					{/* Right side actions */}
					<div className="flex items-center space-x-2 sm:space-x-4">
						{/* Search - Mobile only */}
						<button
							onClick={() => setIsSearchOpen(!isSearchOpen)}
							className="lg:hidden p-3 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors"
						>
							<Search className="h-5 w-5" />
						</button>

						{/* Shopping Cart */}
						<Link
							href="/cart"
							className="relative p-3 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors"
						>
							<ShoppingCart className="h-5 w-5" />
							{totalItems > 0 && (
								<span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
									{totalItems}
								</span>
							)}
						</Link>

						{/* Mobile menu button */}
						<button
							onClick={() => {
								setIsMenuOpen(!isMenuOpen);
								setIsSearchOpen(false);
							}}
							className="lg:hidden p-3 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors"
						>
							{isMenuOpen ? (
								<X className="h-5 w-5" />
							) : (
								<Menu className="h-5 w-5" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Search Bar - Full width overlay */}
				{isSearchOpen && (
					<div className="lg:hidden border-t border-gray-200 bg-white">
						<div className="p-4">
							<form onSubmit={handleSearch}>
								<div className="relative">
									<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
									<Input
										type="text"
										placeholder="Search products..."
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
										className="pl-12 pr-4 h-12 text-base"
										autoFocus
									/>
								</div>
							</form>
						</div>
					</div>
				)}

				{/* Mobile Navigation - Full screen overlay */}
				{isMenuOpen && (
					<div className="lg:hidden border-t border-gray-200 bg-white">
						<div className="px-4 py-6">
							{/* Mobile Navigation Links */}
							<nav className="space-y-1 mb-6">
								<Link
									href="/"
									className={cn(
										'flex items-center px-4 py-4 rounded-lg text-lg font-medium transition-colors',
										isActive('/')
											? 'text-blue-600 bg-blue-50'
											: 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
									)}
									onClick={() => setIsMenuOpen(false)}
								>
									Home
								</Link>
								<Link
									href="/products"
									className={cn(
										'flex items-center px-4 py-4 rounded-lg text-lg font-medium transition-colors',
										isActive('/products')
											? 'text-blue-600 bg-blue-50'
											: 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
									)}
									onClick={() => setIsMenuOpen(false)}
								>
									Products
								</Link>
								<Link
									href="/about"
									className={cn(
										'flex items-center px-4 py-4 rounded-lg text-lg font-medium transition-colors',
										isActive('/about')
											? 'text-blue-600 bg-blue-50'
											: 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
									)}
									onClick={() => setIsMenuOpen(false)}
								>
									About
								</Link>
								<Link
									href="/contact"
									className={cn(
										'flex items-center px-4 py-4 rounded-lg text-lg font-medium transition-colors',
										isActive('/contact')
											? 'text-blue-600 bg-blue-50'
											: 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
									)}
									onClick={() => setIsMenuOpen(false)}
								>
									Contact
								</Link>
							</nav>

							{/* Mobile User Actions */}
							<div className="border-t border-gray-200 pt-4">
								<div className="space-y-2">
									<Link
										href="/cart"
										className="flex items-center w-full px-4 py-4 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
										onClick={() => setIsMenuOpen(false)}
									>
										<div className="relative mr-3">
											<ShoppingCart className="h-5 w-5" />
											{totalItems > 0 && (
												<span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">
													{totalItems}
												</span>
											)}
										</div>
										<span className="text-lg font-medium">Shopping Cart</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
