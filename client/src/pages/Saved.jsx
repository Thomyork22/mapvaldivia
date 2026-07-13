import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import TarjetaLocal from '../components/Tarjetas/TarjetaLocal';

export default function Saved() {
  const { estaAutenticado } = useAuth();
  const [favoritos, setFavoritos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (!estaAutenticado) return;
    api
      .get('/favoritos')
      .then(({ data }) => setFavoritos(data))
      .finally(() => setCargando(false));
  }, [estaAutenticado]);

  if (!estaAutenticado) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <div>
        <h1 className="font-display font-extrabold text-3xl normal-case tracking-normal text-hueso">
          Guardados
        </h1>
        <p className="text-piedra mt-1 text-sm">Tus locales favoritos en un solo lugar.</p>
      </div>

      {cargando ? (
        <p className="text-piedra text-center py-10">Cargando favoritos…</p>
      ) : favoritos.length === 0 ? (
        <p className="text-piedra text-center py-10">
          Aún no has guardado ningún local. Toca el ♡ en cualquier local para agregarlo aquí.
        </p>
      ) : (
        <div className="space-y-2">
          {favoritos.map((local) => (
            <TarjetaLocal key={local.id} local={local} />
          ))}
        </div>
      )}
    </div>
  );
}
