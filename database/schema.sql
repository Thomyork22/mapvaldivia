-- MapValdivia — Esquema de base de datos (PostgreSQL + PostGIS)

-- Habilitar PostGIS
CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE usuarios (
  id          SERIAL PRIMARY KEY,
  nombre      VARCHAR(100) NOT NULL,
  email       VARCHAR(150) UNIQUE NOT NULL,
  password    TEXT NOT NULL,
  rol         VARCHAR(20) DEFAULT 'turista',
  created_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE categorias (
  id     SERIAL PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  color  VARCHAR(7)  NOT NULL,
  icono  VARCHAR(50)
);

CREATE TABLE locales (
  id           SERIAL PRIMARY KEY,
  nombre       VARCHAR(150) NOT NULL,
  descripcion  TEXT,
  direccion    VARCHAR(200),
  sector       VARCHAR(50),
  latitud      DECIMAL(10,8) NOT NULL,
  longitud     DECIMAL(11,8) NOT NULL,
  categoria_id INT REFERENCES categorias(id),
  precio_rango VARCHAR(3),
  horario      JSONB,
  telefono     VARCHAR(20),
  instagram    VARCHAR(100),
  imagen_url   TEXT,
  verificado   BOOLEAN DEFAULT FALSE,
  usuario_id   INT REFERENCES usuarios(id),
  created_at   TIMESTAMP DEFAULT NOW()
);

CREATE TABLE rutas (
  id           SERIAL PRIMARY KEY,
  nombre       VARCHAR(100) NOT NULL,
  descripcion  TEXT,
  color        VARCHAR(7),
  duracion_min INT,
  created_at   TIMESTAMP DEFAULT NOW()
);

CREATE TABLE ruta_locales (
  ruta_id  INT REFERENCES rutas(id),
  local_id INT REFERENCES locales(id),
  orden    INT NOT NULL,
  PRIMARY KEY (ruta_id, local_id)
);

CREATE TABLE resenas (
  id         SERIAL PRIMARY KEY,
  usuario_id INT REFERENCES usuarios(id),
  local_id   INT REFERENCES locales(id),
  puntuacion INT CHECK (puntuacion BETWEEN 1 AND 5),
  comentario TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE insignias (
  id          SERIAL PRIMARY KEY,
  usuario_id  INT REFERENCES usuarios(id),
  tipo        VARCHAR(50),
  obtenida_at TIMESTAMP DEFAULT NOW()
);

-- Índices útiles para filtros frecuentes
CREATE INDEX idx_locales_categoria ON locales(categoria_id);
CREATE INDEX idx_locales_sector ON locales(sector);
CREATE INDEX idx_resenas_local ON resenas(local_id);
CREATE INDEX idx_resenas_usuario ON resenas(usuario_id);
