import {
	Truck,
	Shield,
	RotateCcw,
	Star,
	Users,
	Award,
	User,
} from 'lucide-react';

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				{/* Hero Section */}
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						About This Portfolio Project
					</h1>
					<div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
						<p className="text-lg text-blue-800 font-semibold mb-2">
							🚀 Portfolio E-commerce Demonstration
						</p>
						<p className="text-gray-700 max-w-3xl mx-auto">
							This is a portfolio project showcasing modern full-stack web
							development skills. Built with Next.js 15, TypeScript, and
							Tailwind CSS, it demonstrates e-commerce functionality including
							product catalogs, shopping carts, and responsive design.
						</p>
						<div className="mt-4 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
							<p className="text-yellow-800 font-semibold">
								⚠️ This is a demonstration project - no real transactions can be
								processed
							</p>
						</div>
					</div>
				</div>

				{/* Project Goals & Technologies */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
					<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">
							Project Goals
						</h2>
						<p className="text-gray-600 leading-relaxed">
							I wanted to build something that shows off my web dev skills while
							being actually useful. This project lets me practice with modern
							tools like React, Next.js, and TypeScript in a real-world context.
						</p>
					</div>
					<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">
							Technologies Used
						</h2>
						<p className="text-gray-600 leading-relaxed">
							I used Next.js 15 with TypeScript for the framework, Tailwind for
							styling, and deployed it on Cloudflare Pages. The site is fully
							responsive and uses static generation for better performance.
						</p>
					</div>
				</div>

				{/* What I Focus On */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
						What I Focus On
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<Shield className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Clean Code
							</h3>
							<p className="text-gray-600">
								I try to write code that's easy to read and maintain. Good
								practices make everything easier to work with.
							</p>
						</div>
						<div className="text-center">
							<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<Star className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								User Experience
							</h3>
							<p className="text-gray-600">
								I care about how things work and feel. Good UX makes the
								difference between something people use and something they
								don't.
							</p>
						</div>
						<div className="text-center">
							<div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<Users className="h-8 w-8 text-purple-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Learning & Growth
							</h3>
							<p className="text-gray-600">
								I'm always trying to learn new things and improve my skills.
								This project is part of that journey.
							</p>
						</div>
						<div className="text-center">
							<div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<Award className="h-8 w-8 text-yellow-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Problem Solving
							</h3>
							<p className="text-gray-600">
								I enjoy figuring out how to make things work better. Every bug
								is just a puzzle waiting to be solved.
							</p>
						</div>
						<div className="text-center">
							<div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<RotateCcw className="h-8 w-8 text-red-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Attention to Detail
							</h3>
							<p className="text-gray-600">
								The small things matter. I pay attention to spacing, colors, and
								how everything fits together.
							</p>
						</div>
						<div className="text-center">
							<div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<Truck className="h-8 w-8 text-indigo-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								Performance
							</h3>
							<p className="text-gray-600">
								I care about making things fast and efficient. Nobody likes slow
								websites.
							</p>
						</div>
					</div>
				</div>

				{/* Project Stats */}
				<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white p-12 mb-16">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
						<div>
							<div className="text-4xl font-bold mb-2">6</div>
							<div className="text-blue-100">Products</div>
						</div>
						<div>
							<div className="text-4xl font-bold mb-2">100%</div>
							<div className="text-blue-100">TypeScript</div>
						</div>
						<div>
							<div className="text-4xl font-bold mb-2">3</div>
							<div className="text-blue-100">Categories</div>
						</div>
						<div>
							<div className="text-4xl font-bold mb-2">1</div>
							<div className="text-blue-100">Developer</div>
						</div>
					</div>
				</div>

				{/* About Me */}
				<div className="text-center">
					<h2 className="text-3xl font-bold text-gray-900 mb-12">
						About the Developer
					</h2>
					<div className="max-w-2xl mx-auto">
						<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
							<div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
								<User className="h-16 w-16 text-blue-600" />
							</div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-2">
								Ethan Morin
							</h3>
							<p className="text-blue-600 mb-4 text-lg">Full-Stack Developer</p>
							<p className="text-gray-600 leading-relaxed">
								I built this e-commerce demo to showcase my skills with modern
								web technologies. I enjoy working with React, TypeScript, and
								creating user-friendly interfaces. This project demonstrates my
								ability to build complete, functional applications from frontend
								to deployment.
							</p>
							<div className="mt-6 flex justify-center space-x-4">
								<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
									React
								</span>
								<span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
									TypeScript
								</span>
								<span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
									Next.js
								</span>
								<span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">
									Tailwind
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
