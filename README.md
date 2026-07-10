# MapValdivia

PWA de mapa gastronómico interactivo para la ciudad de Valdivia, Chile. Proyecto
MVP del ramo de Innovación y Emprendimiento II — Ingeniería en Informática,
INACAP Valdivia.

Resuelve la dispersión de la oferta gastronómica local (mercados genéricos como
Google Maps o Instagram) dando visibilidad geolocalizada a PYMES de sectores
como Las Ánimas, Las Gaviotas y Niebla, y guiando al turista con rutas
temáticas curadas.

- **ODS 8** — Crecimiento económico y visibilidad para PYMES gastronómicas.
- **ODS 11** — Distribución equitativa del flujo turístico por la ciudad.

## Stack

| Capa      | Tecnología                              |
|-----------|------------------------------------------|
| Frontend  | React (Vite) + Tailwind CSS + Leaflet.js |
| Backend   | Node.js + Express.js                     |
| Base de datos | PostgreSQL + PostGIS                 |
| Auth      | JWT + bcrypt                             |
| Deploy    | Vercel (frontend) + Railway (backend + BD) |
| PWA       | manifest.json + service worker           |

## Estructura del proyecto

```
mapvaldivia/
├── client/     # React PWA (Vite)
├── server/     # API REST (Express)
└── database/   # schema.sql y seed.sql (PostgreSQL + PostGIS)
```

## Requisitos previos

- Node.js 18+
- PostgreSQL 14+ con la extensión PostGIS disponible

## Instalación local

### 1. Base de datos

```bash
createdb mapvaldivia
psql -d mapvaldivia -f database/schema.sql
psql -d mapvaldivia -f database/seed.sql
```

### 2. Backend

```bash
cd server
cp .env.example .env    # completar DATABASE_URL y JWT_SECRET
npm install
npm run dev              # http://localhost:3001
```

### 3. Frontend

```bash
cd client
cp .env.example .env     # VITE_API_URL apuntando al backend
npm install
npm run dev               # http://localhost:5173
```

## Variables de entorno

**server/.env**
```
PORT=3001
DATABASE_URL=postgresql://user:password@localhost:5432/mapvaldivia
JWT_SECRET=mapvaldivia_secret_2026
```

**client/.env**
```
VITE_API_URL=http://localhost:3001/api
```

## API REST

| Método | Endpoint                    | Descripción                                  | Auth |
|--------|------------------------------|-----------------------------------------------|------|
| POST   | `/api/auth/register`         | Registrar usuario                             | No   |
| POST   | `/api/auth/login`            | Login, devuelve JWT                           | No   |
| GET    | `/api/locales`                | Locales (filtros `?categoria=&precio=&sector=`) | No |
| GET    | `/api/locales/:id`            | Detalle de un local                           | No   |
| POST   | `/api/locales`                | Crear local                                   | JWT (propietario) |
| PUT    | `/api/locales/:id`            | Editar local propio                           | JWT  |
| DELETE | `/api/locales/:id`            | Eliminar local propio                         | JWT  |
| GET    | `/api/rutas`                  | Rutas temáticas con locales incluidos         | No   |
| GET    | `/api/rutas/:id`               | Ruta con locales ordenados                    | No   |
| GET    | `/api/resenas/:local_id`      | Reseñas de un local + promedio                | No   |
| POST   | `/api/resenas`                 | Crear reseña (otorga insignias automáticas)   | JWT  |
| GET    | `/api/insignias/:user_id`     | Insignias del usuario                         | No   |
| POST   | `/api/insignias`               | Recalcular/otorgar insignias del usuario autenticado | JWT |

## Roles de usuario

- **turista**: explora el mapa, deja reseñas, desbloquea insignias.
- **propietario**: además administra sus locales desde `/dashboard`.
- **admin**: permisos ampliados sobre cualquier local (definido vía `rol` en la BD).

## Gamificación

Insignias otorgadas automáticamente al dejar reseñas:

- 🧭 **Explorador de Valdivia** — reseñas en locales de 3 sectores distintos.
- 🍺 **Catador Artesanal** — reseñas en 2 cervecerías artesanales.
- 🍲 **Sabor Valdiviano** — reseñas en 3 locales de comida tradicional.
- 🏰 **Explorador de Niebla** — reseña en 1 local del sector Niebla.

## PWA

La app es instalable en celular (manifest.json + service worker con caché de
app shell) sin necesidad de tienda de aplicaciones.

## Deploy en producción

### Backend + BD en Railway

1. Crear un proyecto en Railway y añadir un servicio PostgreSQL con la
   extensión PostGIS habilitada.
2. Ejecutar `database/schema.sql` y `database/seed.sql` contra la BD de Railway.
3. Desplegar la carpeta `server/` como servicio Node, configurando las
   variables de entorno `DATABASE_URL` (la de Railway) y `JWT_SECRET`.

### Frontend en Vercel

1. Importar la carpeta `client/` como proyecto Vercel (framework Vite).
2. Configurar la variable de entorno `VITE_API_URL` apuntando a la URL
   pública del backend en Railway (`https://<tu-backend>.railway.app/api`).
3. Deploy — Vercel entrega HTTPS automático, requisito para que el service
   worker funcione en producción.

## Coordenadas de referencia (Valdivia)

- Centro: `-39.8142, -73.2459`
- Mercado Fluvial: `-39.8175, -73.2467`
- Niebla: `-39.8823, -73.3912`
- Las Ánimas: `-39.7834, -73.2231`
