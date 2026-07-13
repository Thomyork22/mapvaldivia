-- MapValdivia — Recalcula el sector de cada local por distancia real
-- (ST_Distance sobre la columna geography `ubicacion`, más preciso que un
-- Haversine manual y ya indexado con GIST) al centroide de sector más
-- cercano. Corrige el mezclado Las Gaviotas / Niebla del import de OSM.

WITH centroides (sector, lat, lon, radio_m) AS (
  VALUES
    ('Centro',       -39.8142, -73.2459, 2500),
    ('Las Ánimas',   -39.7834, -73.2231, 2000),
    ('Las Gaviotas', -39.8967, -73.3958, 2000),
    ('Niebla',       -39.8823, -73.3912, 3000),
    ('Corral',       -39.8834, -73.4234, 2000),
    ('Isla Teja',    -39.8198, -73.2634, 1500)
),
distancias AS (
  SELECT
    l.id,
    c.sector,
    ST_Distance(l.ubicacion, ST_SetSRID(ST_MakePoint(c.lon, c.lat), 4326)::geography) AS distancia_m,
    c.radio_m,
    ROW_NUMBER() OVER (
      PARTITION BY l.id
      ORDER BY ST_Distance(l.ubicacion, ST_SetSRID(ST_MakePoint(c.lon, c.lat), 4326)::geography)
    ) AS rn
  FROM locales l
  CROSS JOIN centroides c
)
UPDATE locales l
SET sector = d.sector
FROM distancias d
WHERE d.id = l.id AND d.rn = 1;

-- Excepción manual: Cervecería Kunstmann es un local conocido "camino a
-- Niebla" — geométricamente el centroide más cercano es Isla Teja, pero
-- eso no refleja la realidad del negocio, así que se protege explícitamente.
UPDATE locales SET sector = 'Niebla' WHERE nombre ILIKE '%Kunstmann%';
