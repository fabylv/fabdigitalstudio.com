import { useEffect, useState } from 'react';
import logo from '/fabdigitalstudio-logo-transparent.png';
import Button from '../ui/Button';

export default function Header({ navigation }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		if (!isMenuOpen) {
			document.body.style.overflow = '';
			return;
		}

		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = '';
		};
	}, [isMenuOpen]);

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<header className="logo-pattern-bg sticky top-0 z-30 border-b border-white/10 shadow-[0_12px_30px_rgba(2,8,23,0.24)] backdrop-blur-xl">
			<div className="site-container flex items-center justify-between gap-6 py-4">
				<a className="inline-flex items-center" href="#top" onClick={closeMenu}>
					<img alt="FabDigital Studio" className="max-w-40" src={logo} />
				</a>

				<nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
					{navigation.map((item) => (
						<a
							key={item.label}
							className="text-sm font-medium text-ink-700 transition hover:text-brand-600"
							href={item.href}
						>
							{item.label}
						</a>
					))}
				</nav>

				<div className="flex items-center gap-3">
					<Button className="hidden md:inline-flex" href="#contact">
						Start Your Project
					</Button>

					<button
						aria-expanded={isMenuOpen}
						aria-label="Toggle navigation menu"
						className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-ink-900 md:hidden"
						type="button"
						onClick={() => setIsMenuOpen((value) => !value)}
					>
						<div className="flex flex-col gap-1.5">
							<span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
							<span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? 'opacity-0' : ''}`} />
							<span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
						</div>
					</button>
				</div>
			</div>

			{isMenuOpen ? (
				<div className="border-t border-white/10 bg-surface-soft/95 px-6 pb-6 pt-4 backdrop-blur-xl md:hidden">
					<nav aria-label="Mobile" className="flex flex-col gap-3">
						{navigation.map((item) => (
							<a
								key={item.label}
								className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-medium text-ink-800 transition hover:border-brand-500 hover:text-white"
								href={item.href}
								onClick={closeMenu}
							>
								{item.label}
							</a>
						))}

						<Button className="mt-2 w-full" href="#contact" onClick={closeMenu}>
							Start Your Project
						</Button>
					</nav>
				</div>
			) : null}
		</header>
	);
}
