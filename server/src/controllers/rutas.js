import pool from '../config/db.js';

async function adjuntarLocales(ruta) {
  const resultado = await pool.query(
    `SELECT l.*, c.nombre AS categoria_nombre, c.color AS categoria_color, c.icono AS categoria_icono,
            rl.orden
     FROM ruta_locales rl
     JOIN locales l ON l.id = rl.local_id
     LEFT JOIN categorias c ON c.id = l.categoria_id
     WHERE rl.ruta_id = $1
     ORDER BY rl.orden ASC`,
    [ruta.id]
  );
  return { ...ruta, locales: resultado.rows };
}

export async function getRutas(req, res) {
  try {
    const rutas = await pool.query('SELECT * FROM rutas ORDER BY id ASC');
    const rutasConLocales = await Promise.all(rutas.rows.map(adjuntarLocales));
    res.json(rutasConLocales);
  } catch (error) {
    console.error('Error en getRutas:', error);
    res.status(500).json({ error: 'Error al obtener rutas' });
  }
}

export async function getRutaPorId(req, res) {
  const { id } = req.params;

  try {
    const ruta = await pool.query('SELECT * FROM rutas WHERE id = $1', [id]);

    if (ruta.rows.length === 0) {
      return res.status(404).json({ error: 'Ruta no encontrada' });
    }

    const rutaConLocales = await adjuntarLocales(ruta.rows[0]);
    res.json(rutaConLocales);
  } catch (error) {
    console.error('Error en getRutaPorId:', error);
    res.status(500).json({ error: 'Error al obtener la ruta' });
  }
}
