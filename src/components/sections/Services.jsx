import { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import { servicesIntro } from '../../data/siteContent';

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
								<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-[#0a7cff] via-[#18d7ff] to-[#ff6a00] text-sm font-semibold text-[#06101d] shadow-[0_16px_32px_rgba(10,124,255,0.22)]">
									{String(index + 1).padStart(2, '0')}
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
