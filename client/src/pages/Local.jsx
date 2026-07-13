import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import MapaBase from '../components/Mapa/MapaBase';
import MarkerPin from '../components/Mapa/MarkerPin';
import BotonFavorito from '../components/UI/BotonFavorito';

function IconoNavegacion() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 11 18-8-8 18-2.5-7.5L3 11Z" />
    </svg>
  );
}

function IconoCompartir() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M8.2 10.7 15.8 6.3M8.2 13.3l7.6 4.4" />
    </svg>
  );
}

function Estrellas({ valor, alCambiar }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => alCambiar?.(n)}
          className={`text-2xl leading-none ${
            n <= valor ? 'text-laton' : 'text-white/15'
          } ${alCambiar ? 'cursor-pointer' : ''}`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default function Local() {
  const { id } = useParams();
  const { estaAutenticado } = useAuth();

  const [local, setLocal] = useState(null);
  const [resenas, setResenas] = useState([]);
  const [promedio, setPromedio] = useState(0);
  const [puntuacion, setPuntuacion] = useState(5);
  const [comentario, setComentario] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [toast, setToast] = useState('');

  async function cargarDatos() {
    const [{ data: localData }, { data: resenasData }] = await Promise.all([
      api.get(`/locales/${id}`),
      api.get(`/resenas/${id}`),
    ]);
    setLocal(localData);
    setResenas(resenasData.resenas);
    setPromedio(resenasData.promedio);
  }

  useEffect(() => {
    cargarDatos();
  }, [id]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(''), 2500);
    return () => clearTimeout(timer);
  }, [toast]);

  async function handleCompartir() {
    const datos = {
      title: local.nombre,
      text: local.descripcion?.slice(0, 120) || `Descubre ${local.nombre} en MapValdivia`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(datos);
      } catch {
        // el usuario canceló el share, no hacer nada
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setToast('¡Enlace copiado!');
    } catch {
      setToast('No se pudo copiar el enlace');
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setEnviando(true);
    setMensaje('');
    try {
      const { data } = await api.post('/resenas', {
        local_id: Number(id),
        puntuacion,
        comentario,
      });
      setComentario('');
      setPuntuacion(5);
      await cargarDatos();
      if (data.insigniasOtorgadas?.length) {
        setMensaje(`¡Nueva insignia desbloqueada: ${data.insigniasOtorgadas.map((i) => i.tipo).join(', ')}!`);
      } else {
        setMensaje('¡Gracias por tu reseña!');
      }
    } catch (error) {
      setMensaje(error.response?.data?.error || 'Error al enviar la reseña');
    } finally {
      setEnviando(false);
    }
  }

  if (!local) {
    return <p className="text-piedra p-6 text-center">Cargando local…</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <div className="relative">
        <img
          src={local.imagen_url || 'https://placehold.co/900x400?text=MapValdivia'}
          alt={local.nombre}
          className="w-full h-64 object-cover rounded-lg"
        />
        <span
          className="absolute -bottom-5 left-5 w-14 h-14 rounded-full flex items-center justify-center text-2xl border-4 border-ink shadow-lg"
          style={{ backgroundColor: local.categoria_color }}
        >
          {local.categoria_icono}
        </span>
      </div>

      <div className="pt-2">
        <div className="flex items-center gap-2 flex-wrap">
          <h1 className="font-display font-extrabold text-3xl normal-case tracking-normal text-hueso">
            {local.nombre}
          </h1>
          {local.verificado && (
            <span className="text-xs bg-laton text-ink px-2 py-0.5 rounded-md font-bold">
              Verificado ✓
            </span>
          )}
          <div className="ml-auto flex items-center gap-3">
            <button
              type="button"
              onClick={handleCompartir}
              aria-label="Compartir"
              className="text-piedra hover:text-hueso transition-all duration-200 ease-out hover:scale-110 active:scale-95"
            >
              <IconoCompartir />
            </button>
            <BotonFavorito localId={local.id} className="text-piedra" />
          </div>
        </div>
        <p className="text-sm font-semibold mt-1" style={{ color: local.categoria_color }}>
          {local.categoria_nombre}
        </p>
        <p className="text-hueso mt-3 leading-relaxed">{local.descripcion}</p>

        <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mt-4 text-sm text-piedra font-mono">
          <p>{local.direccion} · {local.sector}</p>
          <p>Precio {local.precio_rango}</p>
          {local.telefono && <p>{local.telefono}</p>}
          {local.instagram && <p>{local.instagram}</p>}
        </div>

        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${local.latitud},${local.longitud}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full flex items-center justify-center gap-2 bg-laton text-ink font-bold text-sm py-3 rounded-lg shadow-lg shadow-laton/20 hover:bg-latonSoft hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out"
        >
          <IconoNavegacion />
          Cómo llegar
        </a>
      </div>

      {local.historia && (
        <section className="bg-basalt rounded-lg p-4 border border-white/5">
          <h2 className="font-display font-bold text-xl uppercase tracking-wide text-hueso mb-3">
            Nuestra Historia
          </h2>
          <p className="text-hueso leading-relaxed whitespace-pre-line">{local.historia}</p>
        </section>
      )}

      <div className="h-64 rounded-lg overflow-hidden border border-white/5">
        <MapaBase center={[Number(local.latitud), Number(local.longitud)]} zoom={15}>
          <MarkerPin local={local} />
        </MapaBase>
      </div>

      <section className="bg-basalt rounded-lg p-4 border border-white/5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-bold text-xl uppercase tracking-wide text-hueso">Reseñas</h2>
          <div className="flex items-center gap-2">
            <Estrellas valor={Math.round(promedio)} />
            <span className="text-piedra text-sm font-mono">
              {promedio} ({resenas.length})
            </span>
          </div>
        </div>

        {estaAutenticado ? (
          <form onSubmit={handleSubmit} className="space-y-3 mb-6 border-b border-white/5 pb-6">
            <Estrellas valor={puntuacion} alCambiar={setPuntuacion} />
            <textarea
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              placeholder="Cuéntanos tu experiencia…"
              className="w-full bg-ink border border-white/10 rounded-md p-3 text-hueso text-sm resize-none"
              rows={3}
            />
            <button
              type="submit"
              disabled={enviando}
              className="bg-laton text-ink font-bold text-sm px-4 py-2 rounded-md disabled:opacity-50 hover:bg-latonSoft transition-colors"
            >
              {enviando ? 'Enviando…' : 'Publicar reseña'}
            </button>
            {mensaje && <p className="text-laton text-xs">{mensaje}</p>}
          </form>
        ) : (
          <p className="text-piedra text-sm mb-6">
            Inicia sesión para dejar tu reseña.
          </p>
        )}

        <div className="space-y-4">
          {resenas.map((resena) => (
            <div key={resena.id} className="border-b border-white/5 pb-3 last:border-0">
              <div className="flex items-center justify-between">
                <p className="text-hueso font-semibold text-sm">{resena.usuario_nombre}</p>
                <Estrellas valor={resena.puntuacion} />
              </div>
              {resena.comentario && (
                <p className="text-piedra text-sm mt-1">{resena.comentario}</p>
              )}
            </div>
          ))}
          {resenas.length === 0 && (
            <p className="text-piedra text-sm">Aún no hay reseñas para este local.</p>
          )}
        </div>
      </section>

      {toast && (
        <div className="fixed bottom-24 sm:bottom-6 left-1/2 -translate-x-1/2 z-[1200] bg-basaltHigh border border-white/10 text-hueso text-sm font-semibold px-4 py-2.5 rounded-full shadow-2xl shadow-black/50 animate-fade-in">
          {toast}
        </div>
      )}
    </div>
  );
}
