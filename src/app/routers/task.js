import { Router } from 'express';
import TaskController from '../controllers/TaskController';
import {
  validateData,
  validaDataList,
  validateTaskExist,
} from '../middlewares/tasks';

const routes = new Router();

routes.get(
  '/tasks',
  validaDataList,
  TaskController.index
  /*
  #swagger.tags = ['tasks']
  */
);
routes.get(
  '/tasks/:id',
  TaskController.show
  /*
  #swagger.tags = ['tasks']
  */
);
routes.post(
  '/tasks',
  validateData,
  TaskController.store
  /*
  #swagger.tags = ['tasks']
  */
);
routes.put(
  '/tasks/:id',
  [validateData, validateTaskExist],
  TaskController.update
  /*
  #swagger.tags = ['tasks']
  */
);
routes.delete(
  '/tasks/:id',
  validateTaskExist,
  TaskController.delete
  /*
  #swagger.tags = ['tasks']
  */
);

export default routes;
