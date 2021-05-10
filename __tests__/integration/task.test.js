import request from 'supertest';
import app from '../../src/app';

describe('tasks', () => {
  describe('create', () => {
    it('should create a new task', async () => {
      expect.assertions(1);

      const response = await request(app).post('/tasks').send({
        text: 'Task 1',
        done: false,
      });

      expect(response.status).toBe(200);
    });

    it('should not create a new task without all parameters', async () => {
      expect.assertions(1);

      const response = await request(app).post('/tasks').send({
        done: false,
      });

      expect(response.status).toBe(400);
    });

    it('should not create a new task with invalid parameters', async () => {
      expect.assertions(1);

      const response = await request(app).post('/tasks').send({
        text: 12345,
        done: 'ok',
      });

      expect(response.status).toBe(400);
    });
  });
});
