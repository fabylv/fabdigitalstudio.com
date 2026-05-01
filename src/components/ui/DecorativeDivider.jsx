import Container from './Container';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function DecorativeDivider() {
	const dividerRef = useScrollReveal({ threshold: 0.4, rootMargin: '0px 0px -12% 0px' });

	return (
		<div aria-hidden="true" className="relative py-3 sm:py-4" ref={dividerRef}>
			<Container>
				<div className="reveal reveal-divider flex w-full items-center gap-4" data-reveal>
					<div className="h-px flex-1 bg-linear-to-r from-transparent via-[#22f0ff]/50 to-[#49a7ff]/28" />
					<div className="relative flex h-4 w-12 items-center justify-center">
						<div className="absolute h-8 w-8 rounded-full bg-[#22f0ff]/20 blur-xl" />
						<div className="h-2 w-2 rounded-full bg-[#dff7ff] shadow-[0_0_12px_rgba(34,240,255,0.7)]" />
						<div className="absolute h-3 w-3 rounded-full border border-[#ff6a00]/50" />
					</div>
					<div className="h-px flex-1 bg-linear-to-l from-transparent via-[#ff6a00]/40 to-[#22f0ff]/22" />
				</div>
			</Container>
		</div>
	);
}
