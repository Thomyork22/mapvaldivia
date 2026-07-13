import TarjetaRuta from '../components/Tarjetas/TarjetaRuta';
import { useRutas } from '../hooks/useRutas';

export default function Rutas() {
  const { rutas, cargando } = useRutas();

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <div>
        <h1 className="font-display font-extrabold text-3xl normal-case tracking-normal text-hueso">
          Rutas temáticas
        </h1>
        <p className="text-piedra mt-1 text-sm">
          Recorridos curados por la gastronomía de Valdivia, Niebla y alrededores.
        </p>
      </div>

      {cargando ? (
        <p className="text-piedra text-center py-10">Cargando rutas…</p>
      ) : (
        <div className="space-y-2">
          {rutas.map((ruta) => (
            <TarjetaRuta key={ruta.id} ruta={ruta} />
          ))}
        </div>
      )}
    </div>
  );
}
