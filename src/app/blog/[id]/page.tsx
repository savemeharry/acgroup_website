import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaTag, FaArrowLeft } from 'react-icons/fa';

// Импортируем данные статей блога
const blogPosts = [
  {
    id: 1,
    title: 'Как выбрать источник бесперебойного питания для офиса',
    excerpt: 'В этой статье мы рассмотрим основные критерии выбора ИБП для офисных помещений и расскажем о типичных ошибках при подборе оборудования.',
    date: '15 марта 2023',
    author: 'Александр Иванов',
    category: 'Оборудование',
    image: '/images/blog/Main_Post_01.jpg',
    tags: ['ИБП', 'Офисное оборудование', 'Электроснабжение'],
    content: `
      <p>Источники бесперебойного питания (ИБП) являются необходимым элементом инфраструктуры современного офиса. Они защищают оборудование от перебоев в электроснабжении, скачков напряжения и других проблем с электропитанием, которые могут привести к потере данных или выходу из строя дорогостоящей техники.</p>
      
      <h2>Типы ИБП и их особенности</h2>
      
      <p>На рынке представлены три основных типа ИБП:</p>
      
      <ul>
        <li><strong>Резервные (Standby)</strong> - простейший и наиболее экономичный вариант, который переключается на питание от батареи только при обнаружении проблем с основным источником электроэнергии.</li>
        <li><strong>Линейно-интерактивные</strong> - имеют встроенный стабилизатор напряжения, который корректирует напряжение без переключения на батарею.</li>
        <li><strong>С двойным преобразованием (Online)</strong> - наиболее надежный и дорогой вариант, обеспечивающий постоянную фильтрацию питания через преобразователи.</li>
      </ul>
      
      <h2>Как правильно рассчитать мощность ИБП</h2>
      
      <p>Одна из самых распространенных ошибок при выборе ИБП - неправильный расчет необходимой мощности. Для корректного расчета нужно:</p>
      
      <ol>
        <li>Составить список всего оборудования, которое требует защиты.</li>
        <li>Определить потребляемую мощность каждого устройства (указывается в ваттах (Вт) или вольт-амперах (ВА)).</li>
        <li>Суммировать полученные значения.</li>
        <li>Добавить запас 20-30% для возможного подключения дополнительных устройств в будущем.</li>
      </ol>
      
      <p>Важно помнить, что мощность ИБП обычно указывается в вольт-амперах (ВА), а не в ваттах (Вт). Для преобразования Вт в ВА необходимо разделить значение в ваттах на коэффициент мощности (обычно 0,6-0,8 для компьютеров и офисной техники).</p>
      
      <h2>Время автономной работы</h2>
      
      <p>Время, в течение которого ИБП может поддерживать работу оборудования при отключении электричества, зависит от емкости батарей и подключенной нагрузки. Для офисных условий обычно достаточно 10-15 минут автономной работы - этого времени хватит для корректного завершения работы компьютеров или включения резервных источников питания.</p>
      
      <h2>Дополнительные функции и возможности</h2>
      
      <p>При выборе ИБП для офиса стоит обратить внимание на следующие дополнительные функции:</p>
      
      <ul>
        <li>Возможность мониторинга и управления через локальную сеть или интернет.</li>
        <li>Наличие ЖК-дисплея для отображения информации о состоянии устройства.</li>
        <li>Возможность подключения внешних батарей для увеличения времени автономной работы.</li>
        <li>Функция автоматического выключения компьютера при критическом уровне заряда батареи.</li>
        <li>Наличие защиты от перегрузки и короткого замыкания.</li>
      </ul>
      
      <h2>Основные ошибки при выборе ИБП</h2>
      
      <ol>
        <li><strong>Экономия на типе ИБП</strong> - для защиты серверного оборудования и критически важных систем рекомендуется использовать ИБП с двойным преобразованием, а не более дешевые резервные модели.</li>
        <li><strong>Недостаточный запас по мощности</strong> - всегда выбирайте ИБП с запасом 20-30% от расчетной нагрузки.</li>
        <li><strong>Игнорирование условий эксплуатации</strong> - для серверных помещений без кондиционирования необходимо выбирать модели с повышенной термостойкостью.</li>
        <li><strong>Отсутствие мониторинга</strong> - современные ИБП должны обеспечивать возможность удаленного мониторинга и управления.</li>
      </ol>
      
      <h2>Заключение</h2>
      
      <p>Правильно подобранный источник бесперебойного питания обеспечит надежную защиту офисного оборудования от проблем с электроснабжением. При выборе ИБП необходимо учитывать тип оборудования, которое требует защиты, суммарную мощность подключаемых устройств, требуемое время автономной работы и условия эксплуатации.</p>
      
      <p>Компания AC Group предлагает широкий ассортимент источников бесперебойного питания различной мощности и конфигурации для офисов любого размера. Наши специалисты помогут правильно рассчитать необходимую мощность и подобрать оптимальное решение для ваших задач.</p>
    `
  },
  {
    id: 2,
    title: 'Новые технологии в системах молниезащиты',
    excerpt: 'Обзор современных технологий и материалов, используемых в системах молниезащиты, и их преимущества перед традиционными решениями.',
    date: '28 февраля 2023',
    author: 'Мария Петрова',
    category: 'Технологии',
    image: '/images/blog/lightning-protection.jpg',
    tags: ['Молниезащита', 'Инновации', 'Безопасность'],
    content: `
      <p>Современные системы молниезащиты значительно эволюционировали за последние годы. В данной статье мы рассмотрим новейшие технологии и материалы, которые позволяют обеспечить более надежную защиту зданий и сооружений от атмосферного электричества.</p>
      
      <p>Содержание статьи будет добавлено позже.</p>
    `
  },
  {
    id: 3,
    title: 'Как снизить энергопотребление промышленного предприятия',
    excerpt: 'Практические рекомендации по оптимизации энергопотребления на промышленных объектах и расчет экономического эффекта от внедрения энергосберегающих технологий.',
    date: '10 февраля 2023',
    author: 'Сергей Сидоров',
    category: 'Энергоэффективность',
    image: '/images/blog/energy-efficiency.jpg',
    tags: ['Энергосбережение', 'Промышленность', 'Экономия'],
    content: `
      <p>Оптимизация энергопотребления - одна из ключевых задач для современных промышленных предприятий. В этой статье мы рассмотрим практические методы снижения энергозатрат и приведем примеры успешного внедрения энергосберегающих технологий.</p>
      
      <p>Содержание статьи будет добавлено позже.</p>
    `
  },
  {
    id: 4,
    title: 'Автоматизация систем электроснабжения: преимущества и возможности',
    excerpt: 'Рассказываем о преимуществах автоматизации систем электроснабжения и современных технологиях, которые позволяют повысить надежность и эффективность работы.',
    date: '25 января 2023',
    author: 'Алексей Козлов',
    category: 'Автоматизация',
    image: '/images/blog/automation.jpg',
    tags: ['Автоматизация', 'Умные системы', 'Электроснабжение'],
    content: `
      <p>Автоматизация систем электроснабжения открывает новые возможности для повышения эффективности и надежности электроснабжения объектов различного назначения. В данной статье мы рассмотрим современные решения в области автоматизации и их преимущества.</p>
      
      <p>Содержание статьи будет добавлено позже.</p>
    `
  },
  {
    id: 5,
    title: 'Правила технического обслуживания электроустановок',
    excerpt: 'Обзор основных требований и рекомендаций по техническому обслуживанию электроустановок для обеспечения их надежной и безопасной работы.',
    date: '12 января 2023',
    author: 'Ирина Смирнова',
    category: 'Обслуживание',
    image: '/images/blog/maintenance.jpg',
    tags: ['Техническое обслуживание', 'Электроустановки', 'Безопасность'],
    content: `
      <p>Правильное техническое обслуживание электроустановок - залог их безопасной и надежной работы. В этой статье мы рассмотрим основные требования и рекомендации по обслуживанию различных типов электрооборудования.</p>
      
      <p>Содержание статьи будет добавлено позже.</p>
    `
  },
  {
    id: 6,
    title: 'Тренды в области энергетики на 2023 год',
    excerpt: 'Анализ основных тенденций и перспектив развития энергетической отрасли в текущем году, включая возобновляемые источники энергии и цифровизацию.',
    date: '5 января 2023',
    author: 'Дмитрий Волков',
    category: 'Тренды',
    image: '/images/blog/energy-trends.jpg',
    tags: ['Тренды', 'Энергетика', 'Инновации'],
    content: `
      <p>Энергетическая отрасль находится в процессе активной трансформации. В данной статье мы проанализируем основные тренды, которые будут определять развитие энергетики в 2023 году и в ближайшем будущем.</p>
      
      <p>Содержание статьи будет добавлено позже.</p>
    `
  }
];

// Все уникальные категории
const categories = Array.from(new Set(blogPosts.map(post => post.category)));

// Все уникальные теги
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const { id } = params;
  
  // Поиск статьи по id
  const post = blogPosts.find(post => post.id.toString() === id);
  
  // Если статья не найдена
  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Статья не найдена</h1>
        <p className="mb-8">Запрашиваемая статья не существует или была удалена.</p>
        <Link href="/blog" className="btn btn-primary">
          Вернуться к блогу
        </Link>
      </div>
    );
  }

  // Похожие статьи (из той же категории)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="text-accent text-sm uppercase font-bold mb-3">{post.category}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>
            <div className="flex items-center justify-center text-gray-200 text-sm">
              <FaCalendarAlt className="mr-2" />
              <span className="mr-4">{post.date}</span>
              <FaUser className="mr-2" />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
                <div className="h-96 relative">
                  {post.id === 1 ? (
                    <img 
                      src="/images/blog/Main_Post_01.jpg" 
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-lg font-medium">Изображение статьи</span>
                    </div>
                  )}
                </div>
                <div className="p-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <Link key={index} href={`/blog?tag=${tag}`} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-colors">
                        {tag}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Article Content */}
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              </div>

              {/* Author Info */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-10">
                <h3 className="text-xl font-bold mb-4">Об авторе</h3>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold">{post.author}</h4>
                    <p className="text-gray-600 mt-1">Эксперт в области электротехники с более чем 10-летним опытом работы. Специализируется на проектировании и внедрении систем энергоснабжения для коммерческих и промышленных объектов.</p>
                  </div>
                </div>
              </div>
              
              {/* Back to Blog */}
              <div className="mb-12">
                <Link href="/blog" className="text-accent hover:underline flex items-center">
                  <FaArrowLeft className="mr-2" />
                  Вернуться к списку статей
                </Link>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Похожие статьи</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-gray-200 relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-gray-500 text-lg font-medium">Изображение статьи</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <Link href={`/blog/${relatedPost.id}`}>
                            <h3 className="font-bold mb-2 hover:text-accent">{relatedPost.title}</h3>
                          </Link>
                          <p className="text-gray-600 text-sm mb-2">{relatedPost.date}</p>
                          <p className="text-gray-700 line-clamp-2">{relatedPost.excerpt}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

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
                            {blogPosts.filter(p => p.category === category).length}
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
                    {blogPosts.slice(0, 3).map((recentPost) => (
                      <li key={recentPost.id} className="flex items-start">
                        <div className="w-16 h-16 bg-gray-200 rounded-md flex-shrink-0 mr-3"></div>
                        <div>
                          <Link href={`/blog/${recentPost.id}`} className="font-medium hover:text-accent">
                            {recentPost.title}
                          </Link>
                          <p className="text-gray-500 text-sm">{recentPost.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
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