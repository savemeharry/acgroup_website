"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

// Типы
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getTotal: () => number;
};

// Создание контекста с начальными значениями
const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  getItemCount: () => 0,
  getTotal: () => 0,
});

// Хук для использования контекста
export const useCart = () => useContext(CartContext);

// Провайдер контекста
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Добавить товар в корзину
  const addItem = (item: CartItem) => {
    setItems(prevItems => {
      // Проверить, есть ли уже такой товар в корзине
      const existingItem = prevItems.find(i => i.id === item.id);
      
      if (existingItem) {
        // Если товар уже есть, увеличить количество
        return prevItems.map(i => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + item.quantity } 
            : i
        );
      } else {
        // Иначе добавить новый товар
        return [...prevItems, item];
      }
    });
  };

  // Удалить товар из корзины
  const removeItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Обновить количество товара
  const updateQuantity = (id: string, quantity: number) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Очистить корзину
  const clearCart = () => {
    setItems([]);
  };

  // Получить общее количество товаров
  const getItemCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  // Получить общую стоимость
  const getTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addItem, 
        removeItem, 
        updateQuantity, 
        clearCart, 
        getItemCount, 
        getTotal 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}; 