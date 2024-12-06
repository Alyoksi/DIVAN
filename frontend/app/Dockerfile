# используем этот образ как базовый 
FROM node:20-alpine

# домашняя директория в контейнере
WORKDIR /app

# копируем зависимости с хоста в контейнер
COPY ./package.json /app/package.json
# аналогично копируем зафиксированные версии зависимостей
COPY ./package-lock.json /app/package-lock.json
# устанавливаем зависимости
RUN npm install

# любезное напоминание о том, что на 3000-м порту будет слушать devserver
# а реально порт откроется только в docker-compose.yml
EXPOSE 3000

# запускаем devserver по адресу localhost:3000 внутри контейнера
CMD [ "npm", "start" ]

# в compose прописан bind mount на директории src и public, чтобы сразу было видно изменения в коде