export default function Footer({ links }) {
  return (
    <footer className="border-t border-line bg-white">
      <div className="site-container flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold text-ink-950">FabDigital Studio</p>
          <p className="mt-2 text-sm text-ink-600">Modern websites designed with AI and built for performance.</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-5 text-sm text-ink-600">
          {links.map((link) => (
            <a key={link.label} className="transition hover:text-ink-950" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-line/80 bg-surface-soft">
        <div className="site-container py-4 text-sm text-ink-600">© 2026 FabDigital Studio. All rights reserved.</div>
      </div>
    </footer>
  );
}
