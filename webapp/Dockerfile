FROM node:18.18-alpine3.18

# RUN addgroup webapp && adduser -S -G webapp webapp
# USER trivia
EXPOSE 3000
WORKDIR /webapp

COPY package*.json .
RUN npm install
COPY . .

CMD ["npm", "start"]