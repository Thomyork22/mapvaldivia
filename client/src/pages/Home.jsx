import { useMemo, useState } from 'react';
import MapaBase, { CENTRO_VALDIVIA } from '../components/Mapa/MapaBase';
import MarkerPin from '../components/Mapa/MarkerPin';
import FiltroCategoria from '../components/Filtros/FiltroCategoria';
import FiltroPrecio from '../components/Filtros/FiltroPrecio';
import FiltroSector from '../components/Filtros/FiltroSector';
import TarjetaRuta from '../components/Tarjetas/TarjetaRuta';
import { useLocales } from '../hooks/useLocales';
import { useRutas } from '../hooks/useRutas';

function IconoBusqueda() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export default function Home() {
  const [categoria, setCategoria] = useState(null);
  const [precio, setPrecio] = useState(null);
  const [sector, setSector] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [soloJoyas, setSoloJoyas] = useState(false);
  const [sheetAbierto, setSheetAbierto] = useState(false);

  const filtros = useMemo(() => ({ categoria, precio, sector }), [categoria, precio, sector]);
  const { locales, cargando } = useLocales(filtros);
  const { rutas } = useRutas();

  const localesFiltrados = useMemo(() => {
    const termino = busqueda.trim().toLowerCase();
    return locales.filter((local) => {
      if (termino && !local.nombre.toLowerCase().includes(termino)) return false;
      if (soloJoyas && !local.es_joya_oculta) return false;
      return true;
    });
  }, [locales, busqueda, soloJoyas]);

  return (
    <div className="relative flex-1 min-h-0 overflow-hidden">
      <MapaBase center={CENTRO_VALDIVIA} zoom={13} className="h-full w-full">
        {localesFiltrados.map((local) => (
          <MarkerPin key={local.id} local={local} />
        ))}
      </MapaBase>

      {/* Rail flotante — buscador + filtro de categoría, anclados arriba como señalética */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] w-[92vw] max-w-md space-y-2 animate-fade-in">
        <div className="bg-ink/85 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/40 flex items-center gap-2 px-3.5 py-2.5">
          <span className="text-piedra flex-shrink-0">
            <IconoBusqueda />
          </span>
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar un local por nombre…"
            className="bg-transparent outline-none text-sm text-hueso placeholder:text-piedra flex-1 min-w-0"
          />
          {busqueda && (
            <button
              onClick={() => setBusqueda('')}
              aria-label="Limpiar búsqueda"
              className="text-piedra hover:text-hueso transition-colors flex-shrink-0 text-lg leading-none"
            >
              ×
            </button>
          )}
        </div>
        <div className="bg-ink/85 backdrop-blur-xl border border-white/10 rounded-2xl p-1.5 shadow-2xl shadow-black/40 overflow-x-auto scrollbar-hide max-w-[92vw] flex items-center gap-1.5">
          <FiltroCategoria categoriaSeleccionada={categoria} onCambiar={setCategoria} compact />
          <button
            onClick={() => setSoloJoyas((v) => !v)}
            className={`flex items-center gap-1 rounded-md font-semibold border transition-all duration-200 ease-out whitespace-nowrap hover:scale-105 active:scale-95 px-2.5 py-1 text-[11px] flex-shrink-0 ${
              soloJoyas
                ? 'bg-laton text-ink border-laton shadow-[0_3px_10px_rgba(169,122,60,0.4)]'
                : 'text-piedra border-white/10 hover:border-laton/50'
            }`}
          >
            ⭐ Joyas Ocultas
          </button>
        </div>
      </div>

      {/* Bandeja inferior — precio, sector y rutas temáticas */}
      <div
        className={`absolute left-0 right-0 bottom-0 z-[1000] bg-basalt/95 backdrop-blur-xl border-t border-white/10 rounded-t-2xl shadow-[0_-12px_32px_rgba(0,0,0,0.45)] transition-[max-height] duration-300 ease-out overflow-hidden ${
          sheetAbierto ? 'max-h-[70vh]' : 'max-h-[76px]'
        }`}
      >
        <button
          onClick={() => setSheetAbierto((v) => !v)}
          className="w-full flex flex-col items-center pt-2.5 pb-3 px-4 group"
        >
          <span className="w-9 h-1 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors mb-2.5" />
          <div className="w-full flex items-center justify-between">
            <span className="font-display font-bold text-sm uppercase tracking-wide text-hueso">
              Rutas temáticas
            </span>
            <span className="text-piedra text-xs font-mono flex items-center gap-1.5">
              {cargando ? '…' : `${localesFiltrados.length} locales`}
              <span
                className={`inline-block transition-transform duration-200 ease-out ${sheetAbierto ? 'rotate-180' : ''}`}
              >
                ▾
              </span>
            </span>
          </div>
        </button>

        <div className="px-4 pb-6 overflow-y-auto" style={{ maxHeight: 'calc(70vh - 60px)' }}>
          <div className="grid sm:grid-cols-2 gap-6 mb-5">
            <FiltroSector sectorSeleccionado={sector} onCambiar={setSector} />
            <FiltroPrecio precioSeleccionado={precio} onCambiar={setPrecio} />
          </div>
          <div className="space-y-2">
            {rutas.map((ruta) => (
              <TarjetaRuta key={ruta.id} ruta={ruta} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
