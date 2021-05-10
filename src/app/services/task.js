import TaskRepository from '../repositories/task';
import Cache from '../utils/Cache';
import Format from '../utils/Format';

class TaskService {
  async getAll(limit, page) {
    let tasksCache = null;

    if (page === 1) {
      tasksCache = await Cache.get('tasks');
    }

    if (tasksCache) {
      return JSON.parse(tasksCache);
    }

    const tasks = await TaskRepository.getAll(limit, page);

    if (page === 1) {
      await Cache.set('tasks', JSON.stringify(tasks));
    }

    return tasks;
  }

  async create(text, done) {
    const task = TaskRepository.create(
      Format.removeSpecialsCharacters(text),
      done
    );

    await Cache.delete('tasks');

    return task;
  }

  async update(id, text, done) {
    const taskModel = await TaskRepository.update(id, text, done);
    await Cache.delete('tasks');

    return taskModel;
  }

  async delete(id) {
    await TaskRepository.delete(id);
  }
}

export default new TaskService();
