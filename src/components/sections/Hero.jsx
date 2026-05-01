import Button from '../ui/Button';
import Container from '../ui/Container';
import useScrollReveal from '../../hooks/useScrollReveal';

const previewSteps = ['Clear offer', 'Better structure', 'Inquiry-focused CTA'];
const previewMetrics = [
	{ label: 'Launch-ready', value: 'Fast' },
	{ label: 'Mobile-first', value: 'Responsive' },
	{ label: 'Goal', value: 'More inquiries' }
];

export default function Hero({ content }) {
	const sectionRef = useScrollReveal({ threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

	return (
		<section className="relative mb-10 overflow-hidden pb-10 pt-8 sm:pb-20 sm:pt-10" id="top" ref={sectionRef}>
			<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,240,255,0.05)_1px,transparent_1px)] bg-size-[28px_28px] opacity-50" />
			<div className="pointer-events-none absolute inset-0 bg-[#06101f]/65" />
			<div className="pointer-events-none absolute inset-x-0 top-0 h-136 bg-linear-to-b from-white/6 via-transparent to-transparent" />
			<div className="pointer-events-none absolute inset-x-0 top-0 h-128 bg-radial from-[#0a7cff]/22 via-transparent to-transparent opacity-95" />
			<div className="pointer-events-none absolute left-[-4%] top-24 h-72 w-72 rounded-full bg-[#22f0ff]/18 blur-3xl" />
			<div className="pointer-events-none absolute left-1/2 top-14 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0a7cff]/10 blur-3xl" />
			<div className="pointer-events-none absolute right-[6%] top-12 h-88 w-88 rounded-full bg-[#ff6a00]/16 blur-3xl" />
			<div className="pointer-events-none absolute right-[18%] top-28 h-64 w-64 rounded-full bg-[#22f0ff]/18 blur-3xl" />

			<Container>
				<div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(420px,0.88fr)] lg:gap-12 xl:gap-16">
					<div className="reveal reveal-left relative text-center lg:text-left" data-reveal>
						<div className="pointer-events-none absolute -left-8 top-10 hidden h-28 w-28 rounded-full bg-[#22f0ff]/12 blur-3xl lg:block" />
						<span className="mb-4 inline-flex rounded-full border border-[#22f0ff]/28 bg-[#0a7cff]/14 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#dff7ff] shadow-[0_0_24px_rgba(34,240,255,0.16)] sm:text-xs">
							{content.eyebrow}
						</span>

						<h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-[2.85rem] md:text-[3.2rem] lg:text-6xl lg:leading-[1.2] xl:text-7xl">
							<span className="bg-linear-to-r from-[#49a7ff] via-[#22f0ff] to-[#ff6a00] bg-clip-text text-transparent">
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
							<span>Strategy-led messaging</span>
							<span className="hidden h-1 w-1 rounded-full bg-[#22f0ff]/70 sm:inline-block" />
							<span>Redesigns + cleanups</span>
							<span className="hidden h-1 w-1 rounded-full bg-[#ff6a00]/70 sm:inline-block" />
							<span>Fast performance</span>
							<span className="hidden h-1 w-1 rounded-full bg-[#49a7ff]/60 sm:inline-block" />
							<span className="text-[#dff7ff]/80">Built to stand out</span>
						</div>
					</div>

					<div className="reveal reveal-right relative" data-reveal style={{ '--reveal-delay': '120ms' }}>
						<div className="pointer-events-none absolute -left-8 top-10 h-48 w-48 rounded-full bg-[#22f0ff]/18 blur-3xl" />
						<div className="pointer-events-none absolute -right-6 bottom-10 h-48 w-48 rounded-full bg-[#ff6a00]/20 blur-3xl" />
						<div className="pointer-events-none absolute inset-x-10 top-0 h-28 bg-radial from-[#22f0ff]/24 to-transparent blur-3xl" />
						<div className="relative overflow-hidden rounded-4xl border border-[#22f0ff]/12 bg-[#0b1628]/88 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-4 lg:p-5">
							<div className="absolute inset-0 bg-linear-to-br from-[#0a7cff]/10 via-transparent to-[#22f0ff]/10" />
							<div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-white/8 to-transparent" />
							<div className="relative mb-3 flex items-center justify-between px-2 sm:px-3">
								<div className="flex gap-2">
									<span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
									<span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
									<span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
								</div>
								<span className="rounded-full border border-[#22f0ff]/20 bg-[#0a7cff]/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#dff7ff]">
									Website upgrade
								</span>
							</div>

							<div className="relative overflow-hidden rounded-[1.75rem] border border-[#22f0ff]/12 bg-[#102038] p-5 shadow-2xl ring-1 ring-[#22f0ff]/8 sm:p-6">
								<div className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#0a7cff]/12 via-transparent to-[#22f0ff]/10" />
								<div className="relative">
									<div className="flex flex-wrap items-center gap-2">
										<span className="rounded-full border border-[#22f0ff]/18 bg-[#22f0ff]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#dff7ff]">
											Custom website
										</span>
										<span className="rounded-full border border-[#ff6a00]/20 bg-[#ff6a00]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ffd9c7]">
											Built to convert
										</span>
									</div>

									<div className="mt-4 rounded-3xl border border-white/10 bg-[#0a1629]/88 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
										<div className="flex items-start justify-between gap-4">
											<div>
												<p className="text-xs font-medium uppercase tracking-[0.2em] text-[#22f0ff]/75">
													Service business website
												</p>
												<h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
													Clear offer. Stronger brand. More leads.
												</h3>
											</div>
											<div className="rounded-2xl border border-[#22f0ff]/16 bg-[#0a7cff]/10 px-3 py-2 text-right">
												<p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#dff7ff]/70">
													Goal
												</p>
												<p className="mt-1 text-sm font-semibold text-white">Better conversion</p>
											</div>
										</div>

										<div className="mt-5 grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
											<div className="rounded-[1.25rem] border border-white/8 bg-white/4 p-4">
												<div className="h-3 w-28 rounded-full bg-white/10" />
												<div className="mt-3 h-2 w-full rounded-full bg-white/8" />
												<div className="mt-2 h-2 w-5/6 rounded-full bg-white/8" />
												<div className="mt-2 h-2 w-2/3 rounded-full bg-white/8" />
												<div className="mt-4 flex gap-2">
													<div className="rounded-full border border-white/8 bg-[#122033]/92 px-4 py-2 text-xs font-medium text-white/62 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
														Start Project
													</div>
													<div className="rounded-full border border-white/10 bg-transparent px-4 py-2 text-xs font-medium text-white/70">
														See Services
													</div>
												</div>
												<div className="mt-4 space-y-2">
													{previewSteps.map((step) => (
														<div key={step} className="flex items-center gap-2 text-sm text-white/76">
															<span className="h-2 w-2 rounded-full bg-[#22f0ff] shadow-[0_0_12px_rgba(34,240,255,0.7)]" />
															<span>{step}</span>
														</div>
													))}
												</div>
											</div>

											<div className="grid gap-3">
												{previewMetrics.map((metric, index) => (
													<div
														key={metric.label}
														className={`rounded-[1.25rem] border p-4 ${
															index === 0
																? 'border-[#49a7ff]/16 bg-[#0a7cff]/10'
																: index === 1
																	? 'border-[#22f0ff]/16 bg-[#22f0ff]/8'
																	: 'border-[#ff6a00]/16 bg-[#ff6a00]/8'
														}`}
													>
														<p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/58">
															{metric.label}
														</p>
														<p className="mt-1 text-base font-semibold text-white">{metric.value}</p>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
