'use client'

import {useCart} from '@/contexts/cart-context'


export interface AddToCartButtonProps {
    productId: string;
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
    const { addToCart } = useCart();

    function handleAddToCart() {
        addToCart(productId);
    }

    return (
        <button
         type="button"
            onClick={handleAddToCart}
          className="mt-8 flex h-12 w-70 items-center justify-center rounded-full bg-emerald-600 font-semibold transition-colors hover:bg-emerald-500">
                Adicionar ao carrinho
            </button>
    );
}