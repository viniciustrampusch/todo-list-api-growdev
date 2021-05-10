import redis from 'redis';
import Promise from 'bluebird';

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? './.env.test' : './.env',
});

Promise.promisifyAll(redis);

class Cache {
  constructor() {
    this.client = redis.createClient(process.env.REDIS_URL, {
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

export default new Cache();
