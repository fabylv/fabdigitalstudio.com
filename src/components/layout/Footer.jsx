import logo from '/fabdigitalstudio-logo-transparent.png';

export default function Footer({ links }) {
	return (
		<footer className="logo-pattern-bg border-t border-white/10 bg-surface-soft/75 backdrop-blur">
			<div className="site-container flex flex-col gap-6 py-5 sm:flex-row md:items-center md:justify-between">
				<div>
					<img alt="FabDigital Studio" className="max-w-40 shrink-0" src={logo} />
					<p className="mt-3 text-sm text-ink-700">
						Modern websites designed with AI and built for performance.
					</p>
					<div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-brand-500 to-cyan-400" />
				</div>

				<nav aria-label="Footer" className="flex flex-wrap gap-5 text-sm text-ink-600">
					{links.map((link) => (
						<a key={link.label} className="transition hover:text-brand-600" href={link.href}>
							{link.label}
						</a>
					))}
				</nav>
			</div>
			<div className="border-t border-white/10 bg-surface-soft/50">
				<div className="site-container py-4 text-sm text-ink-600">
					© 2026 FabDigital Studio. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
