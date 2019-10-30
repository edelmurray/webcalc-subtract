FROM node:10
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install
RUN npm install mocha chai --save-dev
RUN npm install request --save-dev

COPY . .

EXPOSE 80

CMD [ "node", "server.js" ]
