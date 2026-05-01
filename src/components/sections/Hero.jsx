import Button from '../ui/Button';
import Container from '../ui/Container';

export default function Hero({ content }) {
	return (
		<section className="relative overflow-hidden pb-10 pt-8 sm:pb-12 sm:pt-10" id="top">
			<div className="pointer-events-none absolute inset-x-0 top-0 h-136 bg-linear-to-b from-white/6 via-transparent to-transparent" />
			<div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-radial from-[#0a7cff]/18 via-transparent to-transparent opacity-90" />
			<div className="pointer-events-none absolute left-[-4%] top-24 h-72 w-72 rounded-full bg-[#18d7ff]/14 blur-3xl" />
			<div className="pointer-events-none absolute left-1/2 top-14 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ffb300]/14 blur-3xl" />
			<div className="pointer-events-none absolute right-[6%] top-12 h-88 w-88 rounded-full bg-[#ff6a00]/14 blur-3xl" />
			<div className="pointer-events-none absolute right-[18%] top-28 h-64 w-64 rounded-full bg-[#0a7cff]/16 blur-3xl" />

			<Container>
				<div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(420px,0.88fr)] lg:gap-12 xl:gap-16">
					<div className="relative text-center lg:text-left">
						<div className="pointer-events-none absolute -left-8 top-10 hidden h-28 w-28 rounded-full bg-[#18d7ff]/10 blur-3xl lg:block" />
						<span className="mb-4 inline-flex rounded-full border border-[#22b6ff]/30 bg-[#0a7cff]/12 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#dff7ff] shadow-[0_0_24px_rgba(10,124,255,0.14)] sm:text-xs">
							{content.eyebrow}
						</span>

						<h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-[3.4rem] sm:leading-[0.98] lg:text-[5rem] lg:leading-[0.95] xl:text-[5.6rem]">
							<span className="bg-linear-to-r from-[#ffffff] via-[#dff7ff] via-[42%] to-[#ff8a34] bg-clip-text text-transparent">
								{content.title}
							</span>
						</h1>

						<p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg lg:mx-0 lg:max-w-xl">
							{content.description}
						</p>

						<div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
							<Button href={content.primaryCta.href}>{content.primaryCta.label}</Button>
							<Button href={content.secondaryCta.href} variant="secondary">
								{content.secondaryCta.label}
							</Button>
						</div>

						<div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.18em] text-white/50 lg:justify-start">
							<span>AI-assisted workflow</span>
							<span className="hidden h-1 w-1 rounded-full bg-[#0a7cff]/70 sm:inline-block" />
							<span>Redesigns + cleanups</span>
							<span className="hidden h-1 w-1 rounded-full bg-[#ff6a00]/70 sm:inline-block" />
							<span>Fast performance</span>
							<span className="hidden h-1 w-1 rounded-full bg-[#18d7ff]/60 sm:inline-block" />
							<span className="text-[#dff7ff]/80">Built to stand out</span>
						</div>
					</div>

					<div className="relative">
						<div className="pointer-events-none absolute -left-8 top-10 h-48 w-48 rounded-full bg-[#0a7cff]/22 blur-3xl" />
						<div className="pointer-events-none absolute -right-6 bottom-10 h-48 w-48 rounded-full bg-[#ff6a00]/20 blur-3xl" />
						<div className="pointer-events-none absolute inset-x-10 top-0 h-28 bg-radial from-[#18d7ff]/18 to-transparent blur-3xl" />
						<div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#0b1628]/88 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-4 lg:p-5">
							<div className="absolute inset-0 bg-linear-to-br from-[#0a7cff]/8 via-transparent to-[#ff6a00]/8" />
							<div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-white/8 to-transparent" />
							<div className="relative mb-3 flex items-center px-2 sm:px-3">
								<div className="flex gap-2">
									<span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
									<span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
									<span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
								</div>
							</div>

							<div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-[#102038] shadow-2xl ring-1 ring-white/6">
								<div className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#0a7cff]/10 via-transparent to-[#ff6a00]/10" />
								<img
									alt="FabDigital Studio homepage preview"
									className="relative w-full"
									src={content.image}
								/>
							</div>
						</div>
					</div>
				</div>

				<dl className="mt-8 grid w-full gap-3 sm:grid-cols-3 lg:mt-10">
					{content.stats.map((stat, index) => (
						<div
							key={stat.label}
							className={`rounded-xl border px-4 py-4 text-center backdrop-blur-xl ${
								index === 0
									? 'border-[#0a7cff]/18 bg-[#0a7cff]/10'
									: index === 1
										? 'border-[#18d7ff]/18 bg-white/5'
										: 'border-[#ff6a00]/18 bg-[#ff6a00]/8'
							}`}
						>
							<dd className="text-xl font-semibold text-white">{stat.value}</dd>
							<dt className="mt-1 text-xs text-white/62">{stat.label}</dt>
						</div>
					))}
				</dl>
			</Container>
		</section>
	);
}
