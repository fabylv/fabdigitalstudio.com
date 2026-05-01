import Button from '../ui/Button';
import Container from '../ui/Container';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function CTASection({ content }) {
	const sectionRef = useScrollReveal({ threshold: 0.22, rootMargin: '0px 0px -10% 0px' });

	return (
		<section className="section-shell" ref={sectionRef}>
			<Container>
				<div className="reveal reveal-scale relative overflow-hidden rounded-3xl border border-[#18d7ff]/10 bg-linear-to-br from-[#07111f] via-[#0a1f3d] via-[55%] to-[#102e58] px-6 py-12 text-white shadow-2xl sm:px-10 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-10" data-reveal>
					<div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-[#18d7ff]/16 blur-3xl" />
					<div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#ff6a00]/22 blur-3xl" />
					<div className="absolute right-28 top-10 h-24 w-24 rounded-full bg-[#0a7cff]/18 blur-3xl" />

					<div className="reveal reveal-up relative max-w-2xl" data-reveal>
						<span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-semibold text-white">
							{content.eyebrow}
						</span>

						<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
							{content.title}
						</h2>

						<p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
							{content.description}
						</p>
					</div>

					<div className="reveal reveal-right relative mt-8 lg:mt-0" data-reveal style={{ '--reveal-delay': '120ms' }}>
						<Button
							className="shadow-[0_16px_40px_rgba(255,106,0,0.18)]"
							href={content.action.href}
						>
							{content.action.label}
						</Button>
					</div>
				</div>
			</Container>
		</section>
	);
}
