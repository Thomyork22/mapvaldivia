import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const { registrar } = useAuth();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('turista');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setCargando(true);
    try {
      await registrar(nombre, email, password, rol);
      navigate(rol === 'propietario' ? '/dashboard' : '/');
    } catch (err) {
      setError(err.response?.data?.error || 'Error al registrarse');
    } finally {
      setCargando(false);
    }
  }

  return (
    <div className="max-w-sm mx-auto p-4 mt-10">
      <div className="bg-basalt rounded-lg p-6 border border-white/5">
        <h1 className="font-display font-extrabold text-2xl normal-case tracking-normal text-hueso mb-1">
          Crear cuenta
        </h1>
        <p className="text-piedra text-sm mb-6">
          Únete a la comunidad gastronómica de Valdivia
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-piedra text-xs">Nombre</label>
            <input
              type="text"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full bg-ink border border-white/10 rounded-md p-2.5 text-hueso text-sm mt-1"
            />
          </div>
          <div>
            <label className="text-piedra text-xs">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-ink border border-white/10 rounded-md p-2.5 text-hueso text-sm mt-1"
            />
          </div>
          <div>
            <label className="text-piedra text-xs">Contraseña</label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-ink border border-white/10 rounded-md p-2.5 text-hueso text-sm mt-1"
            />
          </div>
          <div>
            <label className="text-piedra text-xs">Tipo de cuenta</label>
            <div className="flex gap-2 mt-1">
              <button
                type="button"
                onClick={() => setRol('turista')}
                className={`flex-1 py-2 rounded-md text-sm font-semibold border ${
                  rol === 'turista'
                    ? 'bg-laton text-ink border-laton'
                    : 'text-piedra border-white/10'
                }`}
              >
                Turista
              </button>
              <button
                type="button"
                onClick={() => setRol('propietario')}
                className={`flex-1 py-2 rounded-md text-sm font-semibold border ${
                  rol === 'propietario'
                    ? 'bg-laton text-ink border-laton'
                    : 'text-piedra border-white/10'
                }`}
              >
                Propietario PYME
              </button>
            </div>
          </div>

          {error && <p className="text-mariscos text-xs">{error}</p>}

          <button
            type="submit"
            disabled={cargando}
            className="w-full bg-laton text-ink font-bold py-2.5 rounded-md disabled:opacity-50 hover:bg-latonSoft transition-colors"
          >
            {cargando ? 'Creando cuenta…' : 'Registrarse'}
          </button>
        </form>

        <p className="text-piedra text-sm text-center mt-4">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="text-laton font-semibold">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
