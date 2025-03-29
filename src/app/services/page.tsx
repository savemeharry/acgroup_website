import React from 'react';
import Link from 'next/link';
import { FaTools, FaBolt, FaShieldAlt, FaCogs, FaChargingStation, FaHardHat } from 'react-icons/fa';

export default function ServicesPage() {
  // Массив с услугами
  const services = [
    {
      id: 1,
      title: 'Проектирование электрических систем',
      description: 'Разработка проектной документации для электрических систем любой сложности, от небольших офисов до промышленных объектов.',
      icon: <FaCogs className="w-12 h-12 text-white" />,
    },
    {
      id: 2,
      title: 'Монтаж электрооборудования',
      description: 'Профессиональный монтаж электрооборудования с соблюдением всех требований и норм безопасности.',
      icon: <FaTools className="w-12 h-12 text-white" />,
    },
    {
      id: 3,
      title: 'Системы бесперебойного питания',
      description: 'Установка и настройка систем бесперебойного питания для защиты вашего оборудования от перебоев электроснабжения.',
      icon: <FaBolt className="w-12 h-12 text-white" />,
    },
    {
      id: 4,
      title: 'Молниезащита и заземление',
      description: 'Установка и обслуживание систем молниезащиты и заземления для обеспечения безопасности объектов.',
      icon: <FaShieldAlt className="w-12 h-12 text-white" />,
    },
    {
      id: 5,
      title: 'Энергоаудит',
      description: 'Комплексное обследование энергопотребления объекта с рекомендациями по оптимизации расходов на электроэнергию.',
      icon: <FaChargingStation className="w-12 h-12 text-white" />,
    },
    {
      id: 6,
      title: 'Техническое обслуживание',
      description: 'Регулярное техническое обслуживание электроустановок для обеспечения их надежной и безопасной работы.',
      icon: <FaHardHat className="w-12 h-12 text-white" />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Услуги</h1>
            <p className="text-xl">
              Профессиональные решения для вашего бизнеса от команды экспертов
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
                <div className="bg-primary p-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link href={`/services/${service.id}`} className="text-accent font-medium hover:underline">
                    Подробнее →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Как мы работаем</h2>
          <div className="flex flex-col md:flex-row justify-between relative">
            {/* Process Line (desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2 z-0"></div>
            
            {/* Process Steps */}
            {[
              { number: 1, title: 'Консультация', description: 'Обсуждение ваших потребностей и требований' },
              { number: 2, title: 'Планирование', description: 'Разработка плана работ и подготовка документации' },
              { number: 3, title: 'Реализация', description: 'Выполнение работ согласно плану и графику' },
              { number: 4, title: 'Контроль качества', description: 'Проверка качества и соответствия требованиям' }
            ].map((step) => (
              <div key={step.number} className="flex-1 relative mb-8 md:mb-0">
                <div className="bg-white p-6 rounded-lg shadow-md z-10 relative">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Почему выбирают наши услуги</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Опытные специалисты</h3>
                    <p className="text-gray-600">В нашей команде работают сертифицированные специалисты с многолетним опытом.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Современное оборудование</h3>
                    <p className="text-gray-600">Мы используем только современное оборудование и передовые технологии.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Гарантия качества</h3>
                    <p className="text-gray-600">Мы предоставляем гарантию на все выполненные работы и установленное оборудование.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Индивидуальный подход</h3>
                    <p className="text-gray-600">Для каждого клиента мы разрабатываем индивидуальное решение с учетом особенностей его бизнеса.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              {/* Replace with actual image */}
              <span className="text-gray-500 text-lg font-medium">Изображение услуг</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Нужна консультация?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня, чтобы получить бесплатную консультацию по вашему проекту
          </p>
          <Link href="/contacts" className="btn bg-accent hover:bg-accent-dark">
            Связаться с нами
          </Link>
        </div>
      </section>
    </>
  );
} 