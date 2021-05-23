FROM node:13.3.0 AS compile-image

RUN mkdir -p /app

WORKDIR /app
COPY package.json /app

RUN npm install

COPY . /app
RUN npm run build --prod

FROM nginx
COPY --from=compile-image /app/dist/home-automation-web-app /usr/share/nginx/html