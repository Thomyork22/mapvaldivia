import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function IconoMapa({ activo }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={activo ? 2.4 : 1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-6.1-7-11.4A7 7 0 0 1 19 9.6C19 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

function IconoRutas({ activo }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={activo ? 2.4 : 1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5.5" cy="6" r="2" />
      <circle cx="18.5" cy="18" r="2" />
      <path d="M5.5 8v3a4 4 0 0 0 4 4h5a4 4 0 0 1 4 4" strokeDasharray="3 3" />
    </svg>
  );
}

function IconoPerfil({ activo }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={activo ? 2.4 : 1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.4-3.7 4.4-5.5 7.5-5.5s6.1 1.8 7.5 5.5" />
    </svg>
  );
}

const tabClase = ({ isActive }) =>
  `flex flex-col items-center justify-center gap-0.5 flex-1 h-full min-w-[44px] transition-colors duration-200 ease-out ${
    isActive ? 'text-laton' : 'text-piedra active:text-hueso'
  }`;

export default function BottomNav() {
  const { estaAutenticado, esPropietario, usuario, logout } = useAuth();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const navigate = useNavigate();

  function handlePerfilClick() {
    if (!estaAutenticado) {
      navigate('/login');
      return;
    }
    setMenuAbierto((v) => !v);
  }

  function handleLogout() {
    logout();
    setMenuAbierto(false);
    navigate('/');
  }

  return (
    <nav className="sm:hidden relative flex-shrink-0 h-[60px] bg-basalt/95 backdrop-blur-xl border-t border-white/10 z-[1100]">
      {menuAbierto && (
        <div className="absolute bottom-full right-2 mb-2 w-52 bg-basaltHigh border border-white/10 rounded-xl shadow-2xl shadow-black/50 p-3 animate-fade-in">
          <p className="text-hueso text-sm font-semibold truncate">Hola, {usuario?.nombre}</p>
          <p className="text-piedra text-xs font-mono mt-0.5 capitalize">{usuario?.rol}</p>
          {esPropietario && (
            <NavLink
              to="/dashboard"
              onClick={() => setMenuAbierto(false)}
              className="block mt-3 text-xs font-bold text-laton hover:text-latonSoft transition-colors"
            >
              Mi Panel →
            </NavLink>
          )}
          <button
            onClick={handleLogout}
            className="w-full mt-3 px-3 py-1.5 rounded-md text-xs font-bold bg-white/5 text-hueso hover:bg-white/10 transition-colors"
          >
            Cerrar sesión
          </button>
        </div>
      )}

      <div className="flex items-stretch h-full px-2">
        <NavLink to="/" end className={tabClase}>
          {({ isActive }) => (
            <>
              <IconoMapa activo={isActive} />
              <span className="text-[10px] font-semibold">Mapa</span>
            </>
          )}
        </NavLink>
        <NavLink to="/rutas" className={tabClase}>
          {({ isActive }) => (
            <>
              <IconoRutas activo={isActive} />
              <span className="text-[10px] font-semibold">Rutas</span>
            </>
          )}
        </NavLink>
        <button
          onClick={handlePerfilClick}
          className={`flex flex-col items-center justify-center gap-0.5 flex-1 h-full min-w-[44px] transition-colors duration-200 ease-out ${
            menuAbierto ? 'text-laton' : 'text-piedra active:text-hueso'
          }`}
        >
          <IconoPerfil activo={menuAbierto} />
          <span className="text-[10px] font-semibold">Perfil</span>
        </button>
      </div>
    </nav>
  );
}
