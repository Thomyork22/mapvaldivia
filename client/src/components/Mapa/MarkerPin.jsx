import { Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { Link } from 'react-router-dom';

function crearIconoColor(color = '#A97A3C', esJoyaOculta = false) {
  return divIcon({
    className: '',
    html: `
      <div style="position:relative;width:26px;height:26px;">
        <div class="pin-marker" style="background:${color};"></div>
        ${esJoyaOculta ? '<div class="pin-star">⭐</div>' : ''}
      </div>
    `,
    iconSize: [26, 26],
    iconAnchor: [13, 26],
    popupAnchor: [0, -26],
  });
}

export default function MarkerPin({ local }) {
  const color = local.categoria_color || '#A97A3C';
  const posicion = [Number(local.latitud), Number(local.longitud)];

  return (
    <Marker position={posicion} icon={crearIconoColor(color, local.es_joya_oculta)}>
      <Popup minWidth={190} maxWidth={230}>
        <div className="min-w-[180px]">
          <div className="h-1.5" style={{ backgroundColor: color }} />
          <div className="px-3.5 pt-2.5 pb-3">
            <p className="font-display font-bold text-[20px] normal-case tracking-normal text-hueso leading-tight">
              {local.nombre}
            </p>
            <span
              className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded-full text-[11px] font-bold"
              style={{ backgroundColor: `${color}26`, color }}
            >
              {local.categoria_icono} {local.categoria_nombre}
            </span>
            <p className="text-piedra text-xs font-mono mt-2">
              {local.sector} {local.precio_rango ? `· ${local.precio_rango}` : ''}
            </p>
            {local.es_joya_oculta && (
              <span className="inline-flex items-center gap-1 mt-1.5 text-[11px] font-bold text-laton">
                ⭐ Joya Oculta
              </span>
            )}
            <Link
              to={`/local/${local.id}`}
              className="inline-flex items-center gap-1 mt-3 px-3 py-1.5 rounded-full text-xs font-bold text-ink transition-all duration-200 ease-out hover:scale-105 hover:brightness-110"
              style={{ backgroundColor: color }}
            >
              Ver local →
            </Link>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
