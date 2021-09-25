import { Router } from 'express';

// IMPORTANDO OS CONTROLLERS.
import * as storeController from '../controllers/storeController';

// DEFININDO O ROUTER.
const adminRouter = Router();

// CONFIGURANDO AS ROTAS.
adminRouter.get('/admin/criar', storeController.create);
adminRouter.post('/admin/criar', storeController.createAction);


// EXPORTANDO AS ROTAS.
export default adminRouter;