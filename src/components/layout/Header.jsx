const logo = '/apple-touch-icon.png';
import Button from '../ui/Button';
import Container from '../ui/Container';

export default function Header({ navigation }) {
	return (
		<header className="sticky top-0 z-50 logo-pattern-bg  border-b border-white/10 shadow-[0_14px_32px_rgba(2,8,23,0.28)] backdrop-blur-xl">
			<Container>
				<div className="flex items-center justify-between gap-6 py-4">
					<a className="inline-flex items-center" href="#top">
						<img
							alt="FabDigital Studio"
							className="h-12 w-auto shrink-0 opacity-95 sm:h-14 lg:h-20 filter-[drop-shadow(0_0_18px_rgba(59,130,246,0.18))] "
							src={logo}
						/>
					</a>

					<nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
						{navigation.map((item) => (
							<a
								key={item.label}
								className="text-sm font-medium text-white/72 transition hover:text-amber-200"
								href={item.href}
							>
								{item.label}
							</a>
						))}
					</nav>

					<Button className="hidden md:inline-flex" href="#contact">
						Start Your Project
					</Button>
				</div>
			</Container>
		</header>
	);
}
