import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

function buildMailtoLink(email, subject, body) {
	return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact({ content }) {
	return (
		<section id="contact" className="relative pb-20 sm:pb-24">
			<Container>
				<div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
					<GlassCard className="overflow-hidden p-8 sm:p-10">
						<SectionTitle
							eyebrow={content.eyebrow}
							title={content.title}
							description={content.description}
							align="left"
						/>

						<div className="mt-8 space-y-4">
							<div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg">
								<p className="text-sm font-medium text-white/60">Email</p>
								<a
									className="mt-2 inline-block text-base font-semibold text-white transition hover:text-amber-200"
									href={`mailto:${content.email}`}
								>
									{content.email}
								</a>
							</div>

							<div className="rounded-2xl border border-white/10 bg-linear-to-br from-blue-500/15 to-amber-300/10 p-5 shadow-lg">
								<p className="text-sm font-medium text-white/70">Typical projects</p>
								<ul className="mt-3 space-y-2 text-sm text-white/65">
									<li>• New service business websites</li>
									<li>• Strategic redesigns</li>
									<li>• Landing pages for offers and ads</li>
									<li>• Speed and front-end cleanup</li>
								</ul>
							</div>

							<div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5 text-sm text-amber-100 shadow-lg">
								<p className="font-semibold text-amber-200">Prefer a simple start?</p>
								<p className="mt-2 leading-7 text-amber-100/75">
									Choose the option that fits best and I’ll open a ready-to-send email draft for you.
								</p>
							</div>
						</div>
					</GlassCard>

					<GlassCard className="p-8 sm:p-10">
						<div>
							<p className="text-sm font-medium uppercase tracking-[0.22em] text-white/45">
								Choose your inquiry
							</p>
							<h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
								Start with the option that matches what you need.
							</h3>
							<p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
								No form needed. Just pick a starting point and send a quick email with a little context.
							</p>
						</div>

						<div className="mt-8 grid gap-5">
							{content.inquiryOptions.map((option, index) => (
								<div
									key={option.title}
									className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:border-amber-300/20"
								>
									<div className="flex items-start justify-between gap-4">
										<div>
											<p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/80">
												Option {index + 1}
											</p>
											<h4 className="mt-2 text-xl font-semibold text-white">{option.title}</h4>
										</div>
										<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 via-cyan-400 to-amber-300 text-sm font-semibold text-white shadow-lg">
											{String(index + 1).padStart(2, '0')}
										</span>
									</div>

									<p className="mt-4 text-sm leading-7 text-white/70">{option.description}</p>

									<div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
										<Button
											href={buildMailtoLink(content.email, option.subject, option.body)}
											variant={index === 0 ? 'primary' : 'secondary'}
										>
											Email About This
										</Button>
										<p className="text-sm text-white/50">Opens your email app with a draft.</p>
									</div>
								</div>
							))}
						</div>
					</GlassCard>
				</div>
			</Container>
		</section>
	);
}
