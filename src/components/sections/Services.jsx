import { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import { servicesIntro } from '../../data/siteContent';

const serviceIcons = {
	'Website Development': (
		<path d="M4 6.75A2.75 2.75 0 0 1 6.75 4h10.5A2.75 2.75 0 0 1 20 6.75v10.5A2.75 2.75 0 0 1 17.25 20H6.75A2.75 2.75 0 0 1 4 17.25zm3.25 1.5a.75.75 0 0 0-.75.75v1.75h10.5V9a.75.75 0 0 0-.75-.75zm9.75 4H6.5V15a.75.75 0 0 0 .75.75h9.5A.75.75 0 0 0 17 15z" />
	),
	'Website Redesigns': (
		<path d="M12 4.75a7.25 7.25 0 1 0 6.87 9.56.75.75 0 1 1 1.42.48A8.75 8.75 0 1 1 12 3.25a8.7 8.7 0 0 1 5.9 2.28V4.5a.75.75 0 0 1 1.5 0v3.25A.75.75 0 0 1 18.65 8H15.4a.75.75 0 0 1 0-1.5h2A7.21 7.21 0 0 0 12 4.75m2.78 4.72a.75.75 0 0 1 0 1.06l-2.47 2.47a.75.75 0 0 1-.53.22h-2.03a.75.75 0 0 1 0-1.5h1.72l2.25-2.25a.75.75 0 0 1 1.06 0" />
	),
	'Landing Pages': (
		<path d="M5.5 5.75A2.25 2.25 0 0 1 7.75 3.5h8.5a2.25 2.25 0 0 1 2.25 2.25v12.5a2.25 2.25 0 0 1-2.25 2.25h-8.5A2.25 2.25 0 0 1 5.5 18.25zm2.25-.75a.75.75 0 0 0-.75.75v1.5h10V5.75a.75.75 0 0 0-.75-.75zm9.25 6h-10v7.25c0 .41.34.75.75.75h8.5c.41 0 .75-.34.75-.75zm-7.5 2.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75" />
	),
	'Accessibility & Usability': (
		<path d="M12 3.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5m-4.59 4.8a.75.75 0 0 1 .84-.64l3 .38a3 3 0 0 0 .75 0l3-.38a.75.75 0 1 1 .2 1.48l-2.2.28 1.12 2.14a3.2 3.2 0 0 1 .36 1.48v4.96a.75.75 0 1 1-1.5 0V14.4h-2v3.85a.75.75 0 1 1-1.5 0V13.3c0-.52.13-1.04.37-1.5l1.12-2.13-2.2-.28a.75.75 0 0 1-.64-.84" />
	)
};

export default function Services({ services }) {
	const sectionRef = useRef(null);
	const layoutClasses = [
		'lg:col-span-7 lg:min-h-72',
		'lg:col-span-5 lg:translate-y-8',
		'lg:col-span-5 lg:-translate-y-6',
		'lg:col-span-7 lg:min-h-72'
	];

	useEffect(() => {
		const cards = sectionRef.current?.querySelectorAll('[data-services-card]');
		if (!cards?.length) return undefined;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;
					entry.target.setAttribute('data-visible', 'true');
					observer.unobserve(entry.target);
				});
			},
			{ threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
		);

		cards.forEach((card) => observer.observe(card));

		return () => observer.disconnect();
	}, []);

	return (
		<section id="services" className="section-shell" ref={sectionRef}>
			<Container>
				<SectionTitle
					eyebrow={servicesIntro.eyebrow}
					title={servicesIntro.title}
					description={servicesIntro.description}
					align="center"
				/>

				<div className="mt-12 grid gap-6 lg:grid-cols-12">
					{services.map((service, index) => (
						<GlassCard
							key={service.title}
							className={`services-card p-7 ${
								layoutClasses[index] ?? 'lg:col-span-6'
							}`}
							data-services-card
							style={{ '--card-delay': `${index * 90}ms` }}
						>
							<div className="services-card-inner flex items-center justify-between gap-4">
								<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-[#0a7cff] via-[#18d7ff] to-[#ff6a00] text-[#06101d] shadow-[0_16px_32px_rgba(10,124,255,0.22)]">
									<svg
										aria-hidden="true"
										className="h-5 w-5 fill-current"
										viewBox="0 0 24 24"
									>
										{serviceIcons[service.title]}
									</svg>
								</span>
								<span className="h-px flex-1 bg-linear-to-r from-[#18d7ff]/45 via-[#0a7cff]/35 to-[#ff6a00]/10" />
							</div>

							<h3 className="services-card-inner mt-6 text-xl font-semibold text-white sm:text-2xl">
								{service.title}
							</h3>

							<p className="services-card-inner mt-4 max-w-xl text-sm leading-7 text-white/70">
								{service.description}
							</p>
						</GlassCard>
					))}
				</div>
			</Container>
		</section>
	);
}
