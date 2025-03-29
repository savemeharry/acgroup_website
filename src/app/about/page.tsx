import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUsers, FaCertificate, FaHandshake, FaChartLine } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">О компании AC Group</h1>
            <p className="text-xl">
              Ведущий поставщик электротехнического оборудования и профессиональных решений в области энергетики и автоматизации
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <p className="text-lg text-gray-700 mb-4">
                AC Group была основана в 2008 году группой энтузиастов с большим опытом работы в сфере электротехники и энергетики.
              </p>
              <p className="text-gray-600 mb-4">
                За более чем 15 лет работы компания выросла из небольшого офиса с несколькими сотрудниками в крупного поставщика электротехнического оборудования с представительствами в нескольких городах Казахстана.
              </p>
              <p className="text-gray-600 mb-4">
                Сегодня AC Group — это команда опытных специалистов, которые постоянно следят за новыми технологиями и инновациями в отрасли, чтобы предлагать клиентам самые современные и эффективные решения.
              </p>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              {/* Replace with actual company image */}
              <span className="text-gray-500 text-lg font-medium">Фото компании</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Миссия и ценности</h2>
            <p className="text-lg text-gray-700">
              Наша миссия — обеспечивать клиентов надежными и инновационными решениями в сфере электротехники, способствуя развитию их бизнеса и повышению энергоэффективности.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaUsers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Клиентоориентированность</h3>
              <p className="text-gray-600 text-center">Мы всегда ставим интересы клиента на первое место и стремимся превзойти его ожидания.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaCertificate className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Качество</h3>
              <p className="text-gray-600 text-center">Мы предлагаем только проверенное и сертифицированное оборудование, гарантируя его надежность.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Ответственность</h3>
              <p className="text-gray-600 text-center">Мы несем полную ответственность за предлагаемые решения и всегда выполняем свои обязательства.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Развитие</h3>
              <p className="text-gray-600 text-center">Мы постоянно совершенствуемся, внедряем новые технологии и повышаем квалификацию сотрудников.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Иванов Иван', position: 'Генеральный директор' },
              { name: 'Петрова Анна', position: 'Финансовый директор' },
              { name: 'Сидоров Алексей', position: 'Технический директор' },
              { name: 'Козлова Мария', position: 'Руководитель отдела продаж' }
            ].map((person, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  {/* Replace with actual team member photo */}
                  <span className="text-gray-500 text-lg">Фото сотрудника</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{person.name}</h3>
                  <p className="text-gray-600">{person.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Сертификаты и награды</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-gray-200 h-64 rounded mb-4 flex items-center justify-center">
                  {/* Replace with actual certificate image */}
                  <span className="text-gray-500 text-lg">Сертификат {item}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Сертификат качества</h3>
                <p className="text-gray-600">Подтверждает соответствие нашей продукции международным стандартам качества.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Станьте нашим партнером</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Если вы заинтересованы в сотрудничестве с надежным поставщиком электротехнического оборудования, свяжитесь с нами
          </p>
          <Link href="/contacts" className="btn bg-accent hover:bg-accent-dark">
            Связаться с нами
          </Link>
        </div>
      </section>
    </>
  );
} 