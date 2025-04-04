# AC Group - Корпоративный веб-сайт

Прототип корпоративного веб-сайта для компании AC Group - поставщика электротехнического оборудования и профессиональных решений в области энергетики и автоматизации.

## Особенности сайта

- Современный, адаптивный дизайн
- Оптимизирован для SEO
- Полностью отзывчивый интерфейс для мобильных устройств, планшетов и десктопов
- Быстрая загрузка и производительность

## Основные разделы сайта

- Главная страница с ключевой информацией о компании
- О компании - история, миссия, ценности
- Каталог продукции с удобной навигацией и фильтрами
- Портфолио выполненных проектов
- Контактная информация и форма обратной связи

## Технологический стек

- [Next.js](https://nextjs.org/) - React фреймворк для серверного рендеринга
- [React](https://reactjs.org/) - JavaScript библиотека для создания пользовательских интерфейсов
- [TypeScript](https://www.typescriptlang.org/) - Типизированный JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Утилитарный CSS фреймворк
- [React Icons](https://react-icons.github.io/react-icons/) - Библиотека иконок для React

## Требования

- Node.js 14.x или выше
- npm 6.x или выше

## Установка и запуск

1. Клонируйте репозиторий:
```bash
git clone https://github.com/your-username/acgroup.git
cd acgroup
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите сервер разработки:
```bash
npm run dev
```

4. Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере.

## Сборка для продакшена

Для создания оптимизированной версии сайта:

```bash
npm run build
```

Для запуска продакшен-сборки:

```bash
npm run start
```

## Структура проекта

```
acgroup/
├── public/             # Статические файлы (изображения, иконки)
├── src/                # Исходный код
│   ├── app/            # Страницы сайта (Next.js App Router)
│   ├── components/     # Компоненты React
│   └── styles/         # CSS стили
├── .eslintrc.json      # Конфигурация ESLint
├── next.config.js      # Конфигурация Next.js
├── package.json        # Зависимости проекта
├── postcss.config.js   # Конфигурация PostCSS для Tailwind
├── tailwind.config.js  # Конфигурация Tailwind CSS
└── tsconfig.json       # Конфигурация TypeScript
```

## Лицензия

Этот проект является интеллектуальной собственностью AC Group и предназначен только для демонстрационных целей.

## Контакты

Для дополнительной информации о продукции и услугах AC Group посетите [официальный сайт](https://www.acgroup.ru) или свяжитесь по телефону +7 (123) 456-78-90. 