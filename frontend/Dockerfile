FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 4000

COPY . .

CMD ["npm", "run", "dev"]