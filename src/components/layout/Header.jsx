import { useEffect, useMemo, useState } from 'react';
import logo from '../../assets/fds-logo.png';
import Button from '../ui/Button';
import Container from '../ui/Container';

export default function Header({ navigation }) {
	const sectionLinks = useMemo(
		() => navigation.map((item) => item.href).filter((href) => href.startsWith('#')),
		[navigation]
	);
	const [activeHref, setActiveHref] = useState('');
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (!sectionLinks.length) return;

			if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120) {
				setActiveHref(sectionLinks[sectionLinks.length - 1]);
				return;
			}

			let currentHref = '';
			const offset = 150;

			sectionLinks.forEach((href) => {
				const section = document.querySelector(href);
				if (!section) return;

				const top = section.getBoundingClientRect().top;
				if (top <= offset) {
					currentHref = href;
				}
			});

			setActiveHref(currentHref);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	}, [sectionLinks]);

	useEffect(() => {
		if (!menuOpen) return undefined;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [menuOpen]);

	const closeMenu = () => setMenuOpen(false);

	return (
		<header className="sticky top-0 z-50 logo-pattern-bg border-b border-[#18d7ff]/10 shadow-[0_14px_32px_rgba(2,8,23,0.28)] backdrop-blur-xl">
			<Container>
				<div className="flex items-center justify-between gap-4 py-4">
					<a
						aria-label="Back to top of page"
						className="inline-flex items-center"
						href="#top"
						onClick={closeMenu}
					>
						<img
							alt="FabDigital Studio"
							className="h-12 w-auto shrink-0 opacity-95 filter-[drop-shadow(0_0_18px_rgba(24,215,255,0.14))] sm:h-14 lg:h-20"
							src={logo}
						/>
					</a>

					<nav aria-label="Primary" className="hidden items-center gap-5 lg:gap-8 md:flex">
						{navigation.map((item) => {
							const isActive = activeHref === item.href;

							return (
								<a
									aria-current={isActive ? 'location' : undefined}
									key={item.label}
									className={`relative pb-2 text-[13px] font-medium transition lg:text-sm after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:rounded-full after:bg-linear-to-r after:from-[#18d7ff] after:to-[#ff6a00] after:transition after:duration-200 ${
										isActive
											? 'text-[#dff7ff] after:scale-100'
											: 'text-white/72 after:scale-0 hover:text-[#dff7ff] hover:after:scale-100'
									}`}
									href={item.href}
								>
									{item.label}
								</a>
							);
						})}
					</nav>

					<div className="hidden md:inline-flex">
						<Button
							href="#contact"
							className="md:px-3.5 md:py-2 md:text-[11px] lg:px-6 lg:py-3 lg:text-sm"
						>
							Start Your Project
						</Button>
					</div>

					<button
						aria-expanded={menuOpen}
						aria-label={menuOpen ? 'Close menu' : 'Open menu'}
						className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition hover:border-[#18d7ff]/30 hover:text-[#dff7ff] md:hidden"
						onClick={() => setMenuOpen((value) => !value)}
						type="button"
					>
						<svg
							aria-hidden="true"
							className="h-5 w-5"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
						>
							{menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
						</svg>
					</button>
				</div>
			</Container>

			{menuOpen ? (
				<div className="border-t border-[#18d7ff]/10 bg-[#081422]/98 px-5 pb-5 pt-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)] md:hidden">
					<nav aria-label="Mobile primary" className="flex flex-col gap-2">
						{navigation.map((item) => {
							const isActive = activeHref === item.href;

							return (
								<a
									aria-current={isActive ? 'location' : undefined}
									key={item.label}
									className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
										isActive
										? 'border border-[#18d7ff]/16 bg-[#0a7cff]/12 text-[#dff7ff]'
										: 'bg-white/5 text-white/80 hover:bg-white/8 hover:text-[#dff7ff]'
								}`}
									href={item.href}
									onClick={closeMenu}
								>
									{item.label}
								</a>
							);
						})}
					</nav>

					<Button className="mt-4 w-full justify-center" href="#contact" onClick={closeMenu}>
						Start Your Project
					</Button>
				</div>
			) : null}
		</header>
	);
}
