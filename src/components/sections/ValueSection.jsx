import SectionIntro from '../ui/SectionIntro';

export default function ValueSection({ points }) {
	return (
		<section className="section-shell">
			<div className="site-container">
				<div className="glass-panel relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12">
					<div className="absolute -left-20 top-0 h-52 w-52 rounded-full bg-brand-600/25 blur-3xl" />
					<div className="absolute -right-12 bottom-0 h-44 w-44 rounded-full bg-accent-400/20 blur-3xl" />
					<div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
						<div>
							<SectionIntro
								kicker="Why choose us"
								title="A sharper digital process, built for today’s clients"
								description="FabDigital Studio blends strategy, modern front-end execution, and AI-assisted speed to create websites that feel current, clear, and confidently professional."
							/>
						</div>

						<div className="grid gap-6 md:grid-cols-2">
							{points.map((point) => (
								<article
									key={point.title}
									className="hover-lift rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_16px_45px_rgba(2,8,23,0.24)] backdrop-blur"
								>
									<div className="h-1.5 w-14 rounded-full bg-linear-to-r from-brand-500 to-cyan-400" />
									<h3 className="mt-5 text-lg font-semibold text-ink-950">{point.title}</h3>
									<p className="mt-3 text-sm leading-7 text-ink-600">{point.description}</p>
								</article>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
