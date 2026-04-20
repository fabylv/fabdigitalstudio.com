import logo from '../../assets/fabdigitialstudio-logo.png';

export default function Footer({ links }) {
  return (
    <footer className="border-t border-white/60 bg-white/75 backdrop-blur">
      <div className="site-container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <img alt="FabDigital Studio" className="h-14 w-auto sm:h-16" src={logo} />
          <p className="mt-3 text-sm text-ink-600">Modern websites designed with AI and built for performance.</p>
          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-brand-500 to-cyan-400" />
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-5 text-sm text-ink-600">
          {links.map((link) => (
            <a key={link.label} className="transition hover:text-brand-700" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/60 bg-white/50">
        <div className="site-container py-4 text-sm text-ink-600">© 2026 FabDigital Studio. All rights reserved.</div>
      </div>
    </footer>
  );
}
