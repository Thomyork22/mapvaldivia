import { Router } from 'express';
import {
  getLocales,
  getLocalPorId,
  crearLocal,
  actualizarLocal,
  eliminarLocal,
} from '../controllers/locales.js';
import { verificarToken, requiereRol } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/', getLocales);
router.get('/:id', getLocalPorId);
router.post('/', verificarToken, requiereRol('propietario', 'admin'), crearLocal);
router.put('/:id', verificarToken, actualizarLocal);
router.delete('/:id', verificarToken, eliminarLocal);

export default router;
