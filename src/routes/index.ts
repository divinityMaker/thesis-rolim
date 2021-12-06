import { Router } from 'express';

    // CONTROLLERS.
import * as pageController from '../controllers/pageController';

    // ROUTER.
const router = Router();

    // ROTAS.
router.get('/', pageController.home);

router.get('/produtos', pageController.store);
router.get('/produtos/violinos', pageController.violinos);
router.get('/produtos/violas', pageController.violas);
router.get('/produtos/violoncelos', pageController.violoncelos);
router.get('/produtos/contra-baixos', pageController.cBaixos);

router.get('/revendedores', pageController.find);
router.get('/sobre', pageController.about);

router.get('/produtos/:slug', pageController.individualPage);

router.get('/admin/error', pageController.errorPage);

    // EXPORTANDO AS ROTAS.
export default router;