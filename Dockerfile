# Используем официальный Node.js образ
FROM node:18-alpine AS base

# Устанавливаем необходимые зависимости
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Копируем только package.json и yarn.lock для кэширования зависимостей
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Собираем приложение
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# ОГРАНИЧИВАЕМ ПАМЯТЬ ДЛЯ СБОРКИ, чтобы избежать SIGKILL
ENV NODE_OPTIONS="--max-old-space-size=512"
RUN yarn run build

# Запускаем production-контейнер
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# ПРАВИЛЬНЫЙ КОМАНДНЫЙ ФАЙЛ ДЛЯ standalone
CMD ["node", "server.js"]