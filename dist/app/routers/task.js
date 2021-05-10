"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TaskController = require('../controllers/TaskController'); var _TaskController2 = _interopRequireDefault(_TaskController);




var _tasks = require('../middlewares/tasks');

const routes = new (0, _express.Router)();

routes.get(
  '/tasks',
  _tasks.validaDataList,
  _TaskController2.default.index
  /*
  #swagger.tags = ['tasks']
  */
);
routes.get(
  '/tasks/:id',
  _TaskController2.default.show
  /*
  #swagger.tags = ['tasks']
  */
);
routes.post(
  '/tasks',
  _tasks.validateData,
  _TaskController2.default.store
  /*
  #swagger.tags = ['tasks']
  */
);
routes.put(
  '/tasks/:id',
  [_tasks.validateData, _tasks.validateTaskExist],
  _TaskController2.default.update
  /*
  #swagger.tags = ['tasks']
  */
);
routes.delete(
  '/tasks/:id',
  _tasks.validateTaskExist,
  _TaskController2.default.delete
  /*
  #swagger.tags = ['tasks']
  */
);

exports. default = routes;
