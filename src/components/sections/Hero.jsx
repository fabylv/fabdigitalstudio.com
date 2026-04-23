import Button from '../ui/Button';
import Container from '../ui/Container';

export default function Hero({ content }) {
	return (
		<section className="relative overflow-hidden pb-7 pt-8 sm:pb-8 sm:pt-10" id="top">
			<div className="pointer-events-none absolute inset-x-0 top-0 h-136 bg-linear-to-b from-white/6 via-transparent to-transparent" />
			<div className="pointer-events-none absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl" />
			<div className="pointer-events-none absolute left-[8%] top-24 h-56 w-56 rounded-full bg-cyan-400/8 blur-3xl" />
			<div className="pointer-events-none absolute right-[10%] top-16 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

			<Container>
				<div className="mx-auto max-w-5xl text-center">
					<span className="mb-3 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-200">
						{content.eyebrow}
					</span>

					<h1 className="mx-auto max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-[2.85rem] md:text-[3.2rem] lg:text-7xl lg:leading-[0.95]">
						<span className="bg-linear-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
							{content.title}
						</span>
					</h1>

					<p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
						{content.description}
					</p>

					<div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
						<Button href={content.primaryCta.href}>{content.primaryCta.label}</Button>
						<Button href={content.secondaryCta.href} variant="secondary">
							{content.secondaryCta.label}
						</Button>
					</div>

					<div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
						<span className="chip">AI-assisted workflow</span>
						<span className="chip">Redesigns + cleanups</span>
						<span className="chip">Fast performance</span>
						<span className="chip-accent">Built to stand out</span>
					</div>
				</div>
				<div className="relative mt-8 sm:mt-10">
					<div className="pointer-events-none absolute inset-x-0 top-8 h-48 bg-radial from-cyan-400/14 to-transparent blur-3xl" />
					<div className="pointer-events-none absolute left-[8%] top-14 hidden -rotate-6 lg:block">
						<div className="chip">Mobile-friendly layouts</div>
					</div>
					<div className="pointer-events-none absolute right-[9%] top-24 hidden -rotate-6 lg:block">
						<div className="chip">Clean, modern polish</div>
					</div>

					<div className="mx-auto w-[min(1480px,calc(100%-1rem))] sm:w-[min(1480px,calc(100%-2.5rem))]">
						<div className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-950/85 p-3 shadow-[0_30px_80px_rgba(2,8,23,0.40)] backdrop-blur-xl sm:p-5 lg:p-6">
							<div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-white/6 to-transparent" />
							<div className="relative mb-3 flex items-center justify-between px-2 sm:px-3">
								<div className="flex gap-2">
									<span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
									<span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
									<span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
								</div>
								<div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/65 sm:inline-flex">
									FabDigital Studio preview
								</div>
							</div>

							<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
								<img
									alt="FabDigital Studio website preview"
									className="w-full"
									src={content.image}
								/>
							</div>

							<div className="pointer-events-none absolute left-6 top-24 hidden rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white/75 backdrop-blur lg:block">
								<p className="font-semibold text-white">Before → Better</p>
								<p className="mt-1 text-white/60">
									Refresh outdated websites into something sharper.
								</p>
							</div>

							<div className="pointer-events-none absolute bottom-6 right-6 hidden rounded-2xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm text-amber-100 backdrop-blur lg:block">
								<p className="font-semibold">Modern, fast, and clear</p>
								<p className="mt-1 text-amber-100/70">
									Built to feel polished across desktop and mobile.
								</p>
							</div>
						</div>
					</div>
				</div>
				<dl className="mt-6 grid gap-3 sm:grid-cols-3 lg:mt-8">
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
