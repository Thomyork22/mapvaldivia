import { Router } from 'express';
import { getResenasPorLocal, crearResena } from '../controllers/resenas.js';
import { verificarToken } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/:local_id', getResenasPorLocal);
router.post('/', verificarToken, crearResena);

export default router;
