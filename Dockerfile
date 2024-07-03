FROM node:20

WORKDIR /app

COPY dist/package.json ./

RUN npm install --production

COPY dist ./

EXPOSE 3000

CMD ["node", "./service/index.js"]