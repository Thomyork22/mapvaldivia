import { Link } from 'react-router-dom';

export default function TarjetaLocal({ local }) {
  const catColor = local.categoria_color || '#A97A3C';

  return (
    <Link
      to={`/local/${local.id}`}
      className="flex gap-3 bg-basalt rounded-lg p-3 border border-white/5 hover:border-laton/40 transition-colors"
    >
      <div className="relative flex-shrink-0">
        <img
          src={local.imagen_url || 'https://placehold.co/100x100?text=MapValdivia'}
          alt={local.nombre}
          className="w-16 h-16 rounded-md object-cover"
        />
        <span
          className="absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-[11px] border-2 border-ink"
          style={{ backgroundColor: catColor }}
        >
          {local.categoria_icono}
        </span>
      </div>
      <div className="min-w-0">
        <p className="font-display font-bold text-base text-hueso truncate normal-case tracking-normal">
          {local.nombre}
        </p>
        <p className="text-xs font-semibold mt-0.5" style={{ color: catColor }}>
          {local.categoria_nombre}
        </p>
        <p className="text-piedra text-xs font-mono mt-1 truncate">
          {local.sector} · {local.precio_rango}
        </p>
      </div>
    </Link>
  );
}
