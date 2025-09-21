import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product, CartItem, CartContextType } from '../types';

type CartAction =
	| { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number } }
	| { type: 'REMOVE_FROM_CART'; payload: { productId: string } }
	| {
			type: 'UPDATE_QUANTITY';
			payload: { productId: string; quantity: number };
	  }
	| { type: 'CLEAR_CART' }
	| { type: 'LOAD_CART'; payload: CartItem[] };

const initialState: CartItem[] = [];

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
	switch (action.type) {
		case 'ADD_TO_CART': {
			const { product, quantity } = action.payload;
			const existingItem = state.find((item) => item.id === product.id);

			if (existingItem) {
				return state.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + quantity }
						: item
				);
			}

			return [
				...state,
				{
					id: product.id,
					name: product.name,
					price: product.price,
					image: product.image,
					quantity,
				},
			];
		}

		case 'REMOVE_FROM_CART': {
			return state.filter((item) => item.id !== action.payload.productId);
		}

		case 'UPDATE_QUANTITY': {
			const { productId, quantity } = action.payload;
			if (quantity <= 0) {
				return state.filter((item) => item.id !== productId);
			}

			return state.map((item) =>
				item.id === productId ? { ...item, quantity } : item
			);
		}

		case 'CLEAR_CART':
			return [];

		case 'LOAD_CART':
			return action.payload;

		default:
			return state;
	}
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [items, dispatch] = useReducer(cartReducer, initialState);

	// Load cart from localStorage on mount
	useEffect(() => {
		const savedCart = localStorage.getItem('cart');
		if (savedCart) {
			try {
				const parsedCart = JSON.parse(savedCart);
				dispatch({ type: 'LOAD_CART', payload: parsedCart });
			} catch (error) {
				console.error('Error loading cart from localStorage:', error);
			}
		}
	}, []);

	// Save cart to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(items));
	}, [items]);

	const addToCart = (product: Product, quantity: number = 1) => {
		dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } });
	};

	const removeFromCart = (productId: string) => {
		dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } });
	};

	const updateQuantity = (productId: string, quantity: number) => {
		dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
	};

	const clearCart = () => {
		dispatch({ type: 'CLEAR_CART' });
	};

	const getTotalPrice = () => {
		return items.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	const getTotalItems = () => {
		return items.reduce((total, item) => total + item.quantity, 0);
	};

	const value: CartContextType = {
		items,
		addToCart,
		removeFromCart,
		updateQuantity,
		clearCart,
		getTotalPrice,
		getTotalItems,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
}
