const CATEGORIAS = [
  { id: 1, nombre: 'Mariscos', color: '#9C5232', icono: '🦞' },
  { id: 2, nombre: 'Cerveza Artesanal', color: '#86662E', icono: '🍺' },
  { id: 3, nombre: 'Comida Tradicional', color: '#5C6440', icono: '🍲' },
  { id: 4, nombre: 'Dulces y Café', color: '#644B52', icono: '☕' },
];

export default function FiltroCategoria({ categoriaSeleccionada, onCambiar, compact = false }) {
  return (
    <div>
      {!compact && <h3 className="text-hueso text-sm font-bold mb-2">Categoría</h3>}
      <div className="flex flex-wrap gap-1.5">
        {CATEGORIAS.map((cat) => {
          const activo = categoriaSeleccionada === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onCambiar(activo ? null : cat.id)}
              className={`flex items-center gap-1 rounded-md font-semibold border transition-colors whitespace-nowrap ${
                compact ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs'
              }`}
              style={{
                backgroundColor: activo ? cat.color : 'transparent',
                borderColor: cat.color,
                color: activo ? '#F2ECE0' : cat.color,
              }}
            >
              <span>{cat.icono}</span>
              {cat.nombre}
            </button>
          );
        })}
      </div>
    </div>
  );
}
