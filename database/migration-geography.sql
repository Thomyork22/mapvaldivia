-- MapValdivia — Migración: columna geography + índice espacial en locales
-- Aditiva: no toca latitud/longitud, que el frontend sigue usando tal cual.

ALTER TABLE locales
  ADD COLUMN IF NOT EXISTS ubicacion GEOGRAPHY(POINT, 4326)
  GENERATED ALWAYS AS (ST_SetSRID(ST_MakePoint(longitud, latitud), 4326)::geography) STORED;

CREATE INDEX IF NOT EXISTS idx_locales_ubicacion ON locales USING GIST (ubicacion);

ALTER TABLE locales
  ADD CONSTRAINT chk_locales_lat CHECK (latitud BETWEEN -90 AND 90),
  ADD CONSTRAINT chk_locales_lon CHECK (longitud BETWEEN -180 AND 180);
