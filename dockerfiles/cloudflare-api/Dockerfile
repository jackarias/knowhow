FROM node:22.7.0-alpine3.20

WORKDIR /app

COPY . .

RUN npm update && npm install

CMD ["npm", "start"]