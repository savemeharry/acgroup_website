import React from 'react';
import Link from 'next/link';
import { FaCheck, FaShieldAlt, FaCogs, FaBolt, FaChartLine } from 'react-icons/fa';

// Примерные данные продуктов
const productsData = {
  'ups': {
    title: 'Источники бесперебойного питания',
    description: 'Наши источники бесперебойного питания (ИБП) обеспечивают надежную защиту вашего критически важного оборудования от проблем с электроснабжением, включая колебания напряжения, отключения и перебои.',
    longDescription: 'Источники бесперебойного питания (ИБП) от компании AC Group – это надежные устройства, предназначенные для защиты электронного оборудования от проблем с электроснабжением. Наши ИБП обеспечивают мгновенное переключение на резервное питание при сбоях в сети, позволяя вашему оборудованию продолжать работу без перерывов и потери данных. Мы предлагаем широкий ассортимент ИБП различной мощности и конфигурации, от компактных устройств для домашнего использования до промышленных систем для крупных предприятий.',
    features: [
      'Защита от скачков напряжения и перебоев в питании',
      'Мгновенное переключение на резервное питание',
      'Стабилизация входного напряжения',
      'Встроенная система мониторинга и управления',
      'Высокий КПД и низкое энергопотребление',
      'Компактные размеры и современный дизайн'
    ],
    specs: [
      { name: 'Мощность', values: ['600 ВА', '1000 ВА', '2000 ВА', '3000 ВА'] },
      { name: 'Тип', values: ['Линейно-интерактивные', 'Онлайн (с двойным преобразованием)'] },
      { name: 'Время автономной работы', values: ['5-30 минут (в зависимости от нагрузки)'] },
      { name: 'Интерфейсы', values: ['USB', 'RS-232', 'SNMP (опционально)'] },
      { name: 'Гарантия', values: ['2 года'] }
    ],
    applications: [
      { title: 'Офисы и бизнес-центры', icon: <FaCogs /> },
      { title: 'Центры обработки данных', icon: <FaBolt /> },
      { title: 'Промышленное оборудование', icon: <FaShieldAlt /> },
      { title: 'Медицинские учреждения', icon: <FaChartLine /> }
    ],
    relatedProducts: [
      { slug: 'circuit-breakers', title: 'Автоматические выключатели' },
      { slug: 'lightning-protection', title: 'Молниезащита и заземление' }
    ]
  },
  'circuit-breakers': {
    title: 'Автоматические выключатели',
    description: 'Наши автоматические выключатели обеспечивают надежную защиту электрических цепей от перегрузок и коротких замыканий, гарантируя безопасность вашей электросети.',
    longDescription: 'Автоматические выключатели от компании AC Group – это устройства, предназначенные для защиты электрических цепей от перегрузок и коротких замыканий. При возникновении аварийной ситуации автоматический выключатель размыкает цепь, предотвращая повреждение оборудования и возникновение пожара. Мы предлагаем широкий ассортимент автоматических выключателей различного назначения: от модульных для бытового применения до силовых для промышленных объектов.',
    features: [
      'Защита от перегрузок и короткого замыкания',
      'Быстрое срабатывание при аварийных ситуациях',
      'Высокая отключающая способность',
      'Надежный механизм и долгий срок службы',
      'Компактные размеры для экономии места в электрощите',
      'Соответствие международным стандартам безопасности'
    ],
    specs: [
      { name: 'Номинальный ток', values: ['6A', '10A', '16A', '20A', '25A', '32A', '40A', '63A', '80A', '100A'] },
      { name: 'Количество полюсов', values: ['1P', '1P+N', '2P', '3P', '3P+N', '4P'] },
      { name: 'Характеристики срабатывания', values: ['B', 'C', 'D'] },
      { name: 'Отключающая способность', values: ['4.5kA', '6kA', '10kA', '15kA', '25kA'] },
      { name: 'Гарантия', values: ['3 года'] }
    ],
    applications: [
      { title: 'Жилые дома и квартиры', icon: <FaCogs /> },
      { title: 'Коммерческие здания', icon: <FaBolt /> },
      { title: 'Промышленные объекты', icon: <FaShieldAlt /> },
      { title: 'Инфраструктурные проекты', icon: <FaChartLine /> }
    ],
    relatedProducts: [
      { slug: 'ups', title: 'Источники бесперебойного питания' },
      { slug: 'lightning-protection', title: 'Молниезащита и заземление' }
    ]
  },
  'lightning-protection': {
    title: 'Молниезащита и заземление',
    description: 'Современные системы молниезащиты и заземления для обеспечения безопасности зданий, сооружений и электрооборудования от атмосферных электрических разрядов.',
    longDescription: 'Системы молниезащиты и заземления от компании AC Group предназначены для защиты зданий, сооружений и электрооборудования от прямых ударов молнии и их последствий. Наши решения включают все необходимые компоненты: молниеприемники, токоотводы, заземляющие устройства и устройства защиты от импульсных перенапряжений. Мы предлагаем как традиционные системы молниезащиты, так и активные молниеприемники, обеспечивающие повышенную эффективность защиты.',
    features: [
      'Защита от прямых ударов молнии',
      'Снижение риска пожаров и повреждений от молнии',
      'Защита электрооборудования от перенапряжений',
      'Соответствие казахстанским и международным стандартам',
      'Надежные материалы устойчивые к атмосферным воздействиям',
      'Простота монтажа и обслуживания'
    ],
    specs: [
      { name: 'Типы молниеприемников', values: ['Стержневые', 'Тросовые', 'Сетчатые', 'Активные'] },
      { name: 'Материалы', values: ['Оцинкованная сталь', 'Медь', 'Алюминий', 'Нержавеющая сталь'] },
      { name: 'Уровни защиты', values: ['I', 'II', 'III', 'IV'] },
      { name: 'Гарантия', values: ['5 лет'] }
    ],
    applications: [
      { title: 'Промышленные объекты', icon: <FaCogs /> },
      { title: 'Жилые и коммерческие здания', icon: <FaBolt /> },
      { title: 'Телекоммуникационные вышки', icon: <FaShieldAlt /> },
      { title: 'Объекты критической инфраструктуры', icon: <FaChartLine /> }
    ],
    relatedProducts: [
      { slug: 'ups', title: 'Источники бесперебойного питания' },
      { slug: 'circuit-breakers', title: 'Автоматические выключатели' }
    ]
  }
};

// Компонент для страницы продукта
export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Получаем данные продукта по slug
  const product = productsData[slug as keyof typeof productsData];
  
  // Если продукт не найден, можно вернуть 404
  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Продукт не найден</h1>
        <p className="mb-8">Запрашиваемый продукт не существует или был удален.</p>
        <Link href="/products" className="btn btn-primary">
          Вернуться к каталогу
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{product.title}</h1>
            <p className="text-xl">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                {/* Replace with product image */}
                <span className="text-gray-500 text-lg font-medium">Изображение продукта</span>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-200 h-24 rounded-lg flex items-center justify-center cursor-pointer">
                    <span className="text-gray-500">Фото {i}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{product.title}</h2>
              <p className="text-gray-700 mb-6">
                {product.longDescription}
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Ключевые особенности:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-accent mt-1 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contacts" className="btn btn-primary">
                  Запросить предложение
                </Link>
                <Link href="/contacts" className="btn btn-outline">
                  Задать вопрос
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Технические характеристики</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full">
                <tbody>
                  {product.specs.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-6 font-bold border-b">{spec.name}</td>
                      <td className="py-4 px-6 border-b">{spec.values.join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Области применения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {product.applications.map((app, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:scale-105">
                <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {app.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{app.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Сопутствующие продукты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {product.relatedProducts.map((related, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
                <div className="h-48 bg-gray-200 relative">
                  {/* Replace with product image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 text-lg font-medium">Изображение продукта</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{related.title}</h3>
                  <Link href={`/products/${related.slug}`} className="text-accent font-medium hover:underline">
                    Подробнее →
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Нужна помощь с выбором?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Наши специалисты помогут вам подобрать оптимальное решение под ваши задачи и бюджет
          </p>
          <Link href="/contacts" className="btn bg-accent hover:bg-accent-dark">
            Связаться с нами
          </Link>
        </div>
      </section>
    </>
  );
} 