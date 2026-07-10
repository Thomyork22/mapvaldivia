const ICONOS_INSIGNIAS = {
  'Explorador de Valdivia': '🧭',
  'Catador Artesanal': '🍺',
  'Sabor Valdiviano': '🍲',
  'Explorador de Niebla': '🏰',
};

export default function InsigniaCard({ insignia, bloqueada = false }) {
  const icono = ICONOS_INSIGNIAS[insignia.tipo] || '🏅';

  return (
    <div className="flex flex-col items-center gap-2 w-28 text-center">
      <div
        className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl border-[3px] ${
          bloqueada
            ? 'bg-basalt border-basaltHigh grayscale opacity-35'
            : 'bg-laton border-basaltHigh'
        }`}
        style={!bloqueada ? { outline: '1px solid rgba(232,228,218,0.16)', outlineOffset: '3px' } : undefined}
      >
        {icono}
      </div>
      <p className="text-hueso text-xs font-bold leading-tight">{insignia.tipo}</p>
      {!bloqueada && insignia.obtenida_at && (
        <p className="text-piedra text-[11px] font-mono">
          {new Date(insignia.obtenida_at).toLocaleDateString('es-CL')}
        </p>
      )}
    </div>
  );
}
