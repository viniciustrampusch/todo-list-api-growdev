import createError from 'http-errors';
import TaskConstants from '../constants/task';
import HttpConstants from '../constants/htttp';
import TaskRepository from '../repositories/task';

function validaDataList(request, response, next) {
  const { limit, page } = request.query;

  if (!limit || !page) {
    throw createError(HttpConstants.BadRequest, TaskConstants.InvalidParams);
  }

  next();
}

function validateData(request, response, next) {
  const { text, done } = request.body;

  if (typeof text !== 'string' || typeof done !== 'boolean') {
    throw createError(HttpConstants.BadRequest, TaskConstants.InvalidParams);
  }

  next();
}

async function validateTaskExist(request, response, next) {
  const { id } = request.params;
  const task = await TaskRepository.getById(id);

  if (!task) {
    throw createError(HttpConstants.BadRequest, TaskConstants.TaskNotFound);
  }

  request.taskId = task.id;

  next();
}

export { validateData, validaDataList, validateTaskExist };
