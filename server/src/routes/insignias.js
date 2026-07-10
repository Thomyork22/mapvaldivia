import { Router } from 'express';
import { getInsigniasPorUsuario, otorgarInsignia } from '../controllers/insignias.js';
import { verificarToken } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/:user_id', getInsigniasPorUsuario);
router.post('/', verificarToken, otorgarInsignia);

export default router;
