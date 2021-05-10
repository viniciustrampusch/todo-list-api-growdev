require('dotenv').config();

const host = process.env.API_URL;
const task = require('../app/documentation/task');

module.exports = {
  info: {
    version: '1.0.0',
    title: 'TODO List API',
    description: '...',
  },
  host,
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  defaultModelsExpandDepth: -1,
  definitions: {
    task,
  },
};
