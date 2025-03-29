import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Mock product data
const products = [
  {
    id: 1,
    name: 'Источники бесперебойного питания',
    description: 'Надежные ИБП для защиты вашего оборудования от перебоев в электроснабжении.',
    categories: ['ИБП', 'Энергетика'],
    slug: 'ups',
  },
  {
    id: 2,
    name: 'Автоматические выключатели',
    description: 'Современные системы защиты электрических цепей от перегрузок и коротких замыканий.',
    categories: ['Защита', 'Энергетика'],
    slug: 'circuit-breakers',
  },
  {
    id: 3,
    name: 'Молниезащита и заземление',
    description: 'Эффективные системы молниезащиты и заземления для обеспечения безопасности.',
    categories: ['Защита', 'Безопасность'],
    slug: 'lightning-protection',
  },
  {
    id: 4,
    name: 'Системы автоматизации',
    description: 'Решения для автоматизации процессов на производстве и в промышленности.',
    categories: ['Автоматизация', 'Управление'],
    slug: 'automation',
  },
  {
    id: 5,
    name: 'Кабельная продукция',
    description: 'Широкий ассортимент кабелей для различных областей применения.',
    categories: ['Кабели', 'Проводка'],
    slug: 'cables',
  },
  {
    id: 6,
    name: 'Электрощитовое оборудование',
    description: 'Комплексные решения для распределения электроэнергии.',
    categories: ['Электрощиты', 'Энергетика'],
    slug: 'switchboards',
  },
];

// All unique categories
const allCategories = Array.from(new Set(products.flatMap(product => product.categories)));

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Каталог продукции</h1>
            <p className="text-xl">
              Профессиональное электротехническое оборудование для вашего бизнеса
            </p>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar with Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <h2 className="text-xl font-bold mb-4">Категории</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/products" className="text-primary font-medium hover:text-accent">
                      Все категории
                    </Link>
                  </li>
                  {allCategories.map((category, index) => (
                    <li key={index}>
                      <Link href={`/products?category=${category}`} className="hover:text-accent">
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-4">Не нашли что искали?</h2>
                  <p className="text-gray-600 mb-4">Свяжитесь с нами для получения консультации и подбора оборудования под ваши задачи.</p>
                  <Link href="/contacts" className="btn btn-primary w-full text-center">
                    Связаться с нами
                  </Link>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Вся продукция</h2>
                  <p className="text-gray-600">{products.length} товарных категорий</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <select className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Сортировать по умолчанию</option>
                    <option>Сортировать по популярности</option>
                    <option>Сортировать по названию</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
                    <div className="h-48 bg-gray-200 relative">
                      {/* Replace with product image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-500 text-lg font-medium">Изображение продукта</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {product.categories.map((category, index) => (
                          <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                            {category}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <Link href={`/products/${product.slug}`} className="text-accent font-medium hover:underline">
                        Подробнее →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Нужна консультация?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Наши специалисты помогут вам подобрать оптимальное решение под ваши задачи и бюджет
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contacts" className="btn bg-accent hover:bg-accent-dark">
              Связаться с нами
            </Link>
            <Link href="/services" className="btn bg-transparent border-2 border-white hover:bg-white hover:text-primary">
              Наши услуги
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 