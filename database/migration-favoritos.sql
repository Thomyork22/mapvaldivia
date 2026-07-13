-- MapValdivia — Tabla de favoritos/guardados
CREATE TABLE IF NOT EXISTS favoritos (
  id SERIAL PRIMARY KEY,
  usuario_id INT REFERENCES usuarios(id),
  local_id INT REFERENCES locales(id),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(usuario_id, local_id)
);

CREATE INDEX IF NOT EXISTS idx_favoritos_usuario ON favoritos(usuario_id);
