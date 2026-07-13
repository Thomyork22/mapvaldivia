import { Link } from 'react-router-dom';

export default function TarjetaRuta({ ruta }) {
  const totalLocales = ruta.locales?.length || 0;

  return (
    <Link
      to={`/ruta/${ruta.id}`}
      className="flex items-center gap-3 bg-basaltHigh rounded-lg p-3 border border-white/5 hover:border-laton/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all duration-200 ease-out"
    >
      <span
        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: ruta.color || '#A97A3C' }}
      />
      <div className="min-w-0 flex-1">
        <p className="font-display font-bold text-base text-hueso normal-case tracking-normal truncate">
          {ruta.nombre}
        </p>
        <p className="text-piedra text-xs font-mono mt-0.5">
          {ruta.duracion_min} min · {totalLocales} paradas
        </p>
      </div>
    </Link>
  );
}
