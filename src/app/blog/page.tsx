import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';

// Данные статей блога
const blogPosts = [
  {
    id: 1,
    title: 'Как выбрать источник бесперебойного питания для офиса',
    excerpt: 'В этой статье мы рассмотрим основные критерии выбора ИБП для офисных помещений и расскажем о типичных ошибках при подборе оборудования.',
    date: '15 марта 2023',
    author: 'Александр Иванов',
    category: 'Оборудование',
    image: '/images/blog/Main_Post_01.jpg',
    tags: ['ИБП', 'Офисное оборудование', 'Электроснабжение']
  },
  {
    id: 2,
    title: 'Новые технологии в системах молниезащиты',
    excerpt: 'Обзор современных технологий и материалов, используемых в системах молниезащиты, и их преимущества перед традиционными решениями.',
    date: '28 февраля 2023',
    author: 'Мария Петрова',
    category: 'Технологии',
    image: '/images/blog/lightning-protection.jpg',
    tags: ['Молниезащита', 'Инновации', 'Безопасность']
  },
  {
    id: 3,
    title: 'Как снизить энергопотребление промышленного предприятия',
    excerpt: 'Практические рекомендации по оптимизации энергопотребления на промышленных объектах и расчет экономического эффекта от внедрения энергосберегающих технологий.',
    date: '10 февраля 2023',
    author: 'Сергей Сидоров',
    category: 'Энергоэффективность',
    image: '/images/blog/energy-efficiency.jpg',
    tags: ['Энергосбережение', 'Промышленность', 'Экономия']
  },
  {
    id: 4,
    title: 'Автоматизация систем электроснабжения: преимущества и возможности',
    excerpt: 'Рассказываем о преимуществах автоматизации систем электроснабжения и современных технологиях, которые позволяют повысить надежность и эффективность работы.',
    date: '25 января 2023',
    author: 'Алексей Козлов',
    category: 'Автоматизация',
    image: '/images/blog/automation.jpg',
    tags: ['Автоматизация', 'Умные системы', 'Электроснабжение']
  },
  {
    id: 5,
    title: 'Правила технического обслуживания электроустановок',
    excerpt: 'Обзор основных требований и рекомендаций по техническому обслуживанию электроустановок для обеспечения их надежной и безопасной работы.',
    date: '12 января 2023',
    author: 'Ирина Смирнова',
    category: 'Обслуживание',
    image: '/images/blog/maintenance.jpg',
    tags: ['Техническое обслуживание', 'Электроустановки', 'Безопасность']
  },
  {
    id: 6,
    title: 'Тренды в области энергетики на 2023 год',
    excerpt: 'Анализ основных тенденций и перспектив развития энергетической отрасли в текущем году, включая возобновляемые источники энергии и цифровизацию.',
    date: '5 января 2023',
    author: 'Дмитрий Волков',
    category: 'Тренды',
    image: '/images/blog/energy-trends.jpg',
    tags: ['Тренды', 'Энергетика', 'Инновации']
  }
];

// Все уникальные категории
const categories = Array.from(new Set(blogPosts.map(post => post.category)));

// Все уникальные теги
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Блог</h1>
            <p className="text-xl">
              Полезные статьи, новости и обзоры из мира электротехники и энергетики
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                {/* Search */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Поиск</h2>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Поиск по блогу..."
                      className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Категории</h2>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link href={`/blog?category=${category}`} className="flex items-center justify-between hover:text-accent">
                          <span>{category}</span>
                          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                            {blogPosts.filter(post => post.category === category).length}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Popular Tags */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Популярные теги</h2>
                  <div className="flex flex-wrap gap-2">
                    {allTags.slice(0, 10).map((tag, index) => (
                      <Link key={index} href={`/blog?tag=${tag}`} className="bg-gray-100 hover:bg-primary hover:text-white text-gray-700 text-sm px-3 py-1 rounded-full transition-colors">
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Recent Posts */}
                <div>
                  <h2 className="text-xl font-bold mb-4">Недавние статьи</h2>
                  <ul className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <li key={post.id} className="flex items-start">
                        <div className="w-16 h-16 bg-gray-200 rounded-md flex-shrink-0 mr-3"></div>
                        <div>
                          <Link href={`/blog/${post.id}`} className="font-medium hover:text-accent">
                            {post.title}
                          </Link>
                          <p className="text-gray-500 text-sm">{post.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
                <div className="h-80 relative">
                  <img 
                    src="/images/blog/Main_Post_01.jpg" 
                    alt={blogPosts[0].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-sm px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <FaCalendarAlt className="mr-2" />
                    <span className="mr-4">{blogPosts[0].date}</span>
                    <FaUser className="mr-2" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{blogPosts[0].title}</h2>
                  <p className="text-gray-600 mb-5">{blogPosts[0].excerpt}</p>
                  <Link href={`/blog/${blogPosts[0].id}`} className="text-accent font-medium hover:underline">
                    Читать статью →
                  </Link>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.slice(1).map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
                    <div className="h-48 relative">
                      {/* Use Image component for all posts */}
                      {post.id === 2 ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                          <span className="text-gray-500 text-lg font-medium">Изображение статьи</span>
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                          <span className="text-gray-500 text-lg font-medium">Изображение статьи</span>
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-primary text-white text-sm px-3 py-1 rounded-full">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <FaCalendarAlt className="mr-2" />
                        <span className="mr-4">{post.date}</span>
                        <FaUser className="mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-5">{post.excerpt}</p>
                      <Link href={`/blog/${post.id}`} className="text-accent font-medium hover:underline">
                        Читать статью →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-10 flex justify-center">
                <nav className="flex space-x-2">
                  <a href="#" className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300">Предыдущая</a>
                  <a href="#" className="px-4 py-2 bg-primary text-white rounded-md">1</a>
                  <a href="#" className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300">2</a>
                  <a href="#" className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300">3</a>
                  <a href="#" className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300">Следующая</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Подпишитесь на нашу рассылку</h2>
            <p className="text-gray-600 mb-8">
              Получайте свежие статьи и новости из мира электротехники и энергетики на вашу почту
            </p>
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="email"
                placeholder="Ваш email адрес"
                className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="btn btn-primary">Подписаться</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 