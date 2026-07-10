import { Polyline } from 'react-leaflet';

export default function RutaLinea({ locales, color = '#A97A3C' }) {
  const ordenados = [...locales].sort((a, b) => (a.orden ?? 0) - (b.orden ?? 0));
  const posiciones = ordenados.map((local) => [Number(local.latitud), Number(local.longitud)]);

  if (posiciones.length < 2) return null;

  return (
    <Polyline
      positions={posiciones}
      pathOptions={{ color, weight: 4, opacity: 0.85, dashArray: '6 6' }}
    />
  );
}
