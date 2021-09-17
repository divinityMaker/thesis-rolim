import { Router } from 'express';

// IMPORTANDO OS CONTROLLERS.
import * as pageController from '../controllers/pageController';
import * as storeController from '../controllers/storeController';

// DEFININDO O ROUTER.
const router = Router();

// CONFIGURANDO AS ROTAS.
router.get('/', pageController.home);
router.get('/produtos', storeController.store);
router.get('/nossa-loja', pageController.find);
router.get('/sobre', pageController.about);

// EXPORTANDO AS ROTAS.
export default router;