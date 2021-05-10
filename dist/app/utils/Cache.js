"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _redis = require('redis'); var _redis2 = _interopRequireDefault(_redis);
var _bluebird = require('bluebird'); var _bluebird2 = _interopRequireDefault(_bluebird);

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? './.env.test' : './.env',
});

_bluebird2.default.promisifyAll(_redis2.default);

class Cache {
  constructor() {
    this.client = _redis2.default.createClient(process.env.REDIS_URL, {
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  get(key) {
    return this.client.getAsync(key);
  }

  set(key, data) {
    return this.client.setAsync(key, data);
  }

  setExpire(key, data, ttl) {
    return this.client.setAsync(key, data, 'EX', ttl);
  }

  delete(key) {
    return this.client.del(key);
  }
}

exports. default = new Cache();
