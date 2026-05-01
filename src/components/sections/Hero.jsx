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
				<div className="mx-auto grid max-w-[1400px] items-center gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(380px,0.85fr)]">
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

						<div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.18em] text-white/45 lg:justify-start">
							<span>AI-assisted workflow</span>
							<span className="hidden h-1 w-1 rounded-full bg-[#0a7cff]/60 sm:inline-block" />
							<span>Redesigns + cleanups</span>
							<span className="hidden h-1 w-1 rounded-full bg-[#ffb300]/70 sm:inline-block" />
							<span>Fast performance</span>
							<span className="hidden h-1 w-1 rounded-full bg-white/35 sm:inline-block" />
							<span className="text-[#dff7ff]/70">Built to stand out</span>
						</div>
					</div>

					<div className="relative">
						<div className="pointer-events-none absolute inset-x-0 top-10 h-40 bg-radial from-[#0a7cff]/14 to-transparent blur-3xl" />
						<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1628]/90 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.40)] backdrop-blur-xl sm:p-4 lg:p-5">
							<div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-white/6 to-transparent" />
							<div className="relative mb-3 flex items-center px-2 sm:px-3">
								<div className="flex gap-2">
									<span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
									<span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
									<span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
								</div>
							</div>

							<div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#102038] shadow-2xl">
								<img
									alt="FabDigital Studio homepage preview"
									className="w-full"
									src={content.image}
								/>
							</div>

						</div>
					</div>
				</div>

				<dl className="mx-auto mt-8 grid max-w-[1400px] gap-3 sm:grid-cols-3 lg:mt-10">
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
