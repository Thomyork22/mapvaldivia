import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const CENTRO_VALDIVIA = [-39.8142, -73.2459];

export default function MapaBase({
  center = CENTRO_VALDIVIA,
  zoom = 13,
  className = 'h-full w-full',
  children,
}) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom
      className={className}
      style={{ background: '#1C1B18' }}
    >
      {/* Tiles oscuras (CARTO Dark Matter) — tiles claras de OSM sobre un
          chrome oscuro es justo el choque que este rediseño busca evitar. */}
      <TileLayer
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {children}
    </MapContainer>
  );
}
