FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY ./front/dist .

COPY ./front/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80