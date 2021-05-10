const swaggerAutogen = require('swagger-autogen')();
const swaggerConfig = require('./config/swagger');

const outputFile = './src/swagger_documentation.json';
const endpoints = ['./src/app/routers/task.js'];

swaggerAutogen(outputFile, endpoints, swaggerConfig);
