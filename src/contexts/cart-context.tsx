'use client';

import { createContext, ReactNode, useContext, useState } from "react";

interface CartItem {
    productId: string;
    quantity: number;
}
interface CartContextType {
    cartItems: CartItem[];
    addToCart: (productId: string) => void;
    
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (productId: string) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.productId === productId);
            if (existingItem) {
                return prevItems.map(item =>
                    item.productId === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { productId, quantity: 1 }];
            }
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}