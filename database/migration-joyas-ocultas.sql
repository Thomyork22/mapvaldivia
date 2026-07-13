-- MapValdivia — Joyas Ocultas: locales fuera del circuito turístico central
ALTER TABLE locales ADD COLUMN IF NOT EXISTS es_joya_oculta BOOLEAN DEFAULT FALSE;

UPDATE locales SET es_joya_oculta = TRUE
WHERE sector IN ('Las Ánimas', 'Las Gaviotas', 'Niebla', 'Corral');
