import Button from '../ui/Button';
import Container from '../ui/Container';

export default function Hero({ content }) {
	const preview = content.preview;

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

				<div className="relative mx-auto mt-8 max-w-5xl sm:mt-10">
					<div className="pointer-events-none absolute inset-x-0 top-12 h-44 bg-radial from-cyan-400/14 to-transparent blur-3xl" />

					<div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:gap-5">
						<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/85 p-4 shadow-[0_30px_80px_rgba(2,8,23,0.40)] backdrop-blur-xl sm:p-5">
							<div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-white/6 to-transparent" />
							<div className="relative flex items-center justify-between gap-3">
								<div className="flex gap-2">
									<span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
									<span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
									<span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
								</div>
								<div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/65 sm:text-xs">
									{preview.label}
								</div>
							</div>

							<div className="relative mt-4 overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-900 p-5 shadow-2xl sm:p-6">
								<div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-cyan-400/10 to-transparent" />
								<div className="relative max-w-xl">
									<span className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-100 sm:text-xs">
										FabDigital Studio
									</span>
									<h2 className="mt-4 max-w-lg text-2xl font-semibold tracking-tight text-white sm:text-[2rem] sm:leading-tight">
										{preview.title}
									</h2>
									<p className="mt-3 max-w-xl text-sm leading-6 text-white/65 sm:text-[0.95rem]">
										{preview.description}
									</p>

									<div className="mt-5 flex flex-wrap gap-2.5">
										{preview.badges.map((badge) => (
											<span key={badge} className="chip">
												{badge}
											</span>
										))}
									</div>
								</div>

								<div className="mt-6 grid gap-3 sm:grid-cols-3">
									<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
										<p className="text-sm font-semibold text-white">Stronger first impression</p>
										<p className="mt-2 text-sm leading-6 text-white/60">
											A cleaner hero helps visitors understand the brand faster.
										</p>
									</div>
									<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
										<p className="text-sm font-semibold text-white">Clear next step</p>
										<p className="mt-2 text-sm leading-6 text-white/60">
											The offer, the value, and the CTA all read more quickly.
										</p>
									</div>
									<div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 backdrop-blur-xl">
										<p className="text-sm font-semibold text-amber-100">Feels like a real website</p>
										<p className="mt-2 text-sm leading-6 text-amber-100/75">
											It explains itself instead of feeling like a giant mystery image.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="space-y-4">
							{preview.notes.map((note) => (
								<div
									key={note.title}
									className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left shadow-[0_18px_40px_rgba(2,8,23,0.18)] backdrop-blur-xl"
								>
									<p className="text-sm font-semibold text-white">{note.title}</p>
									<p className="mt-2 text-sm leading-6 text-white/65">{note.text}</p>
								</div>
							))}
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
