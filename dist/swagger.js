"use strict";const swaggerAutogen = require('swagger-autogen')();
const swaggerConfig = require('./config/swagger');

const outputFile = `${__dirname}/swagger_documentation.json`;
const endpoints = [`${__dirname}/app/routers/task.js`];

swaggerAutogen(outputFile, endpoints, swaggerConfig);
