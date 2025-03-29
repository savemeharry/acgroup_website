"use client";

import React from 'react';
import { useCart } from '@/context/CartContext';

type AddToCartButtonProps = {
  id: string;
  name: string;
  price: number;
  className?: string;
};

export const AddToCartButton = ({ id, name, price, className = '' }: AddToCartButtonProps) => {
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      quantity: 1
    });
  };
  
  return (
    <button 
      onClick={handleAddToCart}
      className={`btn btn-primary ${className}`}
    >
      В корзину
    </button>
  );
}; 