import logo from '../../assets/fabdigitalstudio-logo.png';
import Button from '../ui/Button';

export default function Header({ navigation }) {
	return (
		<header className="logo-pattern-bg sticky top-0 z-30 border-b border-white/10 shadow-[0_12px_30px_rgba(2,8,23,0.24)] backdrop-blur-xl">
			<div className="site-container flex items-center justify-between gap-6 py-4">
				<a className="inline-flex items-center" href="#top">
					<img alt="FabDigital Studio" className="h-12 w-auto sm:h-14" src={logo} />
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

				<Button className="hidden md:inline-flex" href="#contact">
					Start Your Project
				</Button>
			</div>
		</header>
	);
}
