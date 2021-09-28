import { Router } from 'express';
import multer from 'multer';

// MIDDLEWARE PARA PROCESSAR A FOTO.
import * as multerConfig from '../middlewares/imageMiddleware';

// IMPORTANDO OS CONTROLLERS.
import * as storeController from '../controllers/storeController';

// DEFININDO O ROUTER.
const adminRouter = Router();

// CONFIGURANDO AS ROTAS.
adminRouter.get('/admin/criar', storeController.create);
adminRouter.post('/admin/criar', multer(multerConfig).single('photo'), storeController.createAction);

// EXPORTANDO AS ROTAS.
export default adminRouter;