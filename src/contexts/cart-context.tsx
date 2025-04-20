'use client';
import { createContext, use, useContext, useState } from 'react';


interface CartContextType {
    items: string[];
    addToCart: (item: string) => void;
}

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<string[]>([]);

    function addToCart(item: string) {
        setItems((prevItems) => [...prevItems, item]);
    }

    return (
        <CartContext.Provider value={{ items, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}
export const useCart = () => useContext(CartContext);