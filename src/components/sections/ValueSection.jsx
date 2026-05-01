import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import { valueIntro } from '../../data/siteContent';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function ValueSection({ points }) {
	const sectionRef = useScrollReveal({ threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

	return (
		<section id="why-us" className="section-shell" ref={sectionRef}>
			<Container>
				<GlassCard className="reveal reveal-scale relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12" data-reveal>
					<div className="absolute -left-20 top-0 h-52 w-52 rounded-full bg-[#0a7cff]/18 blur-3xl" />
					<div className="absolute -right-12 bottom-0 h-44 w-44 rounded-full bg-[#ff6a00]/14 blur-3xl" />

					<div className="relative grid gap-10 lg:grid-cols-2 lg:items-start">
						<div className="reveal reveal-left" data-reveal>
							<SectionTitle
								eyebrow={valueIntro.eyebrow}
								title={valueIntro.title}
								description={valueIntro.description}
								align="left"
							/>
						</div>

						<div className="grid gap-6 md:grid-cols-2">
							{points.map((point, index) => (
								<article
									key={point.title}
									className="reveal reveal-up rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-[#18d7ff]/16"
									data-reveal
									style={{ '--reveal-delay': `${index * 80}ms` }}
								>
									<div className="h-1.5 w-14 rounded-full bg-linear-to-r from-[#18d7ff] via-[#0a7cff] to-[#ff6a00]" />
									<h3 className="mt-5 text-lg font-semibold text-white">{point.title}</h3>
									<p className="mt-3 text-sm leading-7 text-white/70">{point.description}</p>
								</article>
							))}
						</div>
					</div>
				</GlassCard>
			</Container>
		</section>
	);
}
