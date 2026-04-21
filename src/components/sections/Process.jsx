import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import { processIntro } from '../../data/siteContent';

export default function Process({ steps }) {
	return (
		<section className="relative py-20 sm:py-24">
			<div className="absolute top-8" id="process" />
			<Container>
				<SectionTitle
					eyebrow={processIntro.eyebrow}
					title={processIntro.title}
					description={processIntro.description}
					align="center"
				/>

				<ol className="relative mt-12 grid gap-6 lg:grid-cols-2 lg:gap-x-12">
					<div className="absolute left-1/2 top-4 hidden h-[calc(100%-2rem)] w-px -translate-x-1/2 bg-linear-to-b from-blue-500/50 via-cyan-300/35 to-amber-300/35 lg:block" />

					{steps.map((step, index) => (
						<li key={step.title} className={index % 2 === 0 ? 'lg:mr-10' : 'lg:ml-10 lg:mt-16'}>
							<GlassCard className="relative p-7 transition hover:-translate-y-1">
								<div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-cyan-400 text-sm font-semibold text-white shadow-lg">
									{String(index + 1).padStart(2, '0')}
								</div>
								<h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
								<p className="mt-3 text-sm leading-7 text-white/70">{step.description}</p>
							</GlassCard>
						</li>
					))}
				</ol>
			</Container>
		</section>
	);
}
