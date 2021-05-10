import TaskRepository from '../repositories/task';
import Cache from '../utils/Cache';
import Format from '../utils/Format';

class TaskService {
  async getAll(limit, page) {
    const tasksCache = await Cache.get(`tasks-${page}`);

    if (tasksCache) {
      return JSON.parse(tasksCache);
    }

    const tasks = await TaskRepository.getAll(limit, page);
    await Cache.set(`tasks-${page}`, JSON.stringify(tasks));

    return tasks;
  }

  async create(text, done) {
    const task = TaskRepository.create(
      Format.removeSpecialsCharacters(text),
      done
    );
    return task;
  }

  async update(id, text, done) {
    const taskModel = await TaskRepository.update(id, text, done);
    return taskModel;
  }

  async delete(id) {
    await TaskRepository.delete(id);
  }
}

export default new TaskService();
