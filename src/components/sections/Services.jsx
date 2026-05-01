import { PersonStanding, LayoutTemplate, MonitorSmartphone, PencilRuler } from 'lucide-react';
import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import { servicesIntro } from '../../data/siteContent';
import useScrollReveal from '../../hooks/useScrollReveal';

const serviceIcons = {
	'Website Development': MonitorSmartphone,
	'Website Redesigns': PencilRuler,
	'Landing Pages': LayoutTemplate,
	'Accessibility & Usability': PersonStanding
};

export default function Services({ services }) {
	const sectionRef = useScrollReveal({ threshold: 0.16, rootMargin: '0px 0px -6% 0px' });
	const layoutClasses = [
		'lg:col-span-7 lg:min-h-72',
		'lg:col-span-5 lg:translate-y-8',
		'lg:col-span-5 lg:-translate-y-6',
		'lg:col-span-7 lg:min-h-72'
	];

	return (
		<section id="services" className="section-shell" ref={sectionRef}>
			<Container>
				<div className="reveal reveal-up" data-reveal>
					<SectionTitle
						eyebrow={servicesIntro.eyebrow}
						title={servicesIntro.title}
						description={servicesIntro.description}
						align="center"
					/>
				</div>

				<div className="mt-16 grid gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
					{services.map((service, index) => {
						const Icon = serviceIcons[service.title] ?? MonitorSmartphone;
						const isStandingIcon = service.title === 'Accessibility & Usability';
						const revealClass =
							index % 2 === 0 ? 'reveal reveal-left services-card' : 'reveal reveal-right services-card';

						return (
							<GlassCard
								key={service.title}
								className={`${revealClass} p-9 sm:p-10 ${layoutClasses[index] ?? 'lg:col-span-6'}`}
								data-reveal
								style={{ '--reveal-delay': `${index * 90}ms` }}
							>
								<div className="flex items-center justify-between gap-6">
									<span className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-linear-to-br from-[#0a7cff] via-[#18d7ff] to-[#ff6a00] text-[#06101d] shadow-[0_16px_32px_rgba(10,124,255,0.22)]">
										<Icon
											aria-hidden="true"
											className={isStandingIcon ? 'h-6.5 w-6.5' : 'h-5.5 w-5.5'}
											strokeWidth={2.1}
										/>
									</span>
									<span className="h-px flex-1 bg-linear-to-r from-[#18d7ff]/45 via-[#0a7cff]/35 to-[#ff6a00]/10" />
								</div>

								<h3 className="mt-7 text-xl font-semibold text-white sm:text-2xl">{service.title}</h3>

								<p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-[0.96rem]">
									{service.description}
								</p>
							</GlassCard>
						);
					})}
				</div>
			</Container>
		</section>
	);
}
