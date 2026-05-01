import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import { servicesIntro } from '../../data/siteContent';

export default function Services({ services }) {
	const layoutClasses = [
		'lg:col-span-7 lg:min-h-72',
		'lg:col-span-5 lg:translate-y-8',
		'lg:col-span-5 lg:-translate-y-6',
		'lg:col-span-7 lg:min-h-72'
	];

	return (
		<section id="services" className="section-shell">
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
							className={`group p-7 transition hover:-translate-y-1 hover:border-[#18d7ff]/20 ${
								layoutClasses[index] ?? 'lg:col-span-6'
							}`}
						>
							<div className="flex items-center justify-between gap-4">
								<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-[#0a7cff] via-[#18d7ff] to-[#ff6a00] text-sm font-semibold text-[#06101d] shadow-[0_16px_32px_rgba(10,124,255,0.22)]">
									{String(index + 1).padStart(2, '0')}
								</span>
								<span className="h-px flex-1 bg-linear-to-r from-[#18d7ff]/45 via-[#0a7cff]/35 to-[#ff6a00]/10" />
							</div>

							<h3 className="mt-6 text-xl font-semibold text-white sm:text-2xl">{service.title}</h3>

							<p className="mt-4 max-w-xl text-sm leading-7 text-white/70">{service.description}</p>
						</GlassCard>
					))}
				</div>
			</Container>
		</section>
	);
}
