FROM node:12

RUN mkdir -p /app
WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --production

COPY ./dist .

USER node
ENTRYPOINT [ "node", "index.js" ]
CMD [ "" ]