FROM node:12-alpine

WORKDIR /usr/server-app
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
RUN yarn
COPY . .
ENV PORT=3001
EXPOSE 3001
CMD [ "yarn", "dev" ]