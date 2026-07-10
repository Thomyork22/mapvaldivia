import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setCargando(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Error al iniciar sesión');
    } finally {
      setCargando(false);
    }
  }

  return (
    <div className="max-w-sm mx-auto p-4 mt-10">
      <div className="bg-basalt rounded-lg p-6 border border-white/5">
        <h1 className="font-display font-extrabold text-2xl normal-case tracking-normal text-hueso mb-1">
          Iniciar sesión
        </h1>
        <p className="text-piedra text-sm mb-6">
          Bienvenido de vuelta a MapValdivia
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-ink border border-white/10 rounded-md p-2.5 text-hueso text-sm mt-1"
            />
          </div>

          {error && <p className="text-mariscos text-xs">{error}</p>}

          <button
            type="submit"
            disabled={cargando}
            className="w-full bg-laton text-ink font-bold py-2.5 rounded-md disabled:opacity-50 hover:bg-latonSoft transition-colors"
          >
            {cargando ? 'Ingresando…' : 'Ingresar'}
          </button>
        </form>

        <p className="text-piedra text-sm text-center mt-4">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="text-laton font-semibold">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}
