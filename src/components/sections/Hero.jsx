import Button from '../ui/Button';

export default function Hero({ content }) {
	return (
		<section className="section-shell relative overflow-hidden pt-16 sm:pt-20" id="top">
			<div className="site-container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
				<div className="relative z-10 animate-rise">
					<span className="section-kicker">{content.eyebrow}</span>
					<h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl lg:text-[4.4rem] lg:leading-[0.98]">
						<span className="block gradient-text">{content.title}</span>
					</h1>
					<p className="mt-6 max-w-2xl text-lg leading-8 text-ink-600">{content.description}</p>
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
							<div key={stat.label} className="glass-panel rounded-2xl px-5 py-5">
								<dt className="text-sm font-medium text-ink-600">{stat.label}</dt>
								<dd className="mt-2 text-2xl font-semibold text-ink-950">{stat.value}</dd>
							</div>
						))}
					</dl>
				</div>

				<div className="relative animate-rise">
					<div className="absolute -left-4 top-10 hidden animate-float-slow rotate-[-4deg] lg:block">
						<div className="chip">Conversion-focused layouts</div>
					</div>
					<div className="absolute -right-4 bottom-14 hidden animate-float-delayed rotate-[4deg] lg:block">
						<div className="chip">Clean front-end build</div>
					</div>
					<div className="absolute inset-0 animate-glow rounded-[2.25rem] bg-[radial-gradient(circle_at_top_left,rgba(47,123,255,0.30),transparent_36%),radial-gradient(circle_at_82%_22%,rgba(53,214,230,0.24),transparent_30%),radial-gradient(circle_at_68%_84%,rgba(255,106,61,0.16),transparent_20%)] blur-2xl" />
					<div className="glass-panel soft-grid relative overflow-hidden p-4 sm:p-6 lg:rotate-[-1.5deg]">
						<div className="absolute inset-x-8 top-6 h-24 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.16),transparent_68%)] blur-2xl" />
						<img
							alt="FabDigital Studio website preview"
							className="relative w-full rounded-2xl border border-white/10 shadow-[0_28px_70px_rgba(2,8,23,0.28)] lg:rotate-[1.5deg]"
							src={content.image}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
