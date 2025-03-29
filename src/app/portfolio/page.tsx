import React from 'react';
import Link from 'next/link';

// Данные о проектах
const projects = [
  {
    id: 1,
    title: 'Система энергоснабжения для завода',
    category: 'Промышленность',
    description: 'Проектирование и монтаж комплексной системы энергоснабжения для крупного производственного предприятия, включая установку ИБП и систем молниезащиты.',
    year: '2022',
    client: 'ТОО "ПромТех"',
  },
  {
    id: 2,
    title: 'Автоматизация энергоучета торгового центра',
    category: 'Коммерческая недвижимость',
    description: 'Внедрение автоматизированной системы контроля и учета электроэнергии в торговом центре площадью 15000 кв.м.',
    year: '2021',
    client: 'ТЦ "МегаМолл"',
  },
  {
    id: 3,
    title: 'Модернизация электрощитового оборудования',
    category: 'Инфраструктура',
    description: 'Полная модернизация устаревшего электрощитового оборудования в бизнес-центре с минимальным перерывом в работе систем.',
    year: '2021',
    client: 'БЦ "Горизонт"',
  },
  {
    id: 4,
    title: 'Система бесперебойного питания для ЦОД',
    category: 'IT-инфраструктура',
    description: 'Проектирование и внедрение комплексной системы бесперебойного питания для центра обработки данных с высокими требованиями к надежности.',
    year: '2020',
    client: 'ИТ-компания "ДатаСтор"',
  },
  {
    id: 5,
    title: 'Электроснабжение жилого комплекса',
    category: 'Жилая недвижимость',
    description: 'Проектирование и монтаж системы электроснабжения жилого комплекса из 5 многоквартирных домов с подземной парковкой.',
    year: '2020',
    client: 'Застройщик "НовыйДом"',
  },
  {
    id: 6,
    title: 'Системы молниезащиты для нефтебазы',
    category: 'Нефтегазовая отрасль',
    description: 'Разработка и внедрение комплексной системы молниезащиты для объекта повышенной опасности с учетом всех требований безопасности.',
    year: '2019',
    client: 'АО "НефтеТранс"',
  },
];

// Уникальные категории проектов
const categories = Array.from(new Set(projects.map(project => project.category)));

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Портфолио</h1>
            <p className="text-xl">
              Наши успешно реализованные проекты в области электротехники и автоматизации
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-16">
        <div className="container">
          {/* Categories Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-4 py-2 rounded-full bg-primary text-white">
                Все проекты
              </button>
              {categories.map((category, index) => (
                <button key={index} className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
                <div className="h-64 bg-gray-200 relative">
                  {/* Replace with project image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 text-lg font-medium">Фото проекта</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white text-sm px-3 py-1 rounded-full">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-500 text-sm">{project.year}</span>
                    <span className="text-gray-500 text-sm">{project.client}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-5">{project.description}</p>
                  <Link href={`/portfolio/${project.id}`} className="text-accent font-medium hover:underline">
                    Подробнее о проекте →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">120+</div>
              <div className="text-gray-600">Реализованных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">35+</div>
              <div className="text-gray-600">Крупных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы наших клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Иванов А.И.",
                position: "Технический директор, ТОО 'ПромТех'",
                text: "Выражаем благодарность компании AC Group за профессиональную работу по проектированию и монтажу системы энергоснабжения нашего завода. Все было выполнено в срок и с высоким качеством."
              },
              {
                name: "Петрова Е.В.",
                position: "Директор по эксплуатации, ТЦ 'МегаМолл'",
                text: "Благодаря внедренной системе автоматизации энергоучета нам удалось оптимизировать расходы на электроэнергию на 22%. Отдельное спасибо команде инженеров за минимальные перебои в работе торгового центра."
              },
              {
                name: "Сидоров К.М.",
                position: "IT-директор, 'ДатаСтор'",
                text: "Система бесперебойного питания, установленная компанией AC Group, обеспечивает надежную защиту нашего центра обработки данных. За два года эксплуатации не было ни одного сбоя."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Готовы обсудить ваш проект?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня для получения профессиональной консультации и оценки вашего проекта
          </p>
          <Link href="/contacts" className="btn bg-accent hover:bg-accent-dark">
            Связаться с нами
          </Link>
        </div>
      </section>
    </>
  );
} 