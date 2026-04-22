import { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const initialFormState = {
	name: '',
	email: '',
	businessName: '',
	projectType: '',
	timeline: '',
	budget: '',
	message: '',
	website: ''
};

export default function Contact({ content }) {
	const [formData, setFormData] = useState(initialFormState);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [status, setStatus] = useState({ type: 'idle', message: '' });
	const statusRef = useRef(null);
	const contactApiUrl = '/api/contact';

	useEffect(() => {
		if (!status.message || !statusRef.current) return;

		statusRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
		statusRef.current.focus();
	}, [status]);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((current) => ({ ...current, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsSubmitting(true);
		setStatus({ type: 'idle', message: '' });

		try {
			const response = await fetch(contactApiUrl, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});

			const responseText = await response.text();
			let data = {};

			if (responseText) {
				try {
					data = JSON.parse(responseText);
				} catch {
					throw new Error('The server returned an unexpected response. Please try again.');
				}
			}

			if (!response.ok) {
				throw new Error(data.error || 'Something went wrong while sending your message.');
			}

			setStatus({
				type: 'success',
				message: data.message || 'Thanks, your message has been sent successfully.'
			});
			setFormData(initialFormState);
		} catch (error) {
			setStatus({
				type: 'error',
				message: error.message || 'Something went wrong while sending your message.'
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="relative pb-20 sm:pb-24">
			<div className="absolute top-8" id="contact" />
			<Container>
				<div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
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
									<li>• Accessibility and front-end polish</li>
								</ul>
							</div>

							<div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5 text-sm text-amber-100 shadow-lg">
								<p className="font-semibold text-amber-200">What happens next?</p>
								<p className="mt-2 leading-7 text-amber-100/75">
									Once you send the form, the details go straight to my inbox so I can review your project and
									get back to you.
								</p>
							</div>
						</div>
					</GlassCard>

					<GlassCard className="p-8 sm:p-10">
						<form className="space-y-6" onSubmit={handleSubmit}>
							{status.message ? (
								<div
									ref={statusRef}
									tabIndex="-1"
									className={`rounded-3xl border p-5 shadow-xl outline-none ${
										status.type === 'success'
											? 'border-emerald-400/30 bg-emerald-400/12 text-emerald-50'
											: 'border-rose-400/30 bg-rose-400/12 text-rose-50'
									}`}
									role={status.type === 'success' ? 'status' : 'alert'}
								>
									<p className="text-sm font-semibold uppercase tracking-[0.18em] text-current/80">
										{status.type === 'success' ? 'Message sent' : 'Something went wrong'}
									</p>
									<p className="mt-2 text-base font-medium text-current">{status.message}</p>
								</div>
							) : null}
							<div>
								<p className="text-sm font-medium uppercase tracking-[0.22em] text-white/45">
									Project inquiry form
								</p>
								<h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
									Let’s talk about what you need.
								</h3>
							</div>

							<div className="grid gap-6 sm:grid-cols-2">
								<label className="block text-sm font-medium text-white/70">
									Name
									<input
										className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/30 focus:border-amber-300/30"
										name="name"
										onChange={handleChange}
										required
										placeholder="Your name"
										type="text"
										value={formData.name}
									/>
								</label>

								<label className="block text-sm font-medium text-white/70">
									Email
									<input
										className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/30 focus:border-amber-300/30"
										name="email"
										onChange={handleChange}
										required
										placeholder="you@business.com"
										type="email"
										value={formData.email}
									/>
								</label>
							</div>

							<div className="grid gap-6 sm:grid-cols-2">
								<label className="block text-sm font-medium text-white/70">
									Business name
									<input
										className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/30 focus:border-amber-300/30"
										name="businessName"
										onChange={handleChange}
										placeholder="Your business"
										type="text"
										value={formData.businessName}
									/>
								</label>

								<label className="block text-sm font-medium text-white/70">
									Project type
									<select
										className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0c1728] px-4 py-3 text-base text-white outline-none transition focus:border-amber-300/30"
										name="projectType"
										onChange={handleChange}
										value={formData.projectType}
									>
										<option value="">Select one</option>
										{content.projectTypes.map((option) => (
											<option key={option} value={option}>
												{option}
											</option>
										))}
									</select>
								</label>
							</div>

							<div className="grid gap-6 sm:grid-cols-2">
								<label className="block text-sm font-medium text-white/70">
									Timeline
									<select
										className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0c1728] px-4 py-3 text-base text-white outline-none transition focus:border-amber-300/30"
										name="timeline"
										onChange={handleChange}
										value={formData.timeline}
									>
										<option value="">Select one</option>
										{content.timelineOptions.map((option) => (
											<option key={option} value={option}>
												{option}
											</option>
										))}
									</select>
								</label>

								<label className="block text-sm font-medium text-white/70">
									Budget
									<select
										className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0c1728] px-4 py-3 text-base text-white outline-none transition focus:border-amber-300/30"
										name="budget"
										onChange={handleChange}
										value={formData.budget}
									>
										<option value="">Select one</option>
										{content.budgetOptions.map((option) => (
											<option key={option} value={option}>
												{option}
											</option>
										))}
									</select>
								</label>
							</div>

							<label className="hidden" htmlFor="website">
								Website
								<input
									id="website"
									name="website"
									onChange={handleChange}
									tabIndex="-1"
									type="text"
									value={formData.website}
									autoComplete="off"
								/>
							</label>

							<label className="block text-sm font-medium text-white/70">
								Tell me about your project
								<textarea
									className="mt-2 min-h-40 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/30 focus:border-amber-300/30"
									name="message"
									onChange={handleChange}
									placeholder="Tell me what you need, what your current site is missing, and what you want to improve."
									required
									value={formData.message}
								/>
							</label>

							<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
								<Button type="submit" disabled={isSubmitting} className={isSubmitting ? 'opacity-70' : ''}>
									{isSubmitting ? 'Sending...' : 'Send Project Inquiry'}
								</Button>
							</div>
						</form>
					</GlassCard>
				</div>
			</Container>
		</section>
	);
}
