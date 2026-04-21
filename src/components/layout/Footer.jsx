import logo from '../../assets/fds-logo.png';
import Container from '../ui/Container';
import { footerContent } from '../../data/siteContent';

export default function Footer({ links }) {
	return (
		<footer className="logo-pattern-bg border-t border-white/8 backdrop-blur">
			<Container>
				<div className="flex flex-col gap-6 py-6 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<img
							alt="FabDigital Studio"
							className="h-12 w-auto shrink-0 opacity-90 sm:h-12 lg:h-14"
							src={logo}
						/>
						<p className="mt-3 text-sm text-white/60">{footerContent.tagline}</p>
						<div className="my-4 h-px w-40 bg-linear-to-r from-amber-300 to-cyan-400" />
					</div>

					<nav aria-label="Footer" className="flex flex-wrap gap-5 text-sm text-white/60">
						{links.map((link) => (
							<a key={link.label} className="transition hover:text-white" href={link.href}>
								{link.label}
							</a>
						))}
					</nav>
				</div>

				<div className="pb-6 text-sm text-white/50">
					© {new Date().getFullYear()} FabDigital Studio. All rights reserved.
				</div>
			</Container>
		</footer>
	);
}
