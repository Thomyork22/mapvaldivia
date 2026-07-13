export default function Footer() {
  return (
    <footer className="hidden sm:block bg-basalt border-t border-white/5 mt-auto flex-shrink-0">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-piedra">
        <p>
          © {new Date().getFullYear()} <span className="text-laton font-semibold">MapValdivia</span> — Gastronomía auténtica de Valdivia, Chile
        </p>
        <p className="flex items-center gap-3 font-mono text-xs">
          <span>ODS 8 · Crecimiento PYME</span>
          <span>ODS 11 · Turismo distribuido</span>
        </p>
      </div>
    </footer>
  );
}
