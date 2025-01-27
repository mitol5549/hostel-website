# Указываем базовый образ
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта в контейнер
COPY . .

# Собираем production-версию Next.js
RUN npm run build

# Указываем переменные окружения для production-режима
ENV NODE_ENV=production

# Указываем порт, который будет использован приложением
EXPOSE 3000

# Команда для запуска приложения
CMD ["npm", "start"]