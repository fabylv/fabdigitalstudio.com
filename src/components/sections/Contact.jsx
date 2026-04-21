import SectionIntro from '../ui/SectionIntro';

export default function Contact({ content }) {
	return (
		<section className="section-shell" id="contact">
			<div className="site-container grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
				<div className="glass-panel overflow-hidden p-8 sm:p-10">
					<SectionIntro kicker="Contact" title={content.title} description={content.description} />
					<div className="mt-8 space-y-4">
						<div className="rounded-2xl border border-white/10 bg-white/6 p-5 shadow-[0_16px_40px_rgba(2,8,23,0.20)]">
							<p className="text-sm font-medium text-ink-600">Email</p>
							<a
								className="mt-2 inline-block text-base font-semibold text-ink-950"
								href={`mailto:${content.email}`}
							>
								{content.email}
							</a>
						</div>
						<div className="rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(47,111,228,0.14),rgba(255,111,58,0.12))] p-5 shadow-[0_16px_40px_rgba(2,8,23,0.20)]">
							<p className="text-sm font-medium text-ink-700">Typical projects</p>
							<ul className="mt-3 space-y-2 text-sm text-ink-600">
								<li>• New service business websites</li>
								<li>• Strategic redesigns</li>
								<li>• Landing pages for offers and ads</li>
								<li>• Speed and front-end cleanup</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="glass-panel p-8 sm:p-10">
					<div className="space-y-6">
						<div className="rounded-2xl border border-accent-400/20 bg-accent-500/10 p-4 text-sm text-accent-400 shadow-[0_16px_40px_rgba(2,8,23,0.20)]">
							The inquiry form is coming soon. For now, please email me directly and I’ll get back to you.
						</div>

						<div className="grid gap-6 sm:grid-cols-2">
							<label className="block text-sm font-medium text-ink-700">
								Name
								<input
									className="mt-2 w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-base text-ink-950 outline-none opacity-60"
									placeholder="Your name"
									disabled
									type="text"
								/>
							</label>
							<label className="block text-sm font-medium text-ink-700">
								Email
								<input
									className="mt-2 w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-base text-ink-950 outline-none opacity-60"
									placeholder="you@business.com"
									disabled
									type="email"
								/>
							</label>
						</div>

						<label className="block text-sm font-medium text-ink-700">
							Message
							<textarea
								className="mt-2 min-h-40 w-full rounded-3xl border border-white/10 bg-white/6 px-4 py-3 text-base text-ink-950 outline-none opacity-60"
								placeholder="Tell me about your project, goals, or current website."
								disabled
							/>
						</label>

						<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
							<a className="button-primary" href={`mailto:${content.email}`}>
								Email Faby
							</a>
							<p className="text-sm text-ink-600">Direct email is the best way to reach me for now.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
