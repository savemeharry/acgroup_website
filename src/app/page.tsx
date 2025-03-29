import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBolt, FaShieldAlt, FaCogs, FaAward } from 'react-icons/fa';
import { AddToCartButton } from '@/components/AddToCartButton';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark py-20 overflow-hidden z-0">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Профессиональные решения в сфере электротехники
              </h1>
              <p className="text-xl mb-8">
                Мы предлагаем надежное оборудование и инновационные решения для вашего бизнеса
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="btn bg-accent hover:bg-accent-dark font-bold">
                  Каталог продукции
                </Link>
                <Link href="/contacts" className="btn bg-transparent border-2 border-white hover:bg-white hover:text-primary font-bold">
                  Связаться с нами
                </Link>
              </div>
            </div>
            <div className="relative h-72 md:h-96">
              <div className="relative h-full flex items-end justify-end">
                <div className="absolute z-10 right-4 -bottom-72 md:-bottom-48">
                  <Image 
                    src="/images/01_Main.png" 
                    alt="Электротехническое оборудование 1" 
                    width={300} 
                    height={400}
                    className="object-contain float"
                  />
                </div>
                <div className="absolute right-60 -bottom-64 md:-bottom-40 z-0">
                  <Image 
                    src="/images/02_Main.png" 
                    alt="Электротехническое оборудование 2" 
                    width={300} 
                    height={400}
                    className="object-contain float-delay"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background-dark relative z-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-box">
              <div className="bg-primary/15 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaBolt className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Высокое качество</h3>
              <p className="text-text-light">Мы предлагаем только проверенное и сертифицированное оборудование от ведущих производителей.</p>
            </div>

            <div className="feature-box">
              <div className="bg-primary/15 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Надежность</h3>
              <p className="text-text-light">Гарантия на все оборудование и техническая поддержка на протяжении всего срока эксплуатации.</p>
            </div>

            <div className="feature-box">
              <div className="bg-primary/15 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaCogs className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Инновации</h3>
              <p className="text-text-light">Мы внедряем передовые технологии и современные решения в области электротехники.</p>
            </div>

            <div className="feature-box">
              <div className="bg-primary/15 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaAward className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Опыт</h3>
              <p className="text-text-light">Многолетний опыт работы в сфере электротехники и реализации сложных проектов.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наша продукция</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card overflow-hidden transition-all hover:shadow-medium group">
              <div className="h-48 bg-background-dark relative -mx-6 -mt-6 mb-6 border-b-2 border-border">
                {/* Replace with product image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-text-muted text-lg font-medium">Изображение продукта</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">Источники бесперебойного питания</h3>
              <p className="text-text-light mb-4">Надежные ИБП для защиты вашего оборудования от перебоев в электроснабжении.</p>
              <div className="flex justify-between items-center">
                <Link href="/products/ups" className="text-accent font-medium hover:underline inline-flex items-center">
                  Подробнее 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
                <AddToCartButton 
                  id="ups-1"
                  name="ИБП Power+"
                  price={12500}
                />
              </div>
            </div>

            <div className="card overflow-hidden transition-all hover:shadow-medium group">
              <div className="h-48 bg-background-dark relative -mx-6 -mt-6 mb-6 border-b-2 border-border">
                {/* Replace with product image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-text-muted text-lg font-medium">Изображение продукта</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">Автоматические выключатели</h3>
              <p className="text-text-light mb-4">Современные системы защиты электрических цепей от перегрузок и коротких замыканий.</p>
              <div className="flex justify-between items-center">
                <Link href="/products/circuit-breakers" className="text-accent font-medium hover:underline inline-flex items-center">
                  Подробнее 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
                <AddToCartButton 
                  id="circuit-breaker-1"
                  name="Выключатель ECO 3P"
                  price={8900}
                />
              </div>
            </div>

            <div className="card overflow-hidden transition-all hover:shadow-medium group">
              <div className="h-48 bg-background-dark relative -mx-6 -mt-6 mb-6 border-b-2 border-border">
                {/* Replace with product image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-text-muted text-lg font-medium">Изображение продукта</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">Молниезащита и заземление</h3>
              <p className="text-text-light mb-4">Эффективные системы молниезащиты и заземления для обеспечения безопасности.</p>
              <div className="flex justify-between items-center">
                <Link href="/products/lightning-protection" className="text-accent font-medium hover:underline inline-flex items-center">
                  Подробнее 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
                <AddToCartButton 
                  id="lightning-protection-1"
                  name="Комплект заземления ЗУ-2"
                  price={15600}
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="btn btn-primary font-bold px-8">
              Перейти в каталог
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background-dark">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">О компании AC Group</h2>
              <p className="text-lg text-text mb-6">
                AC Group — ведущий поставщик электротехнического оборудования и профессиональных решений в области энергетики и автоматизации.
              </p>
              <p className="text-text-light mb-8">
                Наша компания работает на рынке более 15 лет, обеспечивая предприятия и организации высококачественным оборудованием от ведущих мировых производителей. Мы гордимся своей репутацией надежного партнера, который предлагает не только продукцию, но и комплексные решения с учетом специфики каждого клиента.
              </p>
              <Link href="/about" className="btn btn-outline font-bold">
                Подробнее о компании
              </Link>
            </div>
            <div className="content-box">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/15 p-6 rounded-lg text-center transform transition-transform hover:scale-105">
                  <span className="text-4xl font-bold text-primary block mb-2">15+</span>
                  <span className="text-text-light font-medium">лет на рынке</span>
                </div>
                <div className="bg-primary/15 p-6 rounded-lg text-center transform transition-transform hover:scale-105">
                  <span className="text-4xl font-bold text-primary block mb-2">500+</span>
                  <span className="text-text-light font-medium">клиентов</span>
                </div>
                <div className="bg-primary/15 p-6 rounded-lg text-center transform transition-transform hover:scale-105">
                  <span className="text-4xl font-bold text-primary block mb-2">200+</span>
                  <span className="text-text-light font-medium">проектов</span>
                </div>
                <div className="bg-primary/15 p-6 rounded-lg text-center transform transition-transform hover:scale-105">
                  <span className="text-4xl font-bold text-primary block mb-2">30+</span>
                  <span className="text-text-light font-medium">специалистов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наши проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="card group overflow-hidden hover:shadow-medium">
                <div className="h-64 bg-background-dark relative -mx-6 -mt-6 mb-6 border-b-2 border-border">
                  {/* Replace with project image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-text-muted text-lg font-medium">Фото проекта {item}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">Проект для предприятия {item}</h3>
                <p className="text-text-light mb-4">Описание проекта и решений, которые были внедрены командой AC Group.</p>
                <Link href={`/portfolio/project-${item}`} className="text-accent font-medium hover:underline inline-flex items-center">
                  Подробнее о проекте
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/portfolio" className="btn btn-primary font-bold px-8">
              Все проекты
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Готовы к сотрудничеству?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня, чтобы обсудить ваши потребности и получить профессиональную консультацию
          </p>
          <Link href="/contacts" className="btn bg-white text-primary hover:bg-gray-100 font-bold">
            Связаться с нами
          </Link>
        </div>
      </section>
    </>
  );
} 