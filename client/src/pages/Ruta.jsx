import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import MapaBase, { CENTRO_VALDIVIA } from '../components/Mapa/MapaBase';
import MarkerPin from '../components/Mapa/MarkerPin';
import RutaLinea from '../components/Mapa/RutaLinea';

function costoAproximado(locales) {
  if (!locales.length) return '—';
  const conteo = {};
  locales.forEach((l) => {
    conteo[l.precio_rango] = (conteo[l.precio_rango] || 0) + 1;
  });
  return Object.entries(conteo).sort((a, b) => b[1] - a[1])[0][0];
}

export default function Ruta() {
  const { id } = useParams();
  const [ruta, setRuta] = useState(null);

  useEffect(() => {
    api.get(`/rutas/${id}`).then(({ data }) => setRuta(data));
  }, [id]);

  if (!ruta) {
    return <p className="text-piedra p-6 text-center">Cargando ruta…</p>;
  }

  const locales = [...ruta.locales].sort((a, b) => a.orden - b.orden);
  const centro = locales.length
    ? [Number(locales[0].latitud), Number(locales[0].longitud)]
    : CENTRO_VALDIVIA;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <div>
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: ruta.color }} />
          <h1 className="font-display font-extrabold text-3xl normal-case tracking-normal text-hueso">
            {ruta.nombre}
          </h1>
        </div>
        <p className="text-hueso mt-2">{ruta.descripcion}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-piedra font-mono">
          <span>Duración estimada: {ruta.duracion_min} min</span>
          <span>Costo aproximado: {costoAproximado(locales)}</span>
          <span>{locales.length} paradas</span>
        </div>
      </div>

      <div className="h-80 rounded-lg overflow-hidden border border-white/5">
        <MapaBase center={centro} zoom={12}>
          <RutaLinea locales={locales} color={ruta.color} />
          {locales.map((local) => (
            <MarkerPin key={local.id} local={local} />
          ))}
        </MapaBase>
      </div>

      <ol className="space-y-2">
        {locales.map((local, index) => (
          <li key={local.id} className="flex items-center gap-3 bg-basalt rounded-lg p-3 border border-white/5">
            <span
              className="w-8 h-8 flex items-center justify-center rounded-full font-mono font-bold text-ink flex-shrink-0"
              style={{ backgroundColor: ruta.color }}
            >
              {index + 1}
            </span>
            <div className="min-w-0">
              <p className="font-display font-bold text-base normal-case tracking-normal text-hueso truncate">
                {local.nombre}
              </p>
              <p className="text-piedra text-xs font-mono truncate">
                {local.sector} · {local.precio_rango}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
