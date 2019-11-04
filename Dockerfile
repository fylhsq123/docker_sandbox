FROM node:12.13.0-alpine

WORKDIR /usr/app/src/

COPY ./package*.json ./

RUN npm i

COPY ./ ./

RUN npm run build

CMD ["npm", "start"]