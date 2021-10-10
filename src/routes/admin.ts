/////////////////////////////////////////////////////////////////////////////////////////////////////////

    // [IMPORTS] \\
import { Router } from 'express';
import multer from 'multer';

    // [MIDDLEWARES] \\
import { multerConfig, resize } from '../middlewares/imageMiddleware'; 

    // [CONTROLLERS] \\
import * as storeController from '../controllers/storeController';
import * as pageController from '../controllers/pageController';

////////////////////////////////////////////////////////////////////////////////////////////////////////

    // [ROUTER] \\ 
const adminRouter = Router();

    // [ROTAS] \\
adminRouter.get('/admin', pageController.adminLogin)

adminRouter.get('/admin/criar', pageController.create); // PÁGINA DE CRIAÇÃO.
adminRouter.post('/admin/criar', multer(multerConfig).single('photo'), // MULTER CONFIG.
                                 resize, // MIDDLEWARE PARA DAR RESIZE NA FOTO.
                                 storeController.createAction); // AÇÃO DE CRIAR PRODUTO.

adminRouter.get('/admin/:slug/editar', pageController.edit); // PÁGINA DE EDIÇÃO.
adminRouter.post('/admin/:slug/editar', storeController.editAction); // AÇÃO DE EDIÇÃO.

adminRouter.post('/admin/:slug/deletar', storeController.deleteAction); // AÇÃO DE DELETAR.

    // [EXPORTS] \\
export default adminRouter;