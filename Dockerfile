FROM node:22-alpine

WORKDIR /app

COPY package.json .
COPY tsconfig.json .

RUN npm cache clean --force && npm i
RUN npm run build

CMD ['npm', 'run', 'start']

EXPOSE 3000