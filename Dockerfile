### 2. BUILD ###
FROM node:lts-alpine AS build
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install -g npm
RUN npm install --silent --legacy-peer-deps
COPY . .
EXPOSE 8888

### 2. RUN ###
CMD ["npm", "run", "prod"]
