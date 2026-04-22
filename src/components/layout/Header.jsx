import { useEffect, useMemo, useState } from 'react';
import logo from '../../assets/fds-logo.png';
import Button from '../ui/Button';
import Container from '../ui/Container';

export default function Header({ navigation }) {
	const sectionLinks = useMemo(
		() => navigation.map((item) => item.href).filter((href) => href.startsWith('#')),
		[navigation]
	);
	const [activeHref, setActiveHref] = useState(sectionLinks[0] ?? '');

	useEffect(() => {
		const handleScroll = () => {
			if (!sectionLinks.length) return;

			if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120) {
				setActiveHref(sectionLinks[sectionLinks.length - 1]);
				return;
			}

			let currentHref = sectionLinks[0];
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

	return (
		<header className="sticky top-0 z-50 logo-pattern-bg border-b border-white/10 shadow-[0_14px_32px_rgba(2,8,23,0.28)] backdrop-blur-xl">
			<Container>
				<div className="flex items-center justify-between gap-6 py-4">
					<a className="inline-flex items-center" href="#top">
						<img
							alt="FabDigital Studio"
							className="h-12 w-auto shrink-0 opacity-95 sm:h-14 lg:h-20 filter-[drop-shadow(0_0_18px_rgba(59,130,246,0.18))]"
							src={logo}
						/>
					</a>

					<nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
						{navigation.map((item) => {
							const isActive = activeHref === item.href;

							return (
								<a
									key={item.label}
									className={`relative pb-2 text-sm font-medium transition after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:rounded-full after:bg-amber-300 after:transition after:duration-200 ${
										isActive
											? 'text-amber-200 after:scale-100'
											: 'text-white/72 after:scale-0 hover:text-amber-200 hover:after:scale-100'
									}`}
									href={item.href}
								>
									{item.label}
								</a>
							);
						})}
					</nav>

					<Button className="hidden md:inline-flex" href="#contact">
						Start Your Project
					</Button>
				</div>
			</Container>
		</header>
	);
}
