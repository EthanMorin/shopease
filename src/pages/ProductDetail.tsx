import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import { ProductPageClient } from '../components/product/ProductPageClient';

export default function ProductDetail() {
	const { id } = useParams<{ id: string }>();
	const product = id ? getProductById(id) : null;

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
					<Link to="/products">
						<button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
							Back to Products
						</button>
					</Link>
				</div>
			</div>
		);
	}

	return <ProductPageClient product={product} />;
}
