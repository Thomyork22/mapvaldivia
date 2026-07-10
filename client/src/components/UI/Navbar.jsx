import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const { usuario, estaAutenticado, esPropietario, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }

  const linkClase = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'bg-laton text-ink' : 'text-piedra hover:text-hueso'
    }`;

  return (
    <nav className="bg-basalt border-b border-white/5 sticky top-0 z-[1000] flex-shrink-0">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display font-extrabold text-xl uppercase tracking-wide text-hueso">
            Map<span className="text-laton">Valdivia</span>
          </span>
        </Link>

        <div className="hidden sm:flex items-center gap-1">
          <NavLink to="/" className={linkClase} end>
            Mapa
          </NavLink>
          {esPropietario && (
            <NavLink to="/dashboard" className={linkClase}>
              Mi Panel
            </NavLink>
          )}
        </div>

        <div className="flex items-center gap-2">
          {estaAutenticado ? (
            <>
              <span className="hidden sm:inline text-piedra text-sm">
                Hola, {usuario.nombre}
              </span>
              <button
                onClick={handleLogout}
                className="px-3 py-2 rounded-md text-sm font-medium bg-white/5 text-hueso hover:bg-white/10 transition-colors"
              >
                Salir
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-3 py-2 rounded-md text-sm font-medium text-piedra hover:text-hueso transition-colors"
              >
                Iniciar sesión
              </Link>
              <Link
                to="/register"
                className="px-3 py-2 rounded-md text-sm font-medium bg-laton text-ink hover:bg-latonSoft transition-colors"
              >
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
