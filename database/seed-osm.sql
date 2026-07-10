-- MapValdivia — Locales importados desde OpenStreetMap (Overpass API)
-- Fuente: https://overpass-api.de/api/interpreter, extraído 2026-07-08
-- Ver database/osm-raw.json (respuesta cruda) y database/osm-transformado.json (transformado completo).
-- Categorías: 1 Mariscos, 2 Cerveza Artesanal, 3 Comida Tradicional Valdiviana, 4 Dulces y Café.
-- verificado = FALSE para todos: dato importado automáticamente, pendiente de validación humana.
-- Filas marcadas "REVISAR" tienen categoría asignada por defecto (sin tag cuisine o amenity ambiguo: bar/fast_food).

INSERT INTO locales
  (nombre, direccion, sector, latitud, longitud, categoria_id, horario, telefono, instagram, verificado)
VALUES
  ('Bar Doña Inés', 'Carampangue 190', 'Centro', -39.81166770, -73.24608620, 2, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, osm=node/529774160)
  ('Capuccino Co.', 'Arauco 561', 'Centro', -39.81660880, -73.24257670, 4, NULL, NULL, NULL, FALSE),  -- osm=node/529774238
  ('Moro''s', 'Paseo Libertad', 'Centro', -39.81367800, -73.24669360, 4, NULL, NULL, NULL, FALSE),  -- osm=node/529775424
  ('Café de Luis', 'Maipú', 'Centro', -39.81475470, -73.24651320, 4, NULL, NULL, NULL, FALSE),  -- osm=node/529775528
  ('Café Palace', 'O''Higgins 580', 'Centro', -39.81506140, -73.24634690, 4, NULL, NULL, NULL, FALSE),  -- osm=node/529775535
  ('Cava del Buho', 'Avenida Alemania 660', 'Centro', -39.81288430, -73.23992310, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/529775572)
  ('Shanghai', 'Carlos Anwandter', 'Centro', -39.81514970, -73.23655070, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, cuisine=chinese, osm=node/529776371)
  ('Otto Sandwich', 'Gabriela Mistral', 'Centro', -39.81064380, -73.25077640, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=sandwich, osm=node/1183468453)
  ('Doggis', 'Arauco 561', 'Centro', -39.81677860, -73.24221270, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=sandwich, osm=node/1314278176)
  ('Al Capone', 'Carampangue 190', 'Centro', -39.81164360, -73.24641770, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/1314280645)
  ('Lucky 7', 'Carampangue 190', 'Centro', -39.81152820, -73.24623540, 2, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, osm=node/1314280646)
  ('Sky Bar', 'Carampangue 190', 'Centro', -39.81148580, -73.24657220, 2, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, osm=node/1314280647)
  ('Pub Restobar Strike', 'Carampangue 208', 'Centro', -39.81177760, -73.24556490, 2, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, osm=node/1314281558)
  ('Villa del Río', 'Avenida España 1025', 'Centro', -39.80790070, -73.23591820, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/1314295150)
  ('Alondra', 'Avenida Arturo Prat 425', 'Centro', -39.81320470, -73.24800250, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/1314295159)
  ('Quo Vadis', 'Esmeralda 693', 'Centro', -39.81618470, -73.24368150, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/1314295160)
  ('Club De La Unión', 'Camilo Henríquez 540', 'Centro', -39.81465190, -73.24552830, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/1314310293)
  ('La Cabaña', 'Letelier 236', 'Centro', -39.81358540, -73.24582040, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/1314310309)
  ('Zona Zero', 'Lord Cochrane', 'Centro', -39.81908840, -73.24778520, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=sandwich, osm=node/1361030117)
  ('Zona Cero', NULL, 'Centro', -39.81892090, -73.24777990, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=sandwich, osm=node/1361030120)
  ('Toscana', NULL, 'Centro', -39.81646430, -73.23517120, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/1362338230)
  ('La Calabaza', 'Avenida Italia 1770', 'Centro', -39.83332730, -73.23850240, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=pizza, osm=node/1363705007)
  ('El Turkito', NULL, 'Centro', -39.81970540, -73.24282990, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/1371710347)
  ('DCosta', 'Arauco 102', 'Centro', -39.81477470, -73.24782280, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, cuisine=peruvian, osm=node/1371719353)
  ('Naturalia Kororü & Salad', 'Lautaro 115', 'Centro', -39.81611510, -73.24786860, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/1373251168)
  ('Fogón del Leñador', 'Avenida Los Robles', 'Centro', -39.81062140, -73.25514120, 3, '{"osm_opening_hours":"Mo-Su 09:00-22:00"}'::jsonb, NULL, NULL, FALSE),  -- osm=node/1373289347
  ('Casino UACH', NULL, 'Centro', -39.80636100, -73.25246220, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/1374009407)
  ('Universidad Austral', NULL, 'Centro', -39.80753680, -73.24693510, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/1375095885)
  ('Café Aroma', 'Lord Cochrane', 'Centro', -39.81991230, -73.24304460, 4, NULL, NULL, NULL, FALSE),  -- osm=node/1375295924
  ('Universidad Austral', NULL, 'Centro', -39.80522270, -73.24769950, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/1375315840)
  ('Restaurant', NULL, 'Centro', -39.83218600, -73.25233720, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/1378233566)
  ('Los Vecinos', 'Irlanda', 'Centro', -39.83643290, -73.24024860, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=sandwich, osm=node/1383868247)
  ('Cafetería Philippi', 'Calle Museo', 'Centro', -39.81338130, -73.25181310, 4, NULL, NULL, NULL, FALSE),  -- osm=node/1385512124
  ('Onde la Meme', 'Yungay', 'Centro', -39.81551530, -73.24800010, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/1388022915)
  ('Das Haus'' 1959', 'O''Higgins', 'Centro', -39.81271360, -73.24583820, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, cuisine=german, osm=node/1401843249)
  ('Cafetería Veterinaria', NULL, 'Centro', -39.80408600, -73.25308470, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/1430659261)
  ('Sésamo', 'General Baquedano 1384', 'Centro', -39.82223320, -73.24001310, 3, NULL, '+56992794001', NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/1437138503)
  ('Refrán', 'Caupolicán', 'Centro', -39.81313500, -73.24364410, 4, NULL, NULL, NULL, FALSE),  -- osm=node/1441559252
  ('Bar', NULL, 'Centro', -39.83848010, -73.21022090, 2, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, osm=node/1613830857)
  ('Di Baron', NULL, 'Centro', -39.81182100, -73.24079410, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/1617305613)
  ('Madero Restobar', NULL, 'Centro', -39.80944550, -73.24475150, 2, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, osm=node/1689112719)
  ('Phoenix', NULL, 'Centro', -39.80898770, -73.24829130, 2, '{"osm_opening_hours":"Mo-Th 12:30-01:00, Fr,Sa 12:30-02:00, Su 12:30-18:00"}'::jsonb, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, osm=node/1761748528)
  ('Der Baer', 'Paseo Peatonal Camilo Henríquez', 'Centro', -39.81471630, -73.24528070, 4, NULL, NULL, NULL, FALSE),  -- osm=node/1835699453
  ('Universidad Austral', NULL, 'Centro', -39.80440320, -73.25342600, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/1909961660)
  ('Ona Restaurant', NULL, 'Niebla', -39.87423540, -73.39475720, 1, NULL, NULL, NULL, FALSE),  -- osm=node/2132354177
  ('Donceles', 'García Reyes 684-b', 'Centro', -39.81726480, -73.24075770, 4, NULL, NULL, NULL, FALSE),  -- osm=node/2460021002
  ('Maranatha', 'Camilo Henríquez', 'Centro', -39.81816020, -73.24464690, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/2461166027)
  ('Caupolicán (Los Mellados)', 'Santiago Bueras', 'Centro', -39.82691270, -73.23477240, 3, '{"osm_opening_hours":"10:00-22:00"}'::jsonb, NULL, NULL, FALSE),  -- osm=node/2643934627
  ('Cafe', 'O''Higgins', 'Centro', -39.81308800, -73.24589660, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=american, osm=node/2679719997)
  ('Antojo Valdiviano', 'Santiago Bueras 1211', 'Centro', -39.82873950, -73.23730980, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/2824784111)
  ('Garage', NULL, 'Centro', -39.82149510, -73.24332700, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=burger, osm=node/2857519545)
  ('Punto Clave', NULL, 'Centro', -39.84152840, -73.22870730, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/2988962640)
  ('Club Sala Murano', 'Camilo Henríquez 648', 'Centro', -39.81585180, -73.24548960, 2, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, osm=node/3672250811)
  ('Cafeteria Facultad de Ciencias', 'Avenida Rector Eduardo Morales Miranda', 'Centro', -39.80604630, -73.25009990, 4, '{"osm_opening_hours":"Mo-Fr 10:00-19:30"}'::jsonb, NULL, NULL, FALSE),  -- osm=node/3978701773
  ('El Mordisco', 'Aníbal Pinto 909', 'Centro', -39.81942040, -73.24283850, 4, NULL, '063 2668350', NULL, FALSE),  -- osm=node/3978728810
  ('Kiosko Federación', NULL, 'Centro', -39.80669800, -73.24952400, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/4124532850)
  ('Río Bar', 'Avenida Alemania 290', 'Centro', -39.81254100, -73.24523570, 2, '{"osm_opening_hours":"18:00-04:00"}'::jsonb, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, osm=node/4286211010)
  ('Punto de Quiebre', NULL, 'Centro', -39.81185550, -73.24533530, 2, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, osm=node/4286218704)
  ('Río Roll', 'General Baquedano 617', 'Centro', -39.82236200, -73.23998780, 3, NULL, '+56 63 225 3212', NULL, FALSE),  -- REVISAR (amenity=restaurant, cuisine=japanese, osm=node/4313477646)
  ('Nikkei', 'Toribio Medina', 'Centro', -39.82504930, -73.23936850, 3, NULL, '+56632200230', NULL, FALSE),  -- REVISAR (amenity=restaurant, cuisine=sushi, osm=node/4328568261)
  ('Dulce Ríos', 'Caupolicán', 'Centro', -39.81318330, -73.24391550, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=sandwich;friture, osm=node/4330168575)
  ('Café Bar Escorpión Rojo', 'Avenida Alemania', 'Centro', -39.81246870, -73.24440150, 2, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, cuisine=regional, osm=node/4330169882)
  ('La Moneda', 'Camilo Henríquez 436', 'Centro', -39.81339620, -73.24516620, 2, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, osm=node/4330189151)
  ('Con Tomate y Mayo', 'Beauchef 637', 'Centro', -39.81721940, -73.24299220, 3, '{"osm_opening_hours":"Mo-Sa 12:30-00:00"}'::jsonb, '+56964925950', NULL, FALSE),  -- REVISAR (amenity=restaurant, cuisine=sandwich;pizza;tablas;cervezas;almuerzos;tragos_nacionales, osm=node/4337932633)
  ('Al Paso', 'Arauco', 'Centro', -39.81564830, -73.24380220, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=sandwich, osm=node/4337940414)
  ('La Posada', 'Esmeralda', 'Centro', -39.81568250, -73.24435090, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=sandwich, osm=node/4337946641)
  ('El Rincón de ?', 'Ismael Valdes 424', 'Centro', -39.81375700, -73.24229940, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=regional, osm=node/4341865337)
  ('El Shaddai', 'Chacabuco', 'Centro', -39.81348610, -73.24266950, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/4341886902)
  ('Los Leños', 'Chacabuco', 'Centro', -39.81310940, -73.24300860, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/4341888923)
  ('SantaArepa', 'Irlanda', 'Centro', -39.83652060, -73.24017090, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=sushi, osm=node/4353359398)
  ('El Molino', 'Chacabuco', 'Centro', -39.81291030, -73.24587770, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/4353384722)
  ('Musstang', 'Caupolicán 588', 'Centro', -39.81522260, -73.24414750, 2, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, osm=node/4367830691)
  ('quinta las brizas', NULL, 'Centro', -39.84309920, -73.20277950, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/4381096389)
  ('Terra', 'Arauco 240', 'Centro', -39.81511950, -73.24608460, 4, NULL, NULL, NULL, FALSE),  -- osm=node/4432864413
  ('Guacamole', 'García Reyes 684', 'Centro', -39.81737750, -73.24079510, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/4444437801)
  ('Restaurant Costanera', 'Avenida Arturo Prat', 'Centro', -39.81328820, -73.24815480, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/4444437891)
  ('Fuente Valdiviana', 'Esmeralda 634', 'Centro', -39.81582860, -73.24436340, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/4553124389)
  ('La Posada', NULL, 'Las Ánimas', -39.79472610, -73.21332620, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/4558492696)
  ('Pash café', 'Caupolicán 360', 'Centro', -39.81288140, -73.24333340, 4, '{"osm_opening_hours":"Mo-Sa 10:00-20:00; Su 09:00-18:00"}'::jsonb, NULL, NULL, FALSE),  -- osm=node/4691206604
  ('El Rincón de la Abuela', 'Avenida Italia', 'Centro', -39.83280080, -73.23903590, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/4763435922)
  ('Donde Yayo', NULL, 'Centro', -39.82160920, -73.24474810, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/4829667908)
  ('Nonna Clara Pizzería', 'Bombero Classing 228 C', 'Centro', -39.81252690, -73.22278190, 3, '{"osm_opening_hours":"Mo-Su 14:00-03:00"}'::jsonb, '930676488', NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=pizza, osm=node/5072580222)
  ('Nonna Clara Repostería', 'Bombero Classing 228 C', 'Centro', -39.81250690, -73.22280800, 3, '{"osm_opening_hours":"Mo-Su 08:45-23:00"}'::jsonb, '930676488', NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=pancake, osm=node/5072580223)
  ('Café Cotidiano', 'Arauco', 'Centro', -39.81514700, -73.24592240, 4, NULL, NULL, NULL, FALSE),  -- osm=node/5176545127
  ('La Tiendita Té y Café', 'Avenida Los Robles 620', 'Centro', -39.80914510, -73.26007150, 4, NULL, NULL, NULL, FALSE),  -- osm=node/5287790314
  ('Carrito', 'Santiago Bueras', 'Centro', -39.83000230, -73.24010310, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/5287949732)
  ('Señora Juanita', 'Santiago Bueras', 'Centro', -39.82975100, -73.23964890, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/5287949733)
  ('Producciones Nicook', 'Sargento Bueras 1040', 'Centro', -39.82974290, -73.23949610, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/5287949734)
  ('Pewen', 'Avenida Simpson 1000', 'Centro', -39.83208570, -73.23864090, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/5287949738)
  ('Comida Rapida El Bajon', 'Santa Laura 706', 'Centro', -39.84975900, -73.22177310, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=burger;sandwich, osm=node/5288977473)
  ('Donde el Tata', 'Avenida Italia 1740', 'Centro', -39.83294250, -73.23888860, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=steak_house, osm=node/5288977944)
  ('Pollos Schüler', 'Avenida Pedro Montt 4355', 'Centro', -39.85042280, -73.23202740, 3, NULL, '632435762', NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=burger;chicken;fish_and_chips;regional, osm=node/5289004290)
  ('El Rinconcito', 'Anfión Muñoz 360', 'Centro', -39.81462750, -73.23530310, 4, NULL, NULL, NULL, FALSE),  -- osm=node/5302681333
  ('Restaurany Los Ríos', 'Anfión Muñoz 360', 'Centro', -39.81572380, -73.23578400, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/5302681344)
  ('Río Roll', 'Anfión Muñoz 360', 'Centro', -39.81566360, -73.23586030, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=sushi, osm=node/5302681352)
  ('Pedro, Juan & Diego', 'Anfión Muñoz 360', 'Centro', -39.81561070, -73.23586280, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=burger;sandwich, osm=node/5302681353)
  ('Cafe Karu', 'Anfión Muñoz 360', 'Centro', -39.81535390, -73.23576280, 4, NULL, NULL, NULL, FALSE),  -- osm=node/5302681512
  ('Sabor de India', 'Anfión Muñoz 360', 'Centro', -39.81573670, -73.23582420, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=indian, osm=node/5302681653)
  ('Tarragona', 'Anfión Muñoz 360', 'Centro', -39.81559740, -73.23583570, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=burger;chicken, osm=node/5302681654)
  ('Cafeteria y Cocineria Los Rios', 'Anfión Muñoz 360', 'Centro', -39.81562840, -73.23589020, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=steak_house, osm=node/5302681724)
  ('Juan Maestro', 'Arauco 561', 'Centro', -39.81649990, -73.24288770, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=burger, osm=node/5303396340)
  ('Tommy Beans', 'Arauco 561', 'Centro', -39.81622850, -73.24285010, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=mexican, osm=node/5303396342)
  ('Pedro, Juan y Diego', 'Arauco 561', 'Centro', -39.81612640, -73.24282580, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=burger, osm=node/5303396343)
  ('Platon', 'Arauco 561', 'Centro', -39.81610860, -73.24269330, 3, NULL, NULL, NULL, FALSE),  -- osm=node/5303396344
  ('Buffet Express', NULL, 'Centro', -39.81678720, -73.24290690, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/5303404178)
  ('Casa Celeste', 'San Carlos', 'Centro', -39.81574100, -73.24687020, 4, NULL, NULL, NULL, FALSE),  -- osm=node/5313118730
  ('El Rey del Marisco', NULL, 'Centro', -39.81288630, -73.24799270, 1, NULL, NULL, NULL, FALSE),  -- osm=node/5318859022
  ('El Chilenito', NULL, 'Centro', -39.84007930, -73.21748090, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/5343702329)
  ('Restaurante La Abuela', NULL, 'Corral', -39.88811650, -73.42992100, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/5427833121)
  ('Feria Gastronómica Corral', NULL, 'Corral', -39.88821770, -73.42989670, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/5427833221)
  ('Café Raíces', 'Serrano 958', 'Centro', -39.81975870, -73.24599320, 4, NULL, NULL, NULL, FALSE),  -- osm=node/5531801556
  ('Café Barlovento', 'Aníbal Pinto', 'Centro', -39.82544750, -73.23987020, 4, NULL, NULL, NULL, FALSE),  -- osm=node/5592407584
  ('Coffee time', NULL, 'Centro', -39.81665850, -73.24680900, 4, NULL, NULL, NULL, FALSE),  -- osm=node/5996824377
  ('Roasty', NULL, 'Centro', -39.81107920, -73.25214360, 4, NULL, NULL, NULL, FALSE),  -- osm=node/5996824390
  ('Don Rucio', 'Caupolicán 270', 'Centro', -39.81193830, -73.24333680, 2, '{"osm_opening_hours":"Su-Th 18:00-00:00, Fr-Sa 18:00-02:00"}'::jsonb, '+56990752679', NULL, FALSE),  -- REVISAR (amenity=bar, osm=node/6190595588)
  ('Enki', NULL, 'Centro', -39.82008600, -73.24279600, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/6253636096)
  ('Encuentro Valdiviano', 'Arica 2748', 'Centro', -39.83946320, -73.25752190, 3, NULL, '+56632431096', NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=sandwich;regional, osm=node/6281849486)
  ('New Orleans', NULL, 'Centro', -39.81632900, -73.24372060, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/7018352985)
  ('La Notaría', 'Independencia', 'Centro', -39.81567930, -73.24729650, 4, NULL, NULL, NULL, FALSE),  -- osm=node/7137280524
  ('Café & Pastelería Planeta Brunch', 'Lautaro 175', 'Centro', -39.81623730, -73.24721070, 4, '{"osm_opening_hours":"Mo-Fr 08:30-20:30; Sa 09:30-21:30"}'::jsonb, '+56 9 6523 0039', 'https://www.instagram.com/planetabrunch', FALSE),  -- osm=node/7139782854
  ('Café Simple', 'Camilo Henríquez 266', 'Centro', -39.81107560, -73.24456780, 4, NULL, NULL, NULL, FALSE),  -- osm=node/7139795105
  ('Liquen Café', 'Avenida Francia 1800', 'Centro', -39.83458810, -73.23966140, 4, NULL, NULL, NULL, FALSE),  -- osm=node/7235858759
  ('Cervecería Mawida', 'Isla Guacamayo 2244', 'Centro', -39.83247890, -73.23322790, 2, '{"osm_opening_hours":"Mo-Sa 17:00-22:00"}'::jsonb, '+56965047729', NULL, FALSE),  -- REVISAR (amenity=bar, cuisine=pizza, osm=node/7884252886)
  ('Quila Café', 'Beauchef 658', 'Centro', -39.81730540, -73.24251970, 4, '{"osm_opening_hours":"Mo-Sa 10:00-20:00"}'::jsonb, '+56994766736', NULL, FALSE),  -- osm=node/9165505114
  ('El Tropezón', NULL, 'Niebla', -39.87536070, -73.38867720, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/9359346322)
  ('Café Arcoiris', NULL, 'Centro', -39.81265370, -73.24048780, 4, NULL, NULL, NULL, FALSE),  -- osm=node/9760744020
  ('Pizzería Corazón Contento', NULL, 'Centro', -39.81708540, -73.23656650, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/9768684917)
  ('Ubuntu - Lugar de Encuentros', NULL, 'Centro', -39.81067630, -73.24530460, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/9768685017)
  ('Enki Vegan', 'O''Higgins 374', 'Centro', -39.81255730, -73.24583570, 3, '{"osm_opening_hours":"Mo-We 13:00-12:30, Th-Sa 13:00-22:30"}'::jsonb, '+56936975889', NULL, FALSE),  -- REVISAR (amenity=restaurant, cuisine=pizza, osm=node/9768685117)
  ('450 Bar Pizzeria', 'Los Alerces 20', 'Centro', -39.80999580, -73.25462580, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, cuisine=pizza, osm=node/10795405881)
  ('La choza del Teba', 'Avenida Pedro Montt', 'Centro', -39.84400720, -73.23252520, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/11115123714)
  ('Starbucks', 'Avenida Ramón Picarte 442', 'Centro', -39.81427720, -73.24357240, 4, NULL, NULL, NULL, FALSE),  -- osm=node/12017278988
  ('Klasser Burger', 'Lord Cochrane 176', 'Centro', -39.81884760, -73.24829740, 3, '{"osm_opening_hours":"Mo-Th 09:00-23:00; Fr 09:00-23:30; Sa-Su 11:30-23:00"}'::jsonb, '+56 9 4348 1935', 'klasserburgervaldivia', FALSE),  -- REVISAR (amenity=fast_food, cuisine=burger;fries, osm=node/12069090157)
  ('Donde La Mayo', 'Camilo Henríquez', 'Centro', -39.81318550, -73.24518740, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=sandwich;friture, osm=node/12088079453)
  ('Toto', 'Camilo Henríquez', 'Centro', -39.81271640, -73.24506970, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=sandwich, osm=node/12365224282)
  ('Churros', 'Avenida Ramón Picarte', 'Centro', -39.81415440, -73.24538850, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/12396949534)
  ('Café del Elfo', 'Vicente Pérez Rosales', 'Centro', -39.81571870, -73.24675980, 4, '{"osm_opening_hours":"Mo-Sa 08:00-22:00"}'::jsonb, NULL, NULL, FALSE),  -- osm=node/12466051056
  ('Club Ibiza', 'Camilo Henríquez', 'Centro', -39.81281630, -73.24506710, 2, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, osm=node/12507634180)
  ('Al Yugo', 'Avenida Alemania', 'Centro', -39.81239590, -73.24495290, 2, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, osm=node/12507634181)
  ('Lovanij Coffee Work', 'Oettinger 66', 'Centro', -39.81017610, -73.25290480, 4, '{"osm_opening_hours":"Mo-Fr 09:00-21:00 Sa-Su 09:00-19:00"}'::jsonb, NULL, NULL, FALSE),  -- osm=node/12864929800
  ('Cafefit', 'Zaragoza', 'Centro', -39.83117150, -73.24155100, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=node/12952972356)
  ('Agualda', 'Pasaje Mapu', 'Centro', -39.85331300, -73.24944990, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=pizza, osm=node/13076545379)
  ('Sushi An', 'Yerbas Buenas 412', 'Centro', -39.81797520, -73.24484470, 3, '{"osm_opening_hours":"Mo-Fr 12:30-20:30"}'::jsonb, '+56 9 7372 7970', 'sushi__an_delivery', FALSE),  -- REVISAR (amenity=fast_food, cuisine=sushi;fries;japanese, osm=node/13233344170)
  ('Ikigaisushi', 'Pedro de Valdivia', 'Centro', -39.81505880, -73.23839400, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, cuisine=japanese, osm=node/13288223714)
  ('Santos Sabores', 'Avenida Ramón Picarte', 'Centro', -39.81514880, -73.23865290, 4, NULL, NULL, NULL, FALSE),  -- osm=node/13288223716
  ('Under Pizza', NULL, 'Centro', -39.81081880, -73.25176310, 3, '{"osm_opening_hours":"Fr-Sa 10:00-02:00; Mo-Th,Su 10:00-24:00"}'::jsonb, '+56 2 2595 0700', 'https://www.instagram.com/underpizzachile', FALSE),  -- REVISAR (amenity=fast_food, cuisine=pizza, osm=node/13301596637)
  ('Café Lumiere', 'Aníbal Pinto 891', 'Centro', -39.81867590, -73.24298340, 4, '{"osm_opening_hours":"Mo-Su 07:30-20:00"}'::jsonb, NULL, NULL, FALSE),  -- osm=node/13625907599
  ('La Perla Negra', NULL, 'Centro', -39.81344220, -73.24820130, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/13685200401)
  ('Valdiviana', NULL, 'Centro', -39.81347020, -73.24800160, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=node/13685200402)
  ('Mawenche', 'Vicente Pérez Rosales', 'Centro', -39.81542350, -73.24666080, 4, NULL, NULL, NULL, FALSE),  -- osm=node/13783705081
  ('Ansai Sushi', 'Avenida Circunvalación Sur 2565', 'Centro', -39.84452850, -73.23099630, 3, NULL, '+56952328178', NULL, FALSE),  -- REVISAR (amenity=restaurant, cuisine=sushi, osm=node/13860814561)
  ('Mar Azul', 'Camilo Henríquez 412', 'Centro', -39.81787130, -73.24474250, 3, '{"osm_opening_hours":"Mo-Sa 13:00-06:00"}'::jsonb, '+56999334372', NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=friture, osm=node/13987116202)
  ('Tilo Bar', 'General Lagos 745', 'Centro', -39.81670560, -73.24863920, 3, NULL, NULL, NULL, FALSE),  -- osm=way/123498519
  ('Yang Cheng', 'General Lagos 1118', 'Centro', -39.82114750, -73.24922670, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, cuisine=chinese, osm=way/124432950)
  ('Zuhause', 'Santiago Bueras 219', 'Centro', -39.82804940, -73.24909970, 3, NULL, NULL, NULL, FALSE),  -- osm=way/124801642
  ('La Bomba', 'Caupolicán 594', 'Centro', -39.81536240, -73.24415320, 3, '{"osm_opening_hours":"Mo-Sa 10:00-23:00; Su 00:00-21:00"}'::jsonb, '+56632578663', NULL, FALSE),  -- osm=way/124964110
  ('La Valdiviana', 'Errázuriz', 'Centro', -39.82470390, -73.22903410, 3, NULL, NULL, NULL, FALSE),  -- osm=way/126746160
  ('Camino de Luna', 'Avenida Arturo Prat', 'Centro', -39.81120200, -73.24780810, 3, '{"osm_opening_hours":"Mo-Su 12:00-24:00"}'::jsonb, '+56 63 223 4393', NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/127263784)
  ('La Casona', 'Avenida Arturo Prat 723', 'Centro', -39.81261880, -73.23770770, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/129384916)
  ('Fogón Palestino', 'Avenida España 507', 'Centro', -39.81348290, -73.23046760, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/163548339)
  ('Shot Karaoke', 'Esmeralda 657', 'Centro', -39.81615350, -73.24437040, 2, '{"osm_opening_hours":"18:30-03:30"}'::jsonb, '(63) 222 2410', NULL, FALSE),  -- REVISAR (amenity=bar, osm=way/181669943)
  ('Café Haussmann', 'Avenida Los Robles 202', 'Centro', -39.81050200, -73.25368180, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, cuisine=german;sandwich, osm=way/360584382)
  ('Murtao Restaurant', 'Germán Saelzer 020', 'Centro', -39.81042500, -73.25398360, 1, '{"osm_opening_hours":"12:00-24:00,00:00-02:00"}'::jsonb, '2 541038', NULL, FALSE),  -- osm=way/368004995
  ('Papas Bravas', NULL, 'Centro', -39.80970840, -73.25157790, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/374420179)
  ('Los Corelly', 'Aníbal Pinto 1685', 'Centro', -39.82338050, -73.24009220, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=way/403859558)
  ('Jota', NULL, 'Centro', -39.81038630, -73.25310110, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/403889803)
  ('Mercato', 'Avenida Los Robles 100', 'Centro', -39.81076880, -73.25196710, 3, '{"osm_opening_hours":"We-Th 12:45-21:00; Fr 12:45-21:30; Sa 12:00-21:00; Su 12:00-20:00"}'::jsonb, '+56 63 2 625346', NULL, FALSE),  -- REVISAR (amenity=restaurant, cuisine=pasta;pizza;italian, osm=way/410346877)
  ('Medieval', 'Santiago Bueras 560', 'Centro', -39.82876600, -73.24466690, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/434946043)
  ('Fodie', 'General Baquedano', 'Centro', -39.82266470, -73.23814280, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=way/434950248)
  ('Bar Gamer', 'Beauchef', 'Centro', -39.81650390, -73.24327410, 2, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, osm=way/435898979)
  ('Grado 3', 'Esmeralda', 'Centro', -39.81675670, -73.24351770, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, cuisine=japanese, osm=way/435899649)
  ('City Bar', 'Esmeralda', 'Centro', -39.81603880, -73.24376870, 2, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, osm=way/435900193)
  ('Picamaderos', 'Esmeralda', 'Centro', -39.81638570, -73.24363320, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/435900417)
  ('Nuevo Campesino', 'Arauco', 'Centro', -39.81563190, -73.24408730, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/435900860)
  ('Mar y Copas', 'Chacabuco', 'Centro', -39.81354420, -73.24253800, 3, NULL, NULL, NULL, FALSE),  -- osm=way/436321165
  ('Bimba', 'Independencia 543', 'Centro', -39.81429320, -73.24732690, 2, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, osm=way/436494491)
  ('Chile Güey (Mexicana)', 'Carlos Anwandter 288 B', 'Centro', -39.80958250, -73.24454550, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, cuisine=thai, osm=way/462199092)
  ('Fogón Sureño', 'Janequeo 382', 'Centro', -39.81088630, -73.24350910, 3, NULL, NULL, NULL, FALSE),  -- osm=way/463264035
  ('1960', 'Santiago Bueras', 'Centro', -39.82801730, -73.24786210, 2, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, osm=way/463267573)
  ('Salon Pool', 'Tornagaleones', 'Niebla', -39.86369800, -73.39300500, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/478362884)
  ('La Huella Restaurante', 'Tornagaleones 105', 'Niebla', -39.86312300, -73.39480580, 3, '{"osm_opening_hours":"Tu-Su 11:00-20:00"}'::jsonb, '+56632200354', NULL, FALSE),  -- osm=way/478363826
  ('Tesoro del Mar', 'Paseo Libertad', 'Centro', -39.81346780, -73.24736020, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/489067586)
  ('Restaurant Escuela Liceo Tecnico', NULL, 'Centro', -39.82989020, -73.22181980, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/504127071)
  ('Café La Motoneta', 'Del Castillo', 'Niebla', -39.87071720, -73.40003750, 4, NULL, NULL, NULL, FALSE),  -- osm=way/515094914
  ('Indio Pije', 'Del Castillo', 'Niebla', -39.86444090, -73.39344690, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/515100623)
  ('La Terraza', NULL, 'Niebla', -39.85833970, -73.39079730, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/515109590)
  ('Entre Costa', 'Carlos Antonio Duce', 'Niebla', -39.87412420, -73.39567790, 1, NULL, NULL, NULL, FALSE),  -- osm=way/515125962
  ('La Herradura', NULL, 'Las Gaviotas', -39.89020850, -73.39074430, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/517476351)
  ('Entre Faros', 'Ruta T-350', 'Niebla', -39.86286630, -73.35596540, 3, NULL, '+56 63 228 2888', NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/520371089)
  ('Casa Negra', 'Aníbal Pinto 1965', 'Centro', -39.82678010, -73.23990820, 3, '{"osm_opening_hours":"Mo-Th 08:30-22:00; Fr 08:30-00:00; Sa 12:00-00:00"}'::jsonb, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/542667089)
  ('Mistura Limeña', 'Avenida Ramón Picarte 3560', 'Centro', -39.84150330, -73.20391370, 3, NULL, '+56941259806', NULL, FALSE),  -- osm=way/547270704
  ('La Cevichería', 'Yerbas Buenas', 'Centro', -39.81799460, -73.24715870, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/574636138)
  ('La Picá de Cochrane', 'Lord Cochrane', 'Centro', -39.81937680, -73.24643700, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/576877651)
  ('Cioccolato', 'Avenida Los Robles', 'Centro', -39.81036180, -73.25441600, 4, NULL, NULL, NULL, FALSE),  -- osm=way/584266023
  ('Dasud', 'Los Helechos 775', 'Centro', -39.80798870, -73.26236290, 3, '{"osm_opening_hours":"Tu-Su 13:00-22:30; Su 13:00-17:30"}'::jsonb, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, cuisine=pizza;pasta, osm=way/589974757)
  ('La Pizzeria de Renzo', 'Germán Saelzer', 'Centro', -39.81010770, -73.25377590, 3, NULL, '+63 2347400', NULL, FALSE),  -- REVISAR (amenity=restaurant, cuisine=pizza, osm=way/601893447)
  ('La Última Frontera', 'Los Tilos 91', 'Centro', -39.80874330, -73.25501720, 3, NULL, NULL, NULL, FALSE),  -- osm=way/602726678
  ('Cava', 'Avenida Los Robles 071', 'Centro', -39.81122570, -73.25161400, 2, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, osm=way/619631422)
  ('Mia', 'Avenida Los Robles', 'Centro', -39.81118780, -73.25181010, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/619631424)
  ('Patagonia Donuts', 'Rocura 15', 'Centro', -39.80956150, -73.21685530, 4, NULL, NULL, NULL, FALSE),  -- osm=way/623143659
  ('Carezza', 'Aníbal Pinto 2160', 'Centro', -39.82948110, -73.24047250, 4, NULL, '+56985477667', NULL, FALSE),  -- osm=way/711522507
  ('Entre Mar y Tierra', 'Carlos Anwandter 802', 'Centro', -39.81403690, -73.23771330, 1, NULL, NULL, NULL, FALSE),  -- osm=way/729894160
  ('Corazón Contento', 'Arauco 958', 'Centro', -39.81694840, -73.23612380, 3, NULL, '+56977073626', NULL, FALSE),  -- REVISAR (amenity=restaurant, cuisine=pizza, osm=way/744339569)
  ('Animeños', 'Pedro Aguirre Cerda', 'Centro', -39.81539810, -73.22521930, 2, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=bar, osm=way/771222199)
  ('La Casona', 'Lord Cochrane 391', 'Centro', -39.81950530, -73.24542180, 3, '{"osm_opening_hours":"19:00-22:00"}'::jsonb, NULL, 'lacasonabarriosbajos', FALSE),  -- REVISAR (amenity=restaurant, cuisine=fries;burger;sandwich;hot_dog, osm=way/772308053)
  ('Pastas Trigo', 'Lord Cochrane 375', 'Centro', -39.81951850, -73.24566530, 3, '{"osm_opening_hours":"Mo-Sa 12:00-22:30; Su 12:00-18:30"}'::jsonb, NULL, 'pastastrigovaldivia', FALSE),  -- REVISAR (amenity=restaurant, cuisine=pasta;soup, osm=way/772308054)
  ('Valdi Lomits', 'General Lagos', 'Centro', -39.82059460, -73.24924070, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=sandwich;burger, osm=way/776815181)
  ('Espacio Cocina', 'Arturo Gunther', 'Centro', -39.82992140, -73.23769710, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/827234735)
  ('Puerto Canelos', 'Carampangue 636', 'Centro', -39.81273180, -73.24024890, 3, NULL, NULL, NULL, FALSE),  -- osm=way/851088957
  ('Café Restaurante Cosas Ricas', 'Vicente Pérez Rosales 644', 'Centro', -39.81563870, -73.24644320, 4, NULL, NULL, NULL, FALSE),  -- osm=way/932019173
  ('Las Sabrosas', 'Anfión Muñoz', 'Centro', -39.81710640, -73.23745960, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, osm=way/933649932)
  ('Cafetería y Pastelería', 'Carlos Bennett', 'Centro', -39.82866130, -73.23970260, 4, NULL, NULL, NULL, FALSE),  -- osm=way/944948417
  ('Upita!', 'Avenida Los Robles', 'Centro', -39.81081920, -73.25137900, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=coffee_shop, osm=way/1014099094)
  ('Cromo Café', 'Phillippi 921', 'Centro', -39.81959460, -73.24552450, 4, NULL, NULL, NULL, FALSE),  -- osm=way/1089518205
  ('Apetitizos', 'Avenida Francia', 'Centro', -39.83518280, -73.21832420, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=fast_food, cuisine=burger, osm=way/1093454061)
  ('La Parrilla de Thor', 'Avenida Arturo Prat 653', 'Centro', -39.81150100, -73.23920630, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, cuisine=steak_house, osm=way/1112593530)
  ('Café Latinoamericano', 'Carlos Anwandter', 'Centro', -39.81187620, -73.24083570, 4, NULL, NULL, NULL, FALSE),  -- osm=way/1123426054
  ('Medieval', 'Santiago Bueras 560', 'Centro', -39.82867630, -73.24439910, 3, NULL, NULL, NULL, FALSE),  -- REVISAR (amenity=restaurant, osm=way/1224661585)
  ('Minory', 'Avenida Ecuador', 'Centro', -39.82430180, -73.21791850, 3, NULL, '+56632210200', NULL, FALSE),  -- REVISAR (amenity=restaurant, cuisine=chinese, osm=way/1347418444)
  ('La Calesa', 'Avenida Pedro Montt', 'Centro', -39.83688980, -73.23428710, 3, NULL, NULL, NULL, FALSE);  -- REVISAR (amenity=restaurant, cuisine=peruvian, osm=way/1497588826)
