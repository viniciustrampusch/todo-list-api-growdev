"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _task = require('../services/task'); var _task2 = _interopRequireDefault(_task);

class TaskController {
  async index(request, response) {
    const { limit, page } = request.query;
    const tasks = await _task2.default.getAll(limit, page);

    return response.json(tasks);
  }

  show(request, response) {
    //
  }

  async store(request, response) {
    const { text, done } = request.body;
    const task = await _task2.default.create(text, done);

    return response.json(task);
  }

  async update(request, response) {
    const { text, done } = request.body;
    const { task } = await _task2.default.update(request.taskId, text, done);

    return response.json(task);
  }

  async delete(request, response) {
    await _task2.default.delete(request.taskId);

    return response.sendStatis(204);
  }
}

exports. default = new TaskController();
