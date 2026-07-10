import { useEffect, useState } from 'react';
import api from '../services/api';

export function useLocales(filtros = {}) {
  const [locales, setLocales] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelado = false;
    setCargando(true);

    const params = {};
    if (filtros.categoria) params.categoria = filtros.categoria;
    if (filtros.precio) params.precio = filtros.precio;
    if (filtros.sector) params.sector = filtros.sector;

    api
      .get('/locales', { params })
      .then(({ data }) => {
        if (!cancelado) setLocales(data);
      })
      .catch((err) => {
        if (!cancelado) setError(err);
      })
      .finally(() => {
        if (!cancelado) setCargando(false);
      });

    return () => {
      cancelado = true;
    };
  }, [filtros.categoria, filtros.precio, filtros.sector]);

  return { locales, cargando, error };
}
