### 2. BUILD ###
FROM node:lts-alpine AS build
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm i

COPY . .
EXPOSE 8888

### 2. RUN ###
CMD ["npm", "run", "prod"]

# docker build -t char-recognizer-node:latest .
# docker run -p 8888:8888 char-recognizer-node:latest
