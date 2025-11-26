FROM node:22-alpine

WORKDIR /app

COPY package.json .

RUN npm ci
RUN npm run build

CMD ['npm', 'run', 'start']

EXPOSE 3000