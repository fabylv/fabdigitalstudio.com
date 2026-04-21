import Button from '../ui/Button';
import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';

export default function Hero({ content }) {
	return (
		<section className="relative overflow-hidden pt-16 sm:pt-20" id="top">
			<Container>
				<GlassCard className="relative overflow-hidden px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
					<div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent" />
					<div className="absolute inset-x-0 top-0 h-40 bg-radial from-amber-300/15 to-transparent" />

					<div className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
						<div>
							<span className="mb-4 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-200">
								{content.eyebrow}
							</span>

							<h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-none">
								<span className="bg-linear-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
									{content.title}
								</span>
							</h1>

							<p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
								{content.description}
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button href={content.primaryCta.href}>{content.primaryCta.label}</Button>
								<Button href={content.secondaryCta.href} variant="secondary">
									{content.secondaryCta.label}
								</Button>
							</div>

							<div className="mt-8 flex flex-wrap gap-3">
								<span className="chip">AI-assisted workflow</span>
								<span className="chip">Launch-ready pages</span>
								<span className="chip">Fast performance</span>
								<span className="chip-accent">Bold modern presence</span>
							</div>

							<dl className="mt-10 grid gap-4 sm:grid-cols-3">
								{content.stats.map((stat) => (
									<div
										key={stat.label}
										className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-center"
									>
										<dd className="text-2xl font-semibold text-white">{stat.value}</dd>
										<dt className="mt-2 text-sm text-white/60">{stat.label}</dt>
									</div>
								))}
							</dl>
						</div>

						<div className="relative">
							<div className="absolute -left-4 top-10 hidden -rotate-3 lg:block">
								<div className="chip">Conversion-focused layouts</div>
							</div>

							<div className="absolute -right-4 bottom-14 hidden rotate-3 lg:block">
								<div className="chip">Clean front-end build</div>
							</div>

							<div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-500/30 via-cyan-400/20 to-orange-400/10 blur-2xl" />

							<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl sm:p-6 lg:-rotate-1">
								<img
									alt="FabDigital Studio website preview"
									className="relative w-full rounded-2xl border border-white/10 shadow-xl lg:rotate-1"
									src={content.image}
								/>
							</div>
						</div>
					</div>
				</GlassCard>
			</Container>
		</section>
	);
}
