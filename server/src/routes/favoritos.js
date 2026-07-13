import { Router } from 'express';
import { getFavoritos, agregarFavorito, quitarFavorito } from '../controllers/favoritos.js';
import { verificarToken } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/', verificarToken, getFavoritos);
router.post('/:local_id', verificarToken, agregarFavorito);
router.delete('/:local_id', verificarToken, quitarFavorito);

export default router;
