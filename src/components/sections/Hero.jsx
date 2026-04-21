import Button from '../ui/Button';
import Container from '../ui/Container';

export default function Hero({ content }) {
	return (
		<section className="relative overflow-hidden pt-8 sm:pt-10" id="top">
			{/* subtle glow (reduced) */}
			<div className="pointer-events-none absolute left-1/2 top-16 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

			<Container>
				<div className="mx-auto max-w-4xl text-center">
					{/* eyebrow */}
					<span className="mb-3 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-200">
						{content.eyebrow}
					</span>

					{/* headline (reduced) */}
					<h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
						<span className="bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
							{content.title}
						</span>
					</h1>

					{/* description */}
					<p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
						{content.description}
					</p>

					{/* CTAs */}
					<div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
						<Button href={content.primaryCta.href}>{content.primaryCta.label}</Button>
						<Button href={content.secondaryCta.href} variant="secondary">
							{content.secondaryCta.label}
						</Button>
					</div>
				</div>
			</Container>

			{/* preview (pulled up + tighter) */}
			<div className="relative mt-8">
				<div className="mx-auto w-[min(1200px,calc(100%-1.5rem))] sm:w-[min(1200px,calc(100%-3rem))]">
					<div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-3 backdrop-blur-xl">
						<div className="mb-2 flex gap-2 px-2">
							<span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
							<span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
							<span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
						</div>

						<img src={content.image} alt="Preview" className="w-full rounded-lg" />
					</div>
				</div>
			</div>

			<Container>
				<dl className="mt-6 grid gap-3 sm:grid-cols-3">
					{content.stats.map((stat) => (
						<div
							key={stat.label}
							className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur-xl"
						>
							<dd className="text-xl font-semibold text-white">{stat.value}</dd>
							<dt className="mt-1 text-xs text-white/60">{stat.label}</dt>
						</div>
					))}
				</dl>
			</Container>
		</section>
	);
}
