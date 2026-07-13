import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useFavoritos } from '../../context/FavoritosContext';

export default function BotonFavorito({ localId, className = '' }) {
  const { estaAutenticado } = useAuth();
  const { esFavorito, alternarFavorito } = useFavoritos();
  const navigate = useNavigate();
  const activo = esFavorito(localId);

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!estaAutenticado) {
      navigate('/login');
      return;
    }
    alternarFavorito(localId);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={activo ? 'Quitar de guardados' : 'Guardar local'}
      aria-pressed={activo}
      className={`flex items-center justify-center transition-all duration-200 ease-out hover:scale-110 active:scale-95 ${className}`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={activo ? '#A97A3C' : 'none'}
        stroke={activo ? '#A97A3C' : 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
      </svg>
    </button>
  );
}
