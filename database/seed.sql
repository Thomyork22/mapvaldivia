-- MapValdivia — Datos semilla

-- ============ CATEGORÍAS ============
-- Colores tomados del design system (v2): pigmento real del ingrediente,
-- no una rueda de color por defecto.
INSERT INTO categorias (nombre, color, icono) VALUES
  ('Mariscos', '#9C5232', '🦞'),
  ('Cerveza Artesanal', '#86662E', '🍺'),
  ('Comida Tradicional Valdiviana', '#5C6440', '🍲'),
  ('Dulces y Café', '#644B52', '☕');

-- ============ LOCALES ============
-- Categorías: 1 Mariscos, 2 Cerveza Artesanal, 3 Tradicional, 4 Dulces y Café
-- Sectores: Centro, Las Ánimas, Las Gaviotas, Niebla

INSERT INTO locales
  (nombre, descripcion, direccion, sector, latitud, longitud, categoria_id, precio_rango, horario, telefono, instagram, imagen_url, verificado)
VALUES
  ('Mercado Fluvial de Valdivia',
   'El corazón gastronómico de Valdivia junto al río Calle-Calle. Puestos de mariscos frescos, pescado del día y locos recién extraídos.',
   'Av. Prat s/n', 'Centro', -39.81750000, -73.24670000, 1, '$$',
   '{"lunes_domingo":"07:00-16:00"}', '+56632123001', '@mercadofluvialvaldivia',
   'https://placehold.co/600x400?text=Mercado+Fluvial', TRUE),

  ('La Parroquia Marisquería',
   'Marisquería tradicional a pasos del mercado, famosa por su paila marina y curanto en olla.',
   'Libertad 175', 'Centro', -39.81600000, -73.24700000, 1, '$$',
   '{"martes_domingo":"12:00-22:00"}', '+56632123002', '@laparroquiavaldivia',
   'https://placehold.co/600x400?text=La+Parroquia', TRUE),

  ('La Calle de las Cervezas',
   'Bar de cervezas artesanales del sur de Chile, con más de 20 variedades en barril y música en vivo los fines de semana.',
   'General Lagos 550', 'Centro', -39.81450000, -73.24550000, 2, '$$',
   '{"jueves_sabado":"18:00-02:00"}', '+56632123003', '@lacalledelascervezas',
   'https://placehold.co/600x400?text=La+Calle+de+las+Cervezas', TRUE),

  ('Cervecería Bundor',
   'Cervecería artesanal boutique con producción propia y maridajes de temporada.',
   'Yungay 420', 'Centro', -39.81380000, -73.24680000, 2, '$$',
   '{"miercoles_domingo":"17:00-00:00"}', '+56632123004', '@bundorcerveza',
   'https://placehold.co/600x400?text=Cerveceria+Bundor', FALSE),

  ('Dulcería Entrelagos',
   'Ícono de la repostería valdiviana desde 1949: kuchenes, chocolates artesanales y la clásica torta mil hojas.',
   'Pérez Rosales 622', 'Centro', -39.81400000, -73.24500000, 4, '$',
   '{"lunes_domingo":"09:00-21:00"}', '+56632123005', '@entrelagos.valdivia',
   'https://placehold.co/600x400?text=Entrelagos', TRUE),

  ('Café Hostal Totem',
   'Café de especialidad con vista a la Costanera, kuchen de manzana casero y ambiente acogedor.',
   'Av. Costanera 250', 'Centro', -39.81300000, -73.24450000, 4, '$',
   '{"lunes_domingo":"08:30-20:00"}', '+56632123006', '@totemcafe',
   'https://placehold.co/600x400?text=Cafe+Totem', FALSE),

  ('Restaurant Sabores del Sur',
   'Cocina tradicional valdiviana: cazuela, milcao y pescado frito, con recetas de generaciones.',
   'Independencia 640', 'Centro', -39.81550000, -73.24300000, 3, '$$',
   '{"lunes_domingo":"12:00-21:00"}', '+56632123007', '@saboresdelsur',
   'https://placehold.co/600x400?text=Sabores+del+Sur', TRUE),

  ('Cocinerías del Mercado',
   'Locales de comida casera dentro del Mercado Fluvial, especialistas en cazuela de mariscos y sopaipillas.',
   'Mercado Fluvial, local 12', 'Centro', -39.81780000, -73.24650000, 3, '$',
   '{"lunes_domingo":"08:00-17:00"}', '+56632123008', '@cocinariasmercado',
   'https://placehold.co/600x400?text=Cocinerias+del+Mercado', FALSE),

  ('Restaurant Camino Real',
   'Vista privilegiada al río desde el sector Las Ánimas, especialidad en salmón y mariscos a la parrilla.',
   'Los Robles 340, Las Ánimas', 'Las Ánimas', -39.78340000, -73.22310000, 1, '$$$',
   '{"martes_domingo":"12:30-22:00"}', '+56632123009', '@caminorealvaldivia',
   'https://placehold.co/600x400?text=Camino+Real', TRUE),

  ('Los Alerces Marisquería',
   'Marisquería familiar de Las Ánimas con productos que llegan directo de los pescadores locales.',
   'Ribera Norte 120, Las Ánimas', 'Las Ánimas', -39.78200000, -73.22450000, 1, '$$',
   '{"miercoles_domingo":"12:00-21:00"}', '+56632123010', '@losalerces',
   'https://placehold.co/600x400?text=Los+Alerces', FALSE),

  ('Cervecera Las Ánimas Brew',
   'Microcervecería de barrio con IPA y stout de autor, patio al aire libre frente al río.',
   'Camino Las Ánimas km 3', 'Las Ánimas', -39.78500000, -73.22000000, 2, '$$',
   '{"jueves_domingo":"17:00-23:30"}', '+56632123011', '@animasbrew',
   'https://placehold.co/600x400?text=Animas+Brew', FALSE),

  ('Restaurante Costero Las Gaviotas',
   'Terraza frente al mar en Las Gaviotas, especialidad en curanto y mariscal.',
   'Av. Costera 88, Las Gaviotas', 'Las Gaviotas', -39.89670000, -73.39580000, 1, '$$',
   '{"lunes_domingo":"12:00-21:00"}', '+56632123012', '@costerogaviotas',
   'https://placehold.co/600x400?text=Costero+Las+Gaviotas', TRUE),

  ('Onces Sureñas Las Gaviotas',
   'Salón de té con repostería casera y vista al mar, ideal para la once tradicional chilena.',
   'Los Pescadores 45, Las Gaviotas', 'Las Gaviotas', -39.89500000, -73.39400000, 4, '$',
   '{"lunes_domingo":"15:00-20:00"}', '+56632123013', '@oncessurenas',
   'https://placehold.co/600x400?text=Onces+Surenas', FALSE),

  ('Marisquería El Faro de Niebla',
   'Frente al Fuerte de Niebla, sirve el clásico curanto en olla y machas a la parmesana con vista al mar.',
   'Av. Los Pescadores 210, Niebla', 'Niebla', -39.88230000, -73.39120000, 1, '$$',
   '{"lunes_domingo":"12:00-21:00"}', '+56632123014', '@elfarodeniebla',
   'https://placehold.co/600x400?text=El+Faro+de+Niebla', TRUE),

  ('Cervecería Kunstmann',
   'La cervecería artesanal más icónica del sur de Chile, con museo de la cerveza y salón de degustación en el camino a Niebla.',
   'Camino a Niebla km 5', 'Niebla', -39.83650000, -73.28870000, 2, '$$$',
   '{"lunes_domingo":"12:00-00:00"}', '+56632123015', '@cervezakunstmann',
   'https://placehold.co/600x400?text=Kunstmann', TRUE),

  ('Restaurant Fuerte de Niebla',
   'Comida tradicional valdiviana junto al Fuerte de Niebla, especialidad en cazuela de congrio.',
   'Calle El Fuerte s/n, Niebla', 'Niebla', -39.88100000, -73.39250000, 3, '$$',
   '{"martes_domingo":"12:00-20:00"}', '+56632123016', '@fuertedeniebla',
   'https://placehold.co/600x400?text=Fuerte+de+Niebla', FALSE);

-- ============ RUTAS TEMÁTICAS ============
INSERT INTO rutas (nombre, descripcion, color, duracion_min) VALUES
  ('Ruta Mariscos', 'Recorre los mejores puntos de mariscos frescos de Valdivia, desde el Mercado Fluvial hasta la costa de Niebla.', '#9C5232', 90),
  ('Ruta Cerveza Artesanal', 'Descubre la tradición cervecera valdiviana, desde bares de barrio hasta la histórica Kunstmann.', '#86662E', 120),
  ('Ruta Dulces y Café', 'Una parada dulce por las mejores cafeterías y dulcerías de la ciudad.', '#644B52', 60),
  ('Ruta Comida Tradicional', 'Sabores típicos del sur de Chile: cazuelas, curantos y milcao en los rincones más auténticos de Valdivia.', '#5C6440', 90);

-- ============ RUTA_LOCALES ============
-- Ruta Mariscos (id 1)
INSERT INTO ruta_locales (ruta_id, local_id, orden) VALUES
  (1, 1, 1),  -- Mercado Fluvial
  (1, 2, 2),  -- La Parroquia
  (1, 9, 3),  -- Camino Real
  (1, 14, 4); -- El Faro de Niebla

-- Ruta Cerveza Artesanal (id 2)
INSERT INTO ruta_locales (ruta_id, local_id, orden) VALUES
  (2, 3, 1),  -- La Calle de las Cervezas
  (2, 4, 2),  -- Bundor
  (2, 11, 3), -- Las Ánimas Brew
  (2, 15, 4); -- Kunstmann

-- Ruta Dulces y Café (id 3)
INSERT INTO ruta_locales (ruta_id, local_id, orden) VALUES
  (3, 5, 1),  -- Entrelagos
  (3, 6, 2),  -- Café Totem
  (3, 13, 3); -- Onces Sureñas

-- Ruta Comida Tradicional (id 4)
INSERT INTO ruta_locales (ruta_id, local_id, orden) VALUES
  (4, 7, 1),  -- Sabores del Sur
  (4, 8, 2),  -- Cocinerías del Mercado
  (4, 16, 3); -- Fuerte de Niebla
