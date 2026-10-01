🇺🇦 Українська версія
## Огляд

Це **full-stack** чат-додаток, побудований на **React (Client) та Node.js (Server)** з використанням **Socket.IO** для реального часу.
Користувачі можуть створювати кімнати, приєднуватися до них, надсилати повідомлення та бачити історію.

## Функції

- Введення ім’я користувача (зберігається у localStorage)

- Повідомлення містять:
 Автор
Час
Текст

- Управління кімнатами:
Створити
Перейменувати
Приєднатися
Видалити

- Нові користувачі бачать всі попередні повідомлення у кімнаті

- Реальні оновлення через Socket.IO

Адаптивний UI

## Технології

# Фронтенд:

- React + TypeScript

- Socket.IO Client

- CSS / SCSS

- ESLint + Prettier

# Бекенд:

- Node.js + Express

- Socket.IO Server

- JavaScript

- Зберігання повідомлень/кімнат в  базі даних

Структура проєкту
chat_app/
├─ Client/         # React клієнт
│  ├─ src/
│  ├─ tsconfig.json
│  └─ .eslintrc.cjs
├─ Server/         # Node.js сервер
│  ├─ src/
│  └─ .eslintrc.cjs
└─ README.md

## Встановлення та запуск

Запустити фронтенд:

- cd Client
- npm install
- npm start


Запустити сервер:

- cd Server
- npm install
- npm run start

postgresql://chat_w4gw_user:ZBw6upoXjFdCQqpnrqmuan9UgzPIdM3r@dpg-dav3k7d9fdbs73b4g0sg-a/chat_w4gw