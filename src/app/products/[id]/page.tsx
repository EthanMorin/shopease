import { getProductById, products } from '@/data/products';
import { ProductPageClient } from './ProductPageClient';

// Required for static export with dynamic routes
export function generateStaticParams() {
	return products.map((product) => ({
		id: product.id,
	}));
}

interface ProductPageProps {
	params: Promise<{
		id: string;
	}>;
}

export default async function ProductPage({ params }: ProductPageProps) {
	const { id } = await params;
	const product = getProductById(id);

	if (!product) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-2xl font-bold text-gray-900 mb-4">
						Product Not Found
					</h1>
					<p className="text-gray-600 mb-6">
						The product you&apos;re looking for doesn&apos;t exist.
					</p>
				</div>
			</div>
		);
	}

	return <ProductPageClient product={product} />;
}
