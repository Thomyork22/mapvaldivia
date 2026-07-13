import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import Footer from './components/UI/Footer';
import BottomNav from './components/UI/BottomNav';
import Home from './pages/Home';
import Local from './pages/Local';
import Ruta from './pages/Ruta';
import Rutas from './pages/Rutas';
import Saved from './pages/Saved';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

export default function App() {
  const { pathname } = useLocation();
  const esHome = pathname === '/';

  return (
    <div className="h-screen flex flex-col bg-ink">
      <Navbar />
      <main className="flex-1 flex flex-col min-h-0 overflow-y-auto">
        <div key={pathname} className="flex-1 flex flex-col min-h-0 animate-fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/local/:id" element={<Local />} />
            <Route path="/ruta/:id" element={<Ruta />} />
            <Route path="/rutas" element={<Rutas />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </main>
      {!esHome && <Footer />}
      <BottomNav />
    </div>
  );
}
