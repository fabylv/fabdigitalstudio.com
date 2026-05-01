import Container from './ui/Container';
import Button from './ui/Button';

export default function LegalPage({ content }) {
	return (
		<section className="section-shell-end relative pb-14 pt-10 sm:pb-20 sm:pt-14">
			<Container className="max-w-[920px]">
				<div className="mb-8 flex flex-wrap items-center justify-between gap-4">
					<div>
						<p className="mb-3 inline-flex rounded-full border border-[#22f0ff]/24 bg-[#0a7cff]/12 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#dff7ff] shadow-[0_0_24px_rgba(34,240,255,0.12)]">
							{content.eyebrow}
						</p>
						<h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
							{content.title}
						</h1>
						<p className="mt-4 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
							{content.description}
						</p>
						<p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-white/45">
							Last updated {content.lastUpdated}
						</p>
					</div>

					<Button href="/" variant="secondary">
						Back to Home
					</Button>
				</div>

				<div className="space-y-5">
					{content.sections.map((section) => (
						<article
							key={section.title}
							className="rounded-3xl border border-white/10 bg-white/4 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.22)] backdrop-blur sm:p-8"
						>
							<h2 className="text-xl font-semibold text-white sm:text-2xl">{section.title}</h2>

							<div className="mt-4 space-y-4 text-sm leading-7 text-white/72 sm:text-base">
								{section.paragraphs?.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}

								{section.items?.length ? (
									<ul className="space-y-2 pl-5 text-white/72">
										{section.items.map((item) => (
											<li key={item} className="list-disc">
												{item}
											</li>
										))}
									</ul>
								) : null}
							</div>
						</article>
					))}
				</div>
			</Container>
		</section>
	);
}
