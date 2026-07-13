import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import api from '../services/api';
import { useAuth } from './AuthContext';

const FavoritosContext = createContext(null);

export function FavoritosProvider({ children }) {
  const { estaAutenticado } = useAuth();
  const [favoritoIds, setFavoritoIds] = useState(new Set());

  useEffect(() => {
    if (!estaAutenticado) {
      setFavoritoIds(new Set());
      return;
    }
    api
      .get('/favoritos')
      .then(({ data }) => setFavoritoIds(new Set(data.map((local) => local.id))))
      .catch(() => {});
  }, [estaAutenticado]);

  const esFavorito = useCallback((localId) => favoritoIds.has(localId), [favoritoIds]);

  async function alternarFavorito(localId) {
    const yaEsFavorito = favoritoIds.has(localId);

    setFavoritoIds((prev) => {
      const siguiente = new Set(prev);
      if (yaEsFavorito) siguiente.delete(localId);
      else siguiente.add(localId);
      return siguiente;
    });

    try {
      if (yaEsFavorito) {
        await api.delete(`/favoritos/${localId}`);
      } else {
        await api.post(`/favoritos/${localId}`);
      }
    } catch {
      setFavoritoIds((prev) => {
        const siguiente = new Set(prev);
        if (yaEsFavorito) siguiente.add(localId);
        else siguiente.delete(localId);
        return siguiente;
      });
    }
  }

  return (
    <FavoritosContext.Provider value={{ favoritoIds, esFavorito, alternarFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  const contexto = useContext(FavoritosContext);
  if (!contexto) {
    throw new Error('useFavoritos debe usarse dentro de un FavoritosProvider');
  }
  return contexto;
}
