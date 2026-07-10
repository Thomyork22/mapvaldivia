const SECTORES = ['Centro', 'Las Ánimas', 'Las Gaviotas', 'Niebla'];

export default function FiltroSector({ sectorSeleccionado, onCambiar }) {
  return (
    <div>
      <h3 className="text-hueso text-sm font-bold mb-2">Sector</h3>
      <div className="flex flex-wrap gap-1.5">
        {SECTORES.map((sector) => {
          const activo = sectorSeleccionado === sector;
          return (
            <button
              key={sector}
              onClick={() => onCambiar(activo ? null : sector)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold border transition-colors ${
                activo
                  ? 'bg-laton text-ink border-laton'
                  : 'text-piedra border-white/10 hover:border-laton/50'
              }`}
            >
              {sector}
            </button>
          );
        })}
      </div>
    </div>
  );
}
