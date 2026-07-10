import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import { CENTRO_VALDIVIA } from '../components/Mapa/MapaBase';

const CATEGORIAS = [
  { id: 1, nombre: 'Mariscos' },
  { id: 2, nombre: 'Cerveza Artesanal' },
  { id: 3, nombre: 'Comida Tradicional' },
  { id: 4, nombre: 'Dulces y Café' },
];
const SECTORES = ['Centro', 'Las Ánimas', 'Las Gaviotas', 'Niebla'];
const PRECIOS = ['$', '$$', '$$$'];

const LOCAL_VACIO = {
  nombre: '',
  descripcion: '',
  direccion: '',
  sector: SECTORES[0],
  latitud: CENTRO_VALDIVIA[0],
  longitud: CENTRO_VALDIVIA[1],
  categoria_id: CATEGORIAS[0].id,
  precio_rango: PRECIOS[0],
  telefono: '',
  instagram: '',
  imagen_url: '',
};

export default function Dashboard() {
  const { usuario, esPropietario } = useAuth();
  const [misLocales, setMisLocales] = useState([]);
  const [form, setForm] = useState(LOCAL_VACIO);
  const [editandoId, setEditandoId] = useState(null);
  const [mensaje, setMensaje] = useState('');
  const [estadisticas, setEstadisticas] = useState({});

  async function cargarMisLocales() {
    const { data } = await api.get('/locales');
    const propios = data.filter((l) => l.usuario_id === usuario.id);
    setMisLocales(propios);

    const stats = {};
    await Promise.all(
      propios.map(async (local) => {
        const { data: resenasData } = await api.get(`/resenas/${local.id}`);
        stats[local.id] = resenasData;
      })
    );
    setEstadisticas(stats);
  }

  useEffect(() => {
    if (esPropietario) cargarMisLocales();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [esPropietario]);

  if (!esPropietario) {
    return <Navigate to="/" replace />;
  }

  function handleChange(campo, valor) {
    setForm((prev) => ({ ...prev, [campo]: valor }));
  }

  function editarLocal(local) {
    setEditandoId(local.id);
    setForm({
      nombre: local.nombre,
      descripcion: local.descripcion || '',
      direccion: local.direccion || '',
      sector: local.sector || SECTORES[0],
      latitud: local.latitud,
      longitud: local.longitud,
      categoria_id: local.categoria_id,
      precio_rango: local.precio_rango || PRECIOS[0],
      telefono: local.telefono || '',
      instagram: local.instagram || '',
      imagen_url: local.imagen_url || '',
    });
  }

  function cancelarEdicion() {
    setEditandoId(null);
    setForm(LOCAL_VACIO);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMensaje('');
    try {
      if (editandoId) {
        await api.put(`/locales/${editandoId}`, form);
        setMensaje('Local actualizado correctamente.');
      } else {
        await api.post('/locales', form);
        setMensaje('Local creado correctamente.');
      }
      cancelarEdicion();
      await cargarMisLocales();
    } catch (error) {
      setMensaje(error.response?.data?.error || 'Error al guardar el local');
    }
  }

  const totalResenas = Object.values(estadisticas).reduce((acc, s) => acc + (s.total || 0), 0);
  const promedioGeneral =
    misLocales.length === 0
      ? 0
      : (
          Object.values(estadisticas).reduce((acc, s) => acc + (s.promedio || 0), 0) /
          (Object.values(estadisticas).filter((s) => s.total > 0).length || 1)
        ).toFixed(1);

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6">
      <h1 className="font-display font-extrabold text-2xl normal-case tracking-normal text-hueso">
        Panel de {usuario.nombre}
      </h1>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-basalt rounded-lg p-4 border border-white/5 text-center">
          <p className="text-2xl font-bold text-laton font-mono">{misLocales.length}</p>
          <p className="text-piedra text-xs mt-1">Locales publicados</p>
        </div>
        <div className="bg-basalt rounded-lg p-4 border border-white/5 text-center">
          <p className="text-2xl font-bold text-laton font-mono">{totalResenas}</p>
          <p className="text-piedra text-xs mt-1">Reseñas recibidas</p>
        </div>
        <div className="bg-basalt rounded-lg p-4 border border-white/5 text-center">
          <p className="text-2xl font-bold text-laton font-mono">{promedioGeneral || '—'}</p>
          <p className="text-piedra text-xs mt-1">Puntuación promedio</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <section className="bg-basalt rounded-lg p-4 border border-white/5">
          <h2 className="font-display font-bold text-lg uppercase tracking-wide text-hueso mb-4">
            {editandoId ? 'Editar local' : 'Crear nuevo local'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              placeholder="Nombre"
              required
              value={form.nombre}
              onChange={(e) => handleChange('nombre', e.target.value)}
              className="w-full bg-ink border border-white/10 rounded-md p-2.5 text-hueso text-sm"
            />
            <textarea
              placeholder="Descripción"
              rows={2}
              value={form.descripcion}
              onChange={(e) => handleChange('descripcion', e.target.value)}
              className="w-full bg-ink border border-white/10 rounded-md p-2.5 text-hueso text-sm resize-none"
            />
            <input
              placeholder="Dirección"
              value={form.direccion}
              onChange={(e) => handleChange('direccion', e.target.value)}
              className="w-full bg-ink border border-white/10 rounded-md p-2.5 text-hueso text-sm"
            />

            <div className="grid grid-cols-2 gap-3">
              <select
                value={form.categoria_id}
                onChange={(e) => handleChange('categoria_id', Number(e.target.value))}
                className="w-full bg-ink border border-white/10 rounded-md p-2.5 text-hueso text-sm"
              >
                {CATEGORIAS.map((c) => (
                  <option key={c.id} value={c.id}>{c.nombre}</option>
                ))}
              </select>
              <select
                value={form.sector}
                onChange={(e) => handleChange('sector', e.target.value)}
                className="w-full bg-ink border border-white/10 rounded-md p-2.5 text-hueso text-sm"
              >
                {SECTORES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <select
                value={form.precio_rango}
                onChange={(e) => handleChange('precio_rango', e.target.value)}
                className="w-full bg-ink border border-white/10 rounded-md p-2.5 text-hueso text-sm"
              >
                {PRECIOS.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              <input
                type="number"
                step="0.00000001"
                placeholder="Latitud"
                required
                value={form.latitud}
                onChange={(e) => handleChange('latitud', e.target.value)}
                className="w-full bg-ink border border-white/10 rounded-md p-2.5 text-hueso text-sm"
              />
              <input
                type="number"
                step="0.00000001"
                placeholder="Longitud"
                required
                value={form.longitud}
                onChange={(e) => handleChange('longitud', e.target.value)}
                className="w-full bg-ink border border-white/10 rounded-md p-2.5 text-hueso text-sm"
              />
            </div>

            <input
              placeholder="Teléfono"
              value={form.telefono}
              onChange={(e) => handleChange('telefono', e.target.value)}
              className="w-full bg-ink border border-white/10 rounded-md p-2.5 text-hueso text-sm"
            />
            <input
              placeholder="Instagram (@usuario)"
              value={form.instagram}
              onChange={(e) => handleChange('instagram', e.target.value)}
              className="w-full bg-ink border border-white/10 rounded-md p-2.5 text-hueso text-sm"
            />
            <input
              placeholder="URL de imagen"
              value={form.imagen_url}
              onChange={(e) => handleChange('imagen_url', e.target.value)}
              className="w-full bg-ink border border-white/10 rounded-md p-2.5 text-hueso text-sm"
            />

            {mensaje && <p className="text-laton text-xs">{mensaje}</p>}

            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 bg-laton text-ink font-bold py-2.5 rounded-md hover:bg-latonSoft transition-colors"
              >
                {editandoId ? 'Guardar cambios' : 'Crear local'}
              </button>
              {editandoId && (
                <button
                  type="button"
                  onClick={cancelarEdicion}
                  className="px-4 rounded-md text-piedra border border-white/10"
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-lg uppercase tracking-wide text-hueso">Mis locales</h2>
          {misLocales.length === 0 && (
            <p className="text-piedra text-sm">Aún no has publicado ningún local.</p>
          )}
          {misLocales.map((local) => (
            <div key={local.id} className="bg-basalt rounded-lg p-4 border border-white/5">
              <div className="flex items-center justify-between">
                <p className="font-display font-bold text-base normal-case tracking-normal text-hueso">
                  {local.nombre}
                </p>
                <button
                  onClick={() => editarLocal(local)}
                  className="text-laton text-xs font-bold"
                >
                  Editar
                </button>
              </div>
              <p className="text-piedra text-xs font-mono mt-1">
                {local.sector} · {local.precio_rango}
              </p>
              <p className="text-piedra text-xs font-mono mt-1">
                {estadisticas[local.id]?.promedio || 0}★ ({estadisticas[local.id]?.total || 0} reseñas)
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
