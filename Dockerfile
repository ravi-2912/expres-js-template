ARG PORT=3000
ARG NODE_VER=16.15.0
ARG NODE_ENV=dev

FROM node:${NODE_VER}

ENV NODE_ENV=${NODE_ENV}

EXPOSE ${PORT}

WORKDIR /usr/src/app

COPY package.json .

RUN npm install --global nodemon \
    && npm install --silent

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY . .

CMD ["npm", "run", "dev"]
