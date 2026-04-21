import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

export default function Contact({ content }) {
	return (
		<section id="contact" className="relative pb-20 sm:pb-24">
			<Container>
				<div className="grid gap-8 lg:grid-cols-2">
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
									className="mt-2 inline-block text-base font-semibold text-white"
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
						</div>
					</GlassCard>

					<GlassCard className="p-8 sm:p-10">
						<div className="space-y-6">
							<div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm text-amber-200 shadow-lg">
								The inquiry form is coming soon. For now, please email me directly and I’ll get back
								to you.
							</div>

							<div className="grid gap-6 sm:grid-cols-2">
								<label className="block text-sm font-medium text-white/70">
									Name
									<input
										className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white/70 opacity-60 outline-none"
										placeholder="Your name"
										disabled
										type="text"
									/>
								</label>

								<label className="block text-sm font-medium text-white/70">
									Email
									<input
										className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white/70 opacity-60 outline-none"
										placeholder="you@business.com"
										disabled
										type="email"
									/>
								</label>
							</div>

							<label className="block text-sm font-medium text-white/70">
								Message
								<textarea
									className="mt-2 min-h-40 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white/70 opacity-60 outline-none"
									placeholder="Tell me about your project, goals, or current website."
									disabled
								/>
							</label>

							<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
								<Button href={`mailto:${content.email}`}>Email Faby</Button>
								<p className="text-sm text-white/60">
									Direct email is the best way to reach me for now.
								</p>
							</div>
						</div>
					</GlassCard>
				</div>
			</Container>
		</section>
	);
}
