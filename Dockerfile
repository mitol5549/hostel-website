# Этап 1: Сборка приложения
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости для сборки
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Собираем production-версию Next.js
RUN npm run build

# Этап 2: Запуск минимального образа
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем только нужные файлы из этапа сборки
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Указываем переменные окружения для production-режима
ENV NODE_ENV=production

# Указываем порт, который будет использован приложением
EXPOSE 3000

# Команда для запуска приложения
CMD ["npm", "start"]