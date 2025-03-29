import React from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaIndustry, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';

// Пример данных о проектах
const projectsData = {
  '1': {
    id: 1,
    title: 'Система энергоснабжения для завода',
    category: 'Промышленность',
    description: 'Проектирование и монтаж комплексной системы энергоснабжения для крупного производственного предприятия, включая установку ИБП и систем молниезащиты.',
    fullDescription: 'Компания AC Group выполнила комплексный проект по проектированию и монтажу системы энергоснабжения для крупного производственного предприятия. Проект включал в себя поставку и установку высоковольтного оборудования, распределительных щитов, ИБП и систем молниезащиты. Особенностью проекта была необходимость обеспечить бесперебойное энергоснабжение критически важных участков производства.',
    year: '2022',
    location: 'г. Алматы',
    client: 'ТОО "ПромТех"',
    duration: '6 месяцев',
    services: [
      'Проектирование системы энергоснабжения',
      'Поставка оборудования',
      'Монтаж и пусконаладка',
      'Обучение персонала',
      'Техническое обслуживание'
    ],
    challenges: [
      'Обеспечение бесперебойного энергоснабжения критически важных участков производства',
      'Интеграция новых систем с существующей инфраструктурой',
      'Минимизация простоев производства во время монтажных работ',
      'Соблюдение жестких требований по безопасности и надежности'
    ],
    solutions: [
      'Разработка оптимальной схемы энергоснабжения с учетом особенностей производства',
      'Использование современного оборудования с высокими показателями надежности',
      'Поэтапный план монтажа для минимизации влияния на производственные процессы',
      'Внедрение системы мониторинга и диагностики для контроля работы оборудования'
    ],
    results: [
      'Повышение надежности энергоснабжения на 40%',
      'Снижение риска аварийных ситуаций на 60%',
      'Сокращение времени простоя оборудования при перебоях в электроснабжении',
      'Оптимизация энергопотребления и снижение эксплуатационных расходов'
    ],
    testimonial: {
      text: 'Выражаем благодарность компании AC Group за профессиональную работу по проектированию и монтажу системы энергоснабжения нашего завода. Все было выполнено в срок и с высоким качеством. Особенно ценим то, что специалисты компании учли все наши требования и предложили оптимальные решения для наших задач.',
      author: 'Иванов А.И.',
      position: 'Технический директор, ТОО "ПромТех"'
    },
    relatedProjects: [
      { id: 2, title: 'Автоматизация энергоучета торгового центра' },
      { id: 4, title: 'Система бесперебойного питания для ЦОД' }
    ]
  },
  '2': {
    id: 2,
    title: 'Автоматизация энергоучета торгового центра',
    category: 'Коммерческая недвижимость',
    description: 'Внедрение автоматизированной системы контроля и учета электроэнергии в торговом центре площадью 15000 кв.м.',
    fullDescription: 'Компания AC Group реализовала проект по внедрению автоматизированной системы контроля и учета электроэнергии (АСКУЭ) в крупном торговом центре. Система позволяет вести детальный учет потребления электроэнергии по арендаторам, зонам и видам оборудования, что обеспечивает прозрачность расчетов и возможность оптимизации энергопотребления.',
    year: '2021',
    location: 'г. Астана',
    client: 'ТЦ "МегаМолл"',
    duration: '4 месяца',
    services: [
      'Проектирование системы АСКУЭ',
      'Поставка и монтаж приборов учета',
      'Настройка программного обеспечения',
      'Интеграция с существующими системами управления зданием',
      'Обучение персонала'
    ],
    challenges: [
      'Необходимость интеграции с существующими инженерными системами здания',
      'Минимизация влияния на работу торгового центра во время монтажа',
      'Обеспечение точности измерений при сложной структуре энергопотребления',
      'Разработка удобного интерфейса для управления системой'
    ],
    solutions: [
      'Использование современных электронных счетчиков с дистанционным сбором данных',
      'Разработка гибкой архитектуры системы с возможностью расширения',
      'Проведение основных монтажных работ в ночное время',
      'Создание специализированного ПО с удобным интерфейсом для администраторов и арендаторов'
    ],
    results: [
      'Снижение затрат на электроэнергию на 22%',
      'Автоматизация процесса выставления счетов арендаторам',
      'Выявление и устранение потерь в системе электроснабжения',
      'Повышение точности учета потребления электроэнергии'
    ],
    testimonial: {
      text: 'Благодаря внедренной системе автоматизации энергоучета нам удалось оптимизировать расходы на электроэнергию на 22%. Отдельное спасибо команде инженеров за минимальные перебои в работе торгового центра во время установки системы.',
      author: 'Петрова Е.В.',
      position: 'Директор по эксплуатации, ТЦ "МегаМолл"'
    },
    relatedProjects: [
      { id: 1, title: 'Система энергоснабжения для завода' },
      { id: 3, title: 'Модернизация электрощитового оборудования' }
    ]
  },
  '3': {
    id: 3,
    title: 'Модернизация электрощитового оборудования',
    category: 'Инфраструктура',
    description: 'Полная модернизация устаревшего электрощитового оборудования в бизнес-центре с минимальным перерывом в работе систем.',
    fullDescription: 'Компания AC Group выполнила комплексную модернизацию электрощитового оборудования в действующем бизнес-центре. Проект включал замену вводно-распределительных устройств, этажных и групповых щитов, а также обновление системы автоматики. Ключевой задачей было проведение всех работ с минимальным перерывом в электроснабжении офисных помещений.',
    year: '2021',
    location: 'г. Алматы',
    client: 'БЦ "Горизонт"',
    duration: '3 месяца',
    services: [
      'Аудит существующей электросистемы',
      'Проектирование новой системы электроснабжения',
      'Поставка и монтаж оборудования',
      'Пусконаладочные работы',
      'Документальное оформление и сдача в эксплуатацию'
    ],
    challenges: [
      'Необходимость проведения работ в условиях действующего бизнес-центра',
      'Минимизация времени отключения электроснабжения',
      'Соответствие новой системы возросшим нагрузкам',
      'Ограниченное пространство для размещения нового оборудования'
    ],
    solutions: [
      'Разработка детального плана поэтапной замены оборудования',
      'Использование временных схем электроснабжения на период работ',
      'Применение современного компактного оборудования с улучшенными характеристиками',
      'Проведение основных работ в выходные дни и ночное время'
    ],
    results: [
      'Повышение надежности системы электроснабжения',
      'Увеличение доступной мощности для арендаторов на 30%',
      'Соответствие обновленной системы всем современным требованиям безопасности',
      'Снижение эксплуатационных расходов на обслуживание'
    ],
    testimonial: {
      text: 'Компания AC Group показала высокий профессионализм при модернизации электрощитового оборудования нашего бизнес-центра. Благодаря грамотно организованному процессу, наши арендаторы практически не ощутили неудобств. Новое оборудование работает надежно и позволило нам расширить возможности для арендаторов.',
      author: 'Николаев С.В.',
      position: 'Управляющий, БЦ "Горизонт"'
    },
    relatedProjects: [
      { id: 1, title: 'Система энергоснабжения для завода' },
      { id: 5, title: 'Электроснабжение жилого комплекса' }
    ]
  }
};

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  
  // Получаем данные проекта по id
  const project = projectsData[id as keyof typeof projectsData];
  
  // Если проект не найден, можно вернуть 404
  if (!project) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Проект не найден</h1>
        <p className="mb-8">Запрашиваемый проект не существует или был удален.</p>
        <Link href="/portfolio" className="btn btn-primary">
          Вернуться к портфолио
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="text-accent text-sm uppercase font-bold mb-3">{project.category}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{project.title}</h1>
            <p className="text-xl">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-gray-200 rounded-lg h-96 w-full flex items-center justify-center mb-8">
                {/* Replace with project image */}
                <span className="text-gray-500 text-lg font-medium">Фото проекта</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-6">О проекте</h2>
              <p className="text-gray-700 mb-8">
                {project.fullDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-xl font-bold mb-4">Задачи проекта</h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                          <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Наши решения</h3>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-accent/10 p-1 rounded-full mr-3 mt-1">
                          <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Результаты проекта</h3>
              <ul className="space-y-3 mb-12">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-accent mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Отзыв клиента</h3>
                <blockquote className="text-gray-700 italic mb-6">"{project.testimonial.text}"</blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">{project.testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{project.testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <h3 className="text-xl font-bold border-b pb-4 mb-4">Информация о проекте</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <FaCalendarAlt className="w-5 h-5 mr-3 mt-1 text-accent" />
                    <div>
                      <h4 className="font-bold text-gray-800">Год завершения</h4>
                      <p className="text-gray-600">{project.year}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="w-5 h-5 mr-3 mt-1 text-accent" />
                    <div>
                      <h4 className="font-bold text-gray-800">Местоположение</h4>
                      <p className="text-gray-600">{project.location}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaIndustry className="w-5 h-5 mr-3 mt-1 text-accent" />
                    <div>
                      <h4 className="font-bold text-gray-800">Клиент</h4>
                      <p className="text-gray-600">{project.client}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-1 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <h4 className="font-bold text-gray-800">Срок выполнения</h4>
                      <p className="text-gray-600">{project.duration}</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-bold text-gray-800 mb-3">Выполненные услуги</h4>
                  <ul className="space-y-2">
                    {project.services.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-primary/10 p-1 rounded-full mr-2 mt-1">
                          <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-600 text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <Link href="/contacts" className="btn btn-primary w-full">
                    Обсудить похожий проект
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Галерея проекта</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Фото {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Похожие проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {project.relatedProjects.map((related, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 relative">
                  {/* Replace with project image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 text-lg font-medium">Фото проекта</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{related.title}</h3>
                  <Link href={`/portfolio/${related.id}`} className="text-accent font-medium hover:underline">
                    Подробнее о проекте →
                  </Link>
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