FROM node:6.9
LABEL Author="Jacinto Jose Cruz Nieto <jacintoj.cruz@gmail.com>"
COPY ./app /app
EXPOSE 9000
WORKDIR /app
RUN rm -rf node_modules && \
    apt-get update -qq && \
    apt-get install -y -qq libzmq-dev && \
    npm install zmq --silent && \
    npm install redis --silent

CMD ["node", "/app/cliente.js"]
