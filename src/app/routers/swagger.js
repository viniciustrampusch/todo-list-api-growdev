import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocumentation from '../../swagger_documentation.json';

const routes = new Router();

routes.use(
  '/documention',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocumentation)
);

export default routes;
