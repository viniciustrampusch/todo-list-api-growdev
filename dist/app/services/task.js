"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _task = require('../repositories/task'); var _task2 = _interopRequireDefault(_task);
var _Cache = require('../utils/Cache'); var _Cache2 = _interopRequireDefault(_Cache);
var _Format = require('../utils/Format'); var _Format2 = _interopRequireDefault(_Format);

class TaskService {
  async getAll(limit, page) {
    let tasksCache = null;

    if (page === 1) {
      tasksCache = await _Cache2.default.get('tasks');
    }

    if (tasksCache) {
      return JSON.parse(tasksCache);
    }

    const tasks = await _task2.default.getAll(limit, page);

    if (page === 1) {
      await _Cache2.default.set('tasks', JSON.stringify(tasks));
    }

    return tasks;
  }

  async create(text, done) {
    const task = _task2.default.create(
      _Format2.default.removeSpecialsCharacters(text),
      done
    );

    await _Cache2.default.delete('tasks');

    return task;
  }

  async update(id, text, done) {
    const taskModel = await _task2.default.update(id, text, done);
    await _Cache2.default.delete('tasks');

    return taskModel;
  }

  async delete(id) {
    await _task2.default.delete(id);
  }
}

exports. default = new TaskService();
