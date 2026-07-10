import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import localesRoutes from './routes/locales.js';
import rutasRoutes from './routes/rutas.js';
import resenasRoutes from './routes/resenas.js';
import insigniasRoutes from './routes/insignias.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ estado: 'ok', servicio: 'MapValdivia API' });
});

app.use('/api/auth', authRoutes);
app.use('/api/locales', localesRoutes);
app.use('/api/rutas', rutasRoutes);
app.use('/api/resenas', resenasRoutes);
app.use('/api/insignias', insigniasRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`MapValdivia API escuchando en el puerto ${PORT}`);
});
