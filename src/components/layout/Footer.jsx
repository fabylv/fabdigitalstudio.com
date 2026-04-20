import logo from '/fabdigitalstudio-logo-transparent.png';

export default function Footer({ links }) {
	return (
		<footer className="logo-pattern-bg border-t border-white/10 bg-surface-soft/75 backdrop-blur space-y-4">
			<div className="site-container flex flex-col gap-6 pt-5 sm:flex-row md:items-center md:justify-between">
				<div>
					<img
						alt="FabDigital Studio"
						className="h-12 w-auto sm:h-13 lg:h-14 opacity-90 shrink-0"
						src={logo}
					/>
					<p className="mt-3 text-sm text-ink-700">
						Modern websites with personality, built to perform.
					</p>
					<div className="my-4 h-1 w-40 rounded-full bg-linear-to-r from-brand-500 to-cyan-400" />
				</div>

				<nav aria-label="Footer" className="flex flex-wrap gap-5 text-sm text-ink-600">
					{links.map((link) => (
						<a key={link.label} className="transition hover:text-brand-600" href={link.href}>
							{link.label}
						</a>
					))}
				</nav>
			</div>
			<div className="">
				<div className="site-container pb-5 text-sm text-ink-600">
					© 2026 FabDigital Studio. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
