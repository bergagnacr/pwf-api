FROM node:14.17-alpine

RUN mkdir -p /pwf-api
COPY . /pwf-api
COPY package*.json ./pwf-api
WORKDIR /pwf-api

RUN npm install -g npm@8.3.0
RUN npm install