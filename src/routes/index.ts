import { Router } from 'express';

    // CONTROLLERS.
import * as pageController from '../controllers/pageController';

    // ROUTER.
const router = Router();

    // ROTAS.
router.get('/', pageController.home);
router.get('/produtos', pageController.store);
router.get('/nossa-loja', pageController.find);
router.get('/sobre', pageController.about);

router.get('/produtos/:slug', pageController.individualPage);

    // EXPORTANDO AS ROTAS.
export default router;