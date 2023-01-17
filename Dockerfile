FROM node:16.3.0

LABEL maintainer="Jarom Oyler <Jarroyler@Gmail.com>"

WORKDIR /app

COPY . .

EXPOSE 8080

RUN npm install

CMD ["npm","start"]