import { Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { Link } from 'react-router-dom';

function crearIconoColor(color = '#A97A3C') {
  return divIcon({
    className: '',
    html: `
      <div style="
        width: 24px; height: 24px;
        background: ${color};
        border: 2px solid #1C1B18;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: 0 2px 5px rgba(0,0,0,0.45);
      "></div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });
}

export default function MarkerPin({ local }) {
  const color = local.categoria_color || '#A97A3C';
  const posicion = [Number(local.latitud), Number(local.longitud)];

  return (
    <Marker position={posicion} icon={crearIconoColor(color)}>
      <Popup>
        <div className="min-w-[140px]">
          <p className="font-display font-bold text-[15px] normal-case tracking-normal text-hueso leading-tight">
            {local.nombre}
          </p>
          <p className="text-xs font-semibold mt-1" style={{ color }}>
            {local.categoria_icono} {local.categoria_nombre}
          </p>
          <Link
            to={`/local/${local.id}`}
            className="inline-block mt-2 text-xs font-bold text-laton hover:text-latonSoft"
          >
            Ver más →
          </Link>
        </div>
      </Popup>
    </Marker>
  );
}
