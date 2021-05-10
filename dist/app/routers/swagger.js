"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _swaggeruiexpress = require('swagger-ui-express'); var _swaggeruiexpress2 = _interopRequireDefault(_swaggeruiexpress);
var _swagger_documentationjson = require('../../swagger_documentation.json'); var _swagger_documentationjson2 = _interopRequireDefault(_swagger_documentationjson);

const routes = new (0, _express.Router)();

routes.use(
  '/documention',
  _swaggeruiexpress2.default.serve,
  _swaggeruiexpress2.default.setup(_swagger_documentationjson2.default)
);

exports. default = routes;
