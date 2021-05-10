import TaskService from '../services/task';

class TaskController {
  async index(request, response) {
    const { limit, page } = request.query;
    const tasks = await TaskService.getAll(limit, page);

    return response.json(tasks);
  }

  show(request, response) {
    //
  }

  async store(request, response) {
    const { text, done } = request.body;
    const task = await TaskService.create(text, done);

    return response.json(task);
  }

  async update(request, response) {
    const { text, done } = request.body;
    const { task } = await TaskService.update(request.taskId, text, done);

    return response.json(task);
  }

  async delete(request, response) {
    await TaskService.delete(request.taskId);

    return response.sendStatis(204);
  }
}

export default new TaskController();
