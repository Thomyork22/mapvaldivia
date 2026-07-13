import { useMemo, useState } from 'react';
import MapaBase, { CENTRO_VALDIVIA } from '../components/Mapa/MapaBase';
import MarkerPin from '../components/Mapa/MarkerPin';
import FiltroCategoria from '../components/Filtros/FiltroCategoria';
import FiltroPrecio from '../components/Filtros/FiltroPrecio';
import FiltroSector from '../components/Filtros/FiltroSector';
import TarjetaRuta from '../components/Tarjetas/TarjetaRuta';
import { useLocales } from '../hooks/useLocales';
import { useRutas } from '../hooks/useRutas';

export default function Home() {
  const [categoria, setCategoria] = useState(null);
  const [precio, setPrecio] = useState(null);
  const [sector, setSector] = useState(null);
  const [sheetAbierto, setSheetAbierto] = useState(false);

  const filtros = useMemo(() => ({ categoria, precio, sector }), [categoria, precio, sector]);
  const { locales, cargando } = useLocales(filtros);
  const { rutas } = useRutas();

  return (
    <div className="relative flex-1 min-h-0 overflow-hidden">
      <MapaBase center={CENTRO_VALDIVIA} zoom={13} className="h-full w-full">
        {locales.map((local) => (
          <MarkerPin key={local.id} local={local} />
        ))}
      </MapaBase>

      {/* Rail flotante — filtro de categoría, anclado arriba como señalética */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] max-w-[92vw] animate-fade-in">
        <div className="bg-ink/85 backdrop-blur-xl border border-white/10 rounded-2xl p-1.5 shadow-2xl shadow-black/40 overflow-x-auto scrollbar-hide">
          <FiltroCategoria categoriaSeleccionada={categoria} onCambiar={setCategoria} compact />
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
              {cargando ? '…' : `${locales.length} locales`}
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
