import pool from '../config/db.js';

export async function getFavoritos(req, res) {
  try {
    const resultado = await pool.query(
      `SELECT l.*, c.nombre AS categoria_nombre, c.color AS categoria_color, c.icono AS categoria_icono
       FROM favoritos f
       JOIN locales l ON l.id = f.local_id
       LEFT JOIN categorias c ON c.id = l.categoria_id
       WHERE f.usuario_id = $1
       ORDER BY f.created_at DESC`,
      [req.usuario.id]
    );
    res.json(resultado.rows);
  } catch (error) {
    console.error('Error en getFavoritos:', error);
    res.status(500).json({ error: 'Error al obtener favoritos' });
  }
}

export async function agregarFavorito(req, res) {
  const { local_id } = req.params;

  try {
    const resultado = await pool.query(
      `INSERT INTO favoritos (usuario_id, local_id)
       VALUES ($1, $2)
       ON CONFLICT (usuario_id, local_id) DO NOTHING
       RETURNING *`,
      [req.usuario.id, local_id]
    );
    res.status(201).json(resultado.rows[0] || { usuario_id: req.usuario.id, local_id: Number(local_id) });
  } catch (error) {
    console.error('Error en agregarFavorito:', error);
    res.status(500).json({ error: 'Error al agregar favorito' });
  }
}

export async function quitarFavorito(req, res) {
  const { local_id } = req.params;

  try {
    await pool.query(
      'DELETE FROM favoritos WHERE usuario_id = $1 AND local_id = $2',
      [req.usuario.id, local_id]
    );
    res.json({ mensaje: 'Favorito eliminado' });
  } catch (error) {
    console.error('Error en quitarFavorito:', error);
    res.status(500).json({ error: 'Error al quitar favorito' });
  }
}
