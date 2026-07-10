import { Router } from 'express';
import { getRutas, getRutaPorId } from '../controllers/rutas.js';

const router = Router();

router.get('/', getRutas);
router.get('/:id', getRutaPorId);

export default router;
