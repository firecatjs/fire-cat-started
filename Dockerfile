FROM node:20

WORKDIR /app

COPY dist/package.json ./

RUN npm install

COPY dist ./

EXPOSE 3000

CMD ["npm", "run", "server"]