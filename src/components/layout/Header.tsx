'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/utils';

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const { getTotalItems } = useCart();
	const router = useRouter();
	const pathname = usePathname();

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchQuery.trim()) {
			router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
			setSearchQuery('');
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
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link href="/" className="flex items-center">
						<div className="text-2xl font-bold text-blue-600">
							ShopEase
							<span className="text-xs text-gray-500 ml-2 font-normal">
								(Portfolio Demo)
							</span>
						</div>
					</Link>

					{/* Search Bar - Desktop */}
					<form
						onSubmit={handleSearch}
						className="hidden md:flex flex-1 max-w-lg mx-8"
					>
						<div className="relative w-full">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
							<Input
								type="text"
								placeholder="Search products..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="pl-10 pr-4"
							/>
						</div>
					</form>

					{/* Navigation - Desktop */}
					<nav className="hidden md:flex items-center space-x-8">
						<Link
							href="/"
							className={cn(
								'transition-colors',
								isActive('/')
									? 'text-blue-600 font-medium'
									: 'text-gray-700 hover:text-blue-600'
							)}
						>
							Home
						</Link>
						<Link
							href="/products"
							className={cn(
								'transition-colors',
								isActive('/products')
									? 'text-blue-600 font-medium'
									: 'text-gray-700 hover:text-blue-600'
							)}
						>
							Products
						</Link>
						<Link
							href="/about"
							className={cn(
								'transition-colors',
								isActive('/about')
									? 'text-blue-600 font-medium'
									: 'text-gray-700 hover:text-blue-600'
							)}
						>
							About
						</Link>
						<Link
							href="/contact"
							className={cn(
								'transition-colors',
								isActive('/contact')
									? 'text-blue-600 font-medium'
									: 'text-gray-700 hover:text-blue-600'
							)}
						>
							Contact
						</Link>
					</nav>

					{/* Right side actions */}
					<div className="flex items-center space-x-4">
						{/* Search - Mobile */}
						<button className="md:hidden p-2 text-gray-600 hover:text-blue-600">
							<Search className="h-5 w-5" />
						</button>

						{/* User Account */}
						<button className="p-2 text-gray-600 hover:text-blue-600">
							<User className="h-5 w-5" />
						</button>

						{/* Shopping Cart */}
						<Link
							href="/cart"
							className="relative p-2 text-gray-600 hover:text-blue-600"
						>
							<ShoppingCart className="h-5 w-5" />
							{totalItems > 0 && (
								<span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
									{totalItems}
								</span>
							)}
						</Link>

						{/* Mobile menu button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden p-2 text-gray-600 hover:text-blue-600"
						>
							{isMenuOpen ? (
								<X className="h-5 w-5" />
							) : (
								<Menu className="h-5 w-5" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Search Bar */}
				<div className="md:hidden pb-4">
					<form onSubmit={handleSearch}>
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
							<Input
								type="text"
								placeholder="Search products..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="pl-10 pr-4"
							/>
						</div>
					</form>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden border-t border-gray-200 py-4">
						<nav className="flex flex-col space-y-4">
							<Link
								href="/"
								className={cn(
									'transition-colors',
									isActive('/')
										? 'text-blue-600 font-medium'
										: 'text-gray-700 hover:text-blue-600'
								)}
								onClick={() => setIsMenuOpen(false)}
							>
								Home
							</Link>
							<Link
								href="/products"
								className={cn(
									'transition-colors',
									isActive('/products')
										? 'text-blue-600 font-medium'
										: 'text-gray-700 hover:text-blue-600'
								)}
								onClick={() => setIsMenuOpen(false)}
							>
								Products
							</Link>
							<Link
								href="/about"
								className={cn(
									'transition-colors',
									isActive('/about')
										? 'text-blue-600 font-medium'
										: 'text-gray-700 hover:text-blue-600'
								)}
								onClick={() => setIsMenuOpen(false)}
							>
								About
							</Link>
							<Link
								href="/contact"
								className={cn(
									'transition-colors',
									isActive('/contact')
										? 'text-blue-600 font-medium'
										: 'text-gray-700 hover:text-blue-600'
								)}
								onClick={() => setIsMenuOpen(false)}
							>
								Contact
							</Link>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
