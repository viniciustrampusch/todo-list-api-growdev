"use strict";Object.defineProperty(exports, "__esModule", {value: true});exports. default = (request, response, next) => {
  const { method, url, params, query, body, ip } = request;
  console.log(method, url, params, query, body, ip);

  next();
};
