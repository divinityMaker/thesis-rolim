/////////////////////////////////////////////////////////////////////////////////////////////////////////

// [IMPORTS] \\
import { Router } from 'express';
import multer from 'multer';

// [MIDDLEWARES] \\
import { multerConfig, resize } from '../middlewares/imageMiddleware';
import { auth } from '../middlewares/auth';

// [CONTROLLERS] \\
import * as storeController from '../controllers/storeController';
import * as pageController from '../controllers/pageController';
import * as userController from '../controllers/userController';

////////////////////////////////////////////////////////////////////////////////////////////////////////

// [ROUTER] \\ 
const adminRouter = Router();

// [ROTAS] \\
adminRouter.get('/admin', pageController.adminLogin);
adminRouter.post('/admin', userController.loginAction);

adminRouter.get('/admin/dashboard', pageController.adminDashboard);

adminRouter.get('/admin/criar', auth.private,
    pageController.create); // PÁGINA DE CRIAÇÃO.
adminRouter.post('/admin/criar', auth.private,
    multer(multerConfig).single('photo'), // MULTER CONFIG.
    resize, // MIDDLEWARE PARA DAR RESIZE NA FOTO.
    storeController.createAction); // AÇÃO DE CRIAR PRODUTO.

adminRouter.get('/admin/:slug/editar', auth.private,
    pageController.edit); // PÁGINA DE EDIÇÃO.
adminRouter.post('/admin/:slug/editar', auth.private,
    storeController.editAction); // AÇÃO DE EDIÇÃO.

adminRouter.post('/admin/:slug/deletar', auth.private,
    storeController.deleteAction); // AÇÃO DE DELETAR.

// [EXPORTS] \\
export default adminRouter;