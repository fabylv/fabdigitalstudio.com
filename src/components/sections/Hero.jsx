import Button from '../ui/Button';
import Container from '../ui/Container';

export default function Hero({ content }) {
	return (
		<section className="relative overflow-hidden pb-10 pt-8 sm:pb-12 sm:pt-10" id="top">
			<div className="pointer-events-none absolute inset-x-0 top-0 h-136 bg-linear-to-b from-white/6 via-transparent to-transparent" />
			<div className="pointer-events-none absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-[#ffb300]/10 blur-3xl" />
			<div className="pointer-events-none absolute left-[8%] top-24 h-56 w-56 rounded-full bg-[#ff6a00]/10 blur-3xl" />
			<div className="pointer-events-none absolute right-[10%] top-16 h-72 w-72 rounded-full bg-[#0a7cff]/12 blur-3xl" />

			<Container>
				<div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.95fr)] lg:gap-10">
					<div className="text-center lg:text-left">
						<span className="mb-3 inline-flex rounded-full border border-[#ffb300]/30 bg-[#ffb300]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#dff7ff]">
							{content.eyebrow}
						</span>

						<h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-[2.85rem] md:text-[3.2rem] lg:text-6xl lg:leading-[0.98] xl:text-7xl">
							<span className="bg-linear-to-r from-[#f5f1e8] via-[#dff7ff] to-[#ffb300] bg-clip-text text-transparent">
								{content.title}
							</span>
						</h1>

						<p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg lg:mx-0">
							{content.description}
						</p>

						<div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
							<Button href={content.primaryCta.href}>{content.primaryCta.label}</Button>
							<Button href={content.secondaryCta.href} variant="secondary">
								{content.secondaryCta.label}
							</Button>
						</div>

						<div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
							<span className="chip">AI-assisted workflow</span>
							<span className="chip">Redesigns + cleanups</span>
							<span className="chip">Fast performance</span>
							<span className="chip-accent">Built to stand out</span>
						</div>
					</div>

					<div className="relative">
						<div className="pointer-events-none absolute inset-x-0 top-10 h-40 bg-radial from-[#0a7cff]/14 to-transparent blur-3xl" />
						<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1628]/90 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.40)] backdrop-blur-xl sm:p-4 lg:p-5">
							<div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-white/6 to-transparent" />
							<div className="relative mb-3 flex items-center justify-between px-2 sm:px-3">
								<div className="flex gap-2">
									<span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
									<span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
									<span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
								</div>
								<div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/65 sm:text-xs">
									Homepage preview
								</div>
							</div>

							<div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#102038] shadow-2xl">
								<img
									alt="FabDigital Studio homepage preview"
									className="w-full"
									src={content.image}
								/>
							</div>

							<div className="mt-4 grid gap-3 sm:grid-cols-2">
								<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
									<p className="text-sm font-semibold text-white">Clearer at a glance</p>
									<p className="mt-2 text-sm leading-6 text-white/60">
										Now the text and preview sit side by side, so the hero is easier to understand.
									</p>
								</div>
								<div className="rounded-2xl border border-[#ffb300]/20 bg-[#ffb300]/10 p-4 backdrop-blur-xl">
									<p className="text-sm font-semibold text-[#dff7ff]">Better balance</p>
									<p className="mt-2 text-sm leading-6 text-[#dff7ff]/75">
										The visual supports the message instead of taking over the whole section.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<dl className="mx-auto mt-8 grid max-w-6xl gap-3 sm:grid-cols-3 lg:mt-10">
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
