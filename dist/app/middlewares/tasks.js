"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _httperrors = require('http-errors'); var _httperrors2 = _interopRequireDefault(_httperrors);
var _task = require('../constants/task'); var _task2 = _interopRequireDefault(_task);
var _htttp = require('../constants/htttp'); var _htttp2 = _interopRequireDefault(_htttp);
var _task3 = require('../repositories/task'); var _task4 = _interopRequireDefault(_task3);

function validaDataList(request, response, next) {
  const { limit, page } = request.query;

  if (!limit || !page) {
    throw _httperrors2.default.call(void 0, _htttp2.default.BadRequest, _task2.default.InvalidParams);
  }

  next();
}

function validateData(request, response, next) {
  const { text, done } = request.body;

  if (typeof text !== 'string' || typeof done !== 'boolean') {
    throw _httperrors2.default.call(void 0, _htttp2.default.BadRequest, _task2.default.InvalidParams);
  }

  next();
}

async function validateTaskExist(request, response, next) {
  const { id } = request.params;
  const task = await _task4.default.getById(id);

  if (!task) {
    throw _httperrors2.default.call(void 0, _htttp2.default.BadRequest, _task2.default.TaskNotFound);
  }

  request.taskId = task.id;

  next();
}

exports.validateData = validateData; exports.validaDataList = validaDataList; exports.validateTaskExist = validateTaskExist;
