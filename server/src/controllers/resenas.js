import pool from '../config/db.js';
import { otorgarInsigniasAutomaticas } from './insignias.js';

export async function getResenasPorLocal(req, res) {
  const { local_id } = req.params;

  try {
    const resenas = await pool.query(
      `SELECT r.*, u.nombre AS usuario_nombre
       FROM resenas r
       JOIN usuarios u ON u.id = r.usuario_id
       WHERE r.local_id = $1
       ORDER BY r.created_at DESC`,
      [local_id]
    );

    const promedio = await pool.query(
      `SELECT ROUND(AVG(puntuacion)::numeric, 1) AS promedio, COUNT(*) AS total
       FROM resenas WHERE local_id = $1`,
      [local_id]
    );

    res.json({
      resenas: resenas.rows,
      promedio: Number(promedio.rows[0].promedio) || 0,
      total: Number(promedio.rows[0].total),
    });
  } catch (error) {
    console.error('Error en getResenasPorLocal:', error);
    res.status(500).json({ error: 'Error al obtener reseñas' });
  }
}

export async function crearResena(req, res) {
  const { local_id, puntuacion, comentario } = req.body;
  const usuario_id = req.usuario.id;

  if (!local_id || !puntuacion) {
    return res.status(400).json({ error: 'local_id y puntuacion son obligatorios' });
  }
  if (puntuacion < 1 || puntuacion > 5) {
    return res.status(400).json({ error: 'La puntuación debe estar entre 1 y 5' });
  }

  try {
    const resultado = await pool.query(
      `INSERT INTO resenas (usuario_id, local_id, puntuacion, comentario)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [usuario_id, local_id, puntuacion, comentario]
    );

    const insigniasOtorgadas = await otorgarInsigniasAutomaticas(usuario_id);

    res.status(201).json({ resena: resultado.rows[0], insigniasOtorgadas });
  } catch (error) {
    console.error('Error en crearResena:', error);
    res.status(500).json({ error: 'Error al crear la reseña' });
  }
}
