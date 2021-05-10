"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Task = require('../models/Task'); var _Task2 = _interopRequireDefault(_Task);

class TaskRepository {
  async getAll(limit, page) {
    const tasks = await _Task2.default.findAndCountAll({
      limit,
      offset: limit * (page - 1),
    });

    return tasks;
  }

  async getById(id) {
    const task = await _Task2.default.findByPk(id);
    return task;
  }

  async create(text, done) {
    const task = await _Task2.default.create({ text, done });

    return task;
  }

  async update(id, text, done) {
    const task = await this.getById(id);

    task.text = text;
    task.done = done;
    task.save();

    return task;
  }

  async delete(id) {
    const task = await this.getById(id);

    task.destroy();
  }
}

exports. default = new TaskRepository();
