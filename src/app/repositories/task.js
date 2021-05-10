import Task from '../models/Task';

class TaskRepository {
  async getAll(limit, page) {
    const tasks = await Task.findAndCountAll({
      limit,
      offset: limit * (page - 1),
    });

    return tasks;
  }

  async getById(id) {
    const task = await Task.findByPk(id);
    return task;
  }

  async create(text, done) {
    const task = await Task.create({ text, done });

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

export default new TaskRepository();
