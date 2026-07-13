const PRECIOS = ['$', '$$', '$$$'];

export default function FiltroPrecio({ precioSeleccionado, onCambiar }) {
  return (
    <div>
      <h3 className="text-hueso text-sm font-bold mb-2">Precio</h3>
      <div className="flex gap-1.5 font-mono">
        {PRECIOS.map((precio) => {
          const activo = precioSeleccionado === precio;
          return (
            <button
              key={precio}
              onClick={() => onCambiar(activo ? null : precio)}
              className={`px-3 py-1.5 rounded-md text-xs font-bold border transition-all duration-200 ease-out hover:scale-105 active:scale-95 ${
                activo
                  ? 'bg-laton text-ink border-laton shadow-[0_3px_10px_rgba(169,122,60,0.4)]'
                  : 'text-piedra border-white/10 hover:border-laton/50'
              }`}
            >
              {precio}
            </button>
          );
        })}
      </div>
    </div>
  );
}
