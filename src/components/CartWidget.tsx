"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/format';

export const CartWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeItem, getItemCount, getTotal } = useCart();
  
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };
  
  const itemCount = getItemCount();
  const totalPrice = getTotal();
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Основная кнопка корзины */}
      <button 
        onClick={toggleCart}
        className="bg-accent hover:bg-accent-dark text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-all relative"
      >
        <FaShoppingCart className="w-6 h-6" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
            {itemCount}
          </span>
        )}
      </button>
      
      {/* Всплывающая панель корзины */}
      <div className={`absolute bottom-20 right-0 bg-white rounded-lg shadow-lg transition-all duration-300 w-80 
        ${isOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform translate-y-4'}`}>
        <div className="p-4 border-b border-border">
          <h3 className="text-lg font-bold text-primary">Корзина</h3>
        </div>
        
        {itemCount === 0 ? (
          <div className="p-6 text-center text-text-light">
            <p className="mb-4">Ваша корзина пуста</p>
            <Link href="/products" className="text-accent hover:underline">
              Перейти в каталог
            </Link>
          </div>
        ) : (
          <div className="py-2 px-4 max-h-60 overflow-y-auto">
            {/* Отображение товаров в корзине */}
            {items.map(item => (
              <div key={item.id} className="flex justify-between items-center py-3 border-b border-border">
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{item.name}</h4>
                  <p className="text-xs text-text-light">{item.quantity} × {formatPrice(item.price)}</p>
                </div>
                <button 
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeItem(item.id)}  
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
        
        <div className="p-4 border-t border-border">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Итого:</span>
            <span className="font-bold">{formatPrice(totalPrice)}</span>
          </div>
          <Link 
            href="/cart" 
            className={`btn btn-primary w-full ${itemCount === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={(e) => itemCount === 0 && e.preventDefault()}
          >
            Оформить заказ
          </Link>
        </div>
      </div>
    </div>
  );
}; 