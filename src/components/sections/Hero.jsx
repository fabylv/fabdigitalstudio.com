import Button from '../ui/Button';
import Container from '../ui/Container';

export default function Hero({ content }) {
	return (
		<section className="relative overflow-hidden pt-10 sm:pt-14" id="top">
			<div className="absolute inset-x-0 top-0 h-[42rem] bg-linear-to-b from-white/6 via-transparent to-transparent" />
			<div className="absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-300/12 blur-3xl" />
			<div className="absolute left-[10%] top-28 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
			<div className="absolute right-[8%] top-24 h-72 w-72 rounded-full bg-blue-500/14 blur-3xl" />

			<div className="relative mx-auto max-w-5xl px-6 pb-10 pt-12 text-center sm:pt-16 lg:pt-20">
				<span className="mb-4 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-200">
					{content.eyebrow}
				</span>

				<h1 className="mx-auto max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[5.5rem] lg:leading-[0.95]">
					<span className="bg-linear-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
						{content.title}
					</span>
				</h1>

				<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
					{content.description}
				</p>

				<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
					<Button href={content.primaryCta.href}>{content.primaryCta.label}</Button>
					<Button href={content.secondaryCta.href} variant="secondary">
						{content.secondaryCta.label}
					</Button>
				</div>

				<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
					<span className="chip">AI-assisted workflow</span>
					<span className="chip">Launch-ready pages</span>
					<span className="chip">Fast performance</span>
					<span className="chip-accent">Bold modern presence</span>
				</div>
			</div>

			<div className="relative mt-6">
				<div className="absolute inset-x-0 top-10 h-52 bg-radial from-cyan-400/15 to-transparent blur-3xl" />
				<div className="absolute left-[8%] top-12 hidden -rotate-6 lg:block">
					<div className="chip">Conversion-focused layouts</div>
				</div>
				<div className="absolute right-[9%] top-28 hidden rotate-6 lg:block">
					<div className="chip">Clean front-end build</div>
				</div>

				<div className="mx-auto w-[min(1500px,calc(100%-1.5rem))] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/85 p-4 shadow-[0_30px_80px_rgba(2,8,23,0.45)] sm:w-[min(1500px,calc(100%-3rem))] sm:p-6 lg:p-8">
					<img
						alt="FabDigital Studio website preview"
						className="w-full rounded-[1.5rem] border border-white/10 shadow-2xl"
						src={content.image}
					/>
				</div>
			</div>

			<Container>
				<dl className="relative z-10 -mt-8 grid gap-4 sm:grid-cols-3 lg:-mt-12">
					{content.stats.map((stat) => (
						<div
							key={stat.label}
							className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-center backdrop-blur"
						>
							<dd className="text-2xl font-semibold text-white">{stat.value}</dd>
							<dt className="mt-2 text-sm text-white/60">{stat.label}</dt>
						</div>
					))}
				</dl>
			</Container>
		</section>
	);
}
