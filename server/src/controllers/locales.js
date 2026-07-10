import pool from '../config/db.js';

export async function getLocales(req, res) {
  const { categoria, precio, sector } = req.query;

  try {
    const condiciones = [];
    const valores = [];

    if (categoria) {
      valores.push(categoria);
      condiciones.push(`l.categoria_id = $${valores.length}`);
    }
    if (precio) {
      valores.push(precio);
      condiciones.push(`l.precio_rango = $${valores.length}`);
    }
    if (sector) {
      valores.push(sector);
      condiciones.push(`l.sector = $${valores.length}`);
    }

    const where = condiciones.length ? `WHERE ${condiciones.join(' AND ')}` : '';

    const resultado = await pool.query(
      `SELECT l.*, c.nombre AS categoria_nombre, c.color AS categoria_color, c.icono AS categoria_icono
       FROM locales l
       LEFT JOIN categorias c ON c.id = l.categoria_id
       ${where}
       ORDER BY l.nombre ASC`,
      valores
    );

    res.json(resultado.rows);
  } catch (error) {
    console.error('Error en getLocales:', error);
    res.status(500).json({ error: 'Error al obtener locales' });
  }
}

export async function getLocalPorId(req, res) {
  const { id } = req.params;

  try {
    const resultado = await pool.query(
      `SELECT l.*, c.nombre AS categoria_nombre, c.color AS categoria_color, c.icono AS categoria_icono
       FROM locales l
       LEFT JOIN categorias c ON c.id = l.categoria_id
       WHERE l.id = $1`,
      [id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({ error: 'Local no encontrado' });
    }

    res.json(resultado.rows[0]);
  } catch (error) {
    console.error('Error en getLocalPorId:', error);
    res.status(500).json({ error: 'Error al obtener el local' });
  }
}

export async function crearLocal(req, res) {
  const {
    nombre, descripcion, direccion, sector, latitud, longitud,
    categoria_id, precio_rango, horario, telefono, instagram, imagen_url,
  } = req.body;

  if (!nombre || latitud === undefined || longitud === undefined) {
    return res.status(400).json({ error: 'Nombre, latitud y longitud son obligatorios' });
  }

  try {
    const resultado = await pool.query(
      `INSERT INTO locales
        (nombre, descripcion, direccion, sector, latitud, longitud, categoria_id, precio_rango, horario, telefono, instagram, imagen_url, usuario_id)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
       RETURNING *`,
      [nombre, descripcion, direccion, sector, latitud, longitud, categoria_id, precio_rango, horario, telefono, instagram, imagen_url, req.usuario.id]
    );

    res.status(201).json(resultado.rows[0]);
  } catch (error) {
    console.error('Error en crearLocal:', error);
    res.status(500).json({ error: 'Error al crear el local' });
  }
}

export async function actualizarLocal(req, res) {
  const { id } = req.params;

  try {
    const local = await pool.query('SELECT usuario_id FROM locales WHERE id = $1', [id]);

    if (local.rows.length === 0) {
      return res.status(404).json({ error: 'Local no encontrado' });
    }
    if (local.rows[0].usuario_id !== req.usuario.id && req.usuario.rol !== 'admin') {
      return res.status(403).json({ error: 'No eres el dueño de este local' });
    }

    const {
      nombre, descripcion, direccion, sector, latitud, longitud,
      categoria_id, precio_rango, horario, telefono, instagram, imagen_url,
    } = req.body;

    const resultado = await pool.query(
      `UPDATE locales SET
        nombre = COALESCE($1, nombre),
        descripcion = COALESCE($2, descripcion),
        direccion = COALESCE($3, direccion),
        sector = COALESCE($4, sector),
        latitud = COALESCE($5, latitud),
        longitud = COALESCE($6, longitud),
        categoria_id = COALESCE($7, categoria_id),
        precio_rango = COALESCE($8, precio_rango),
        horario = COALESCE($9, horario),
        telefono = COALESCE($10, telefono),
        instagram = COALESCE($11, instagram),
        imagen_url = COALESCE($12, imagen_url)
       WHERE id = $13
       RETURNING *`,
      [nombre, descripcion, direccion, sector, latitud, longitud, categoria_id, precio_rango, horario, telefono, instagram, imagen_url, id]
    );

    res.json(resultado.rows[0]);
  } catch (error) {
    console.error('Error en actualizarLocal:', error);
    res.status(500).json({ error: 'Error al actualizar el local' });
  }
}

export async function eliminarLocal(req, res) {
  const { id } = req.params;

  try {
    const local = await pool.query('SELECT usuario_id FROM locales WHERE id = $1', [id]);

    if (local.rows.length === 0) {
      return res.status(404).json({ error: 'Local no encontrado' });
    }
    if (local.rows[0].usuario_id !== req.usuario.id && req.usuario.rol !== 'admin') {
      return res.status(403).json({ error: 'No eres el dueño de este local' });
    }

    await pool.query('DELETE FROM locales WHERE id = $1', [id]);
    res.json({ mensaje: 'Local eliminado correctamente' });
  } catch (error) {
    console.error('Error en eliminarLocal:', error);
    res.status(500).json({ error: 'Error al eliminar el local' });
  }
}
