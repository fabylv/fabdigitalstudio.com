import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import { workIntro } from '../../data/siteContent';

export default function SelectedWork({ projects }) {
	const layoutClasses = [
		'lg:col-span-7 lg:min-h-[21rem]',
		'lg:col-span-5 lg:translate-y-8',
		'lg:col-span-4 lg:-translate-y-4',
		'lg:col-span-4 lg:translate-y-6',
		'lg:col-span-4 lg:-translate-y-2',
		'lg:col-span-12'
	];

	return (
		<section id="work" className="section-shell">
			<Container>
				<SectionTitle
					eyebrow={workIntro.eyebrow}
					title={workIntro.title}
					description={workIntro.description}
					align="center"
				/>

				<div className="mt-12 grid gap-6 lg:grid-cols-12">
					{projects.map((project, index) => (
						<GlassCard
							key={project.title}
							className={`group overflow-hidden p-7 transition hover:-translate-y-1.5 ${
								layoutClasses[index] ?? 'lg:col-span-6'
							}`}
						>
							<div className="flex h-full flex-col justify-between gap-8">
								<div>
									<div className="flex items-center justify-end gap-4">
										<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-[#0a7cff] via-[#22b6ff] to-[#ffb300] text-sm font-semibold text-[#07111f] shadow-[0_12px_24px_rgba(10,124,255,0.24)]">
											{String(index + 1).padStart(2, '0')}
										</span>
									</div>

									<h3 className="mt-6 text-xl font-semibold text-white sm:text-2xl">
										{project.title}
									</h3>
									<p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
										{project.description}
									</p>
								</div>

								<div className="flex flex-wrap gap-3">
									{project.highlights.map((item) => (
										<span
											key={item}
											className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs font-medium text-white/75 backdrop-blur"
										>
											{item}
										</span>
									))}
								</div>
							</div>
						</GlassCard>
					))}
				</div>
			</Container>
		</section>
	);
}
