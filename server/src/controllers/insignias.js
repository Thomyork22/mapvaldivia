import pool from '../config/db.js';

const CATEGORIA_CERVEZA = 2;
const CATEGORIA_TRADICIONAL = 3;

const REGLAS_INSIGNIAS = [
  {
    tipo: 'Explorador de Valdivia',
    verificar: async (usuarioId) => {
      const { rows } = await pool.query(
        `SELECT COUNT(DISTINCT l.sector) AS total
         FROM resenas r
         JOIN locales l ON l.id = r.local_id
         WHERE r.usuario_id = $1 AND l.sector IS NOT NULL`,
        [usuarioId]
      );
      return Number(rows[0].total) >= 3;
    },
  },
  {
    tipo: 'Catador Artesanal',
    verificar: async (usuarioId) => {
      const { rows } = await pool.query(
        `SELECT COUNT(DISTINCT l.id) AS total
         FROM resenas r
         JOIN locales l ON l.id = r.local_id
         WHERE r.usuario_id = $1 AND l.categoria_id = $2`,
        [usuarioId, CATEGORIA_CERVEZA]
      );
      return Number(rows[0].total) >= 2;
    },
  },
  {
    tipo: 'Sabor Valdiviano',
    verificar: async (usuarioId) => {
      const { rows } = await pool.query(
        `SELECT COUNT(DISTINCT l.id) AS total
         FROM resenas r
         JOIN locales l ON l.id = r.local_id
         WHERE r.usuario_id = $1 AND l.categoria_id = $2`,
        [usuarioId, CATEGORIA_TRADICIONAL]
      );
      return Number(rows[0].total) >= 3;
    },
  },
  {
    tipo: 'Explorador de Niebla',
    verificar: async (usuarioId) => {
      const { rows } = await pool.query(
        `SELECT COUNT(DISTINCT l.id) AS total
         FROM resenas r
         JOIN locales l ON l.id = r.local_id
         WHERE r.usuario_id = $1 AND l.sector = 'Niebla'`,
        [usuarioId]
      );
      return Number(rows[0].total) >= 1;
    },
  },
];

export async function otorgarInsigniasAutomaticas(usuarioId) {
  const otorgadas = [];

  for (const regla of REGLAS_INSIGNIAS) {
    const yaTiene = await pool.query(
      'SELECT id FROM insignias WHERE usuario_id = $1 AND tipo = $2',
      [usuarioId, regla.tipo]
    );

    if (yaTiene.rows.length > 0) continue;

    const cumple = await regla.verificar(usuarioId);
    if (cumple) {
      const { rows } = await pool.query(
        'INSERT INTO insignias (usuario_id, tipo) VALUES ($1, $2) RETURNING *',
        [usuarioId, regla.tipo]
      );
      otorgadas.push(rows[0]);
    }
  }

  return otorgadas;
}

export async function getInsigniasPorUsuario(req, res) {
  const { user_id } = req.params;

  try {
    const resultado = await pool.query(
      'SELECT * FROM insignias WHERE usuario_id = $1 ORDER BY obtenida_at DESC',
      [user_id]
    );
    res.json(resultado.rows);
  } catch (error) {
    console.error('Error en getInsigniasPorUsuario:', error);
    res.status(500).json({ error: 'Error al obtener insignias' });
  }
}

export async function otorgarInsignia(req, res) {
  try {
    const usuarioId = req.usuario.id;
    const otorgadas = await otorgarInsigniasAutomaticas(usuarioId);
    res.json({ otorgadas });
  } catch (error) {
    console.error('Error en otorgarInsignia:', error);
    res.status(500).json({ error: 'Error al otorgar insignias' });
  }
}
