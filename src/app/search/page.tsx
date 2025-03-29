"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Mock product data (replace with actual API call to your backend)
const mockProducts = [
  {
    id: 1,
    name: 'ИБП PowerGuard 1000VA',
    category: 'ups',
    image: '/products/ups-1.jpg',
    price: 15000,
    description: 'Источник бесперебойного питания мощностью 1000VA для защиты компьютерного оборудования.',
  },
  {
    id: 2,
    name: 'Автоматический выключатель 3P 63A',
    category: 'circuit-breakers',
    image: '/products/cb-1.jpg',
    price: 2500,
    description: 'Трехполюсный автоматический выключатель на 63 ампер для защиты электрических цепей.',
  },
  {
    id: 3,
    name: 'Комплект молниезащиты здания',
    category: 'lightning-protection',
    image: '/products/lp-1.jpg',
    price: 35000,
    description: 'Полный комплект для организации молниезащиты и заземления зданий и сооружений.',
  },
  {
    id: 4,
    name: 'ИБП PowerGuard 3000VA',
    category: 'ups',
    image: '/products/ups-2.jpg',
    price: 45000,
    description: 'Мощный источник бесперебойного питания для серверного оборудования.',
  },
  {
    id: 5,
    name: 'Модульный автомат 1P 16A',
    category: 'circuit-breakers',
    image: '/products/cb-2.jpg',
    price: 850,
    description: 'Компактный однополюсный автоматический выключатель для бытовых электросетей.',
  },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with a delay
    setLoading(true);
    setTimeout(() => {
      // Filter the mock products based on the search query
      const filteredProducts = mockProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) || 
        product.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredProducts);
      setLoading(false);
    }, 500);
  }, [query]);

  return (
    <main className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Результаты поиска: "{query}"</h1>
      
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((product) => (
            <div key={product.id} className="border-2 border-border rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48 bg-gray-100">
                {product.image && (
                  <div className="relative h-full w-full">
                    <div className="flex items-center justify-center h-full bg-gray-200 text-gray-400">
                      [Изображение товара]
                    </div>
                    {/* Uncomment when you have actual images */}
                    {/* <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-cover"
                    /> */}
                  </div>
                )}
              </div>
              <div className="p-4">
                <Link href={`/products/${product.category}/${product.id}`}>
                  <h2 className="text-xl font-semibold text-primary mb-2 hover:underline">{product.name}</h2>
                </Link>
                <p className="text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">{product.price.toLocaleString()} ₽</span>
                  <Link href={`/products/${product.category}/${product.id}`} className="btn btn-sm btn-primary">
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-2xl font-semibold mb-2">Товары не найдены</h2>
          <p className="text-gray-600 mb-6">По вашему запросу "{query}" ничего не найдено. Попробуйте изменить запрос.</p>
          <Link href="/products" className="btn btn-primary">
            Посмотреть все товары
          </Link>
        </div>
      )}
    </main>
  );
} 