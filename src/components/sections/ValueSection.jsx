import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import { valueIntro } from '../../data/siteContent';

export default function ValueSection({ points }) {
	return (
		<section id="why-us" className="relative py-20 sm:py-24">
			<Container>
				<GlassCard className="relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12">
					<div className="absolute -left-20 top-0 h-52 w-52 rounded-full bg-[#7d8794]/18 blur-3xl" />
					<div className="absolute -right-12 bottom-0 h-44 w-44 rounded-full bg-[#c7a56b]/14 blur-3xl" />

					<div className="relative grid gap-10 lg:grid-cols-2 lg:items-start">
						<div>
							<SectionTitle
								eyebrow={valueIntro.eyebrow}
								title={valueIntro.title}
								description={valueIntro.description}
								align="left"
							/>
						</div>

						<div className="grid gap-6 md:grid-cols-2">
							{points.map((point) => (
								<article
									key={point.title}
									className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur transition hover:-translate-y-1"
								>
									<div className="h-1.5 w-14 rounded-full bg-linear-to-r from-[#7d8794] to-[#c7a56b]" />
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
