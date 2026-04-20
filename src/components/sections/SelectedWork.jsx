import SectionIntro from '../ui/SectionIntro';

export default function SelectedWork({ projects }) {
	const layoutClasses = [
		'lg:col-span-7 lg:min-h-[28rem]',
		'lg:col-span-5 lg:min-h-[28rem]',
		'lg:col-span-4',
		'lg:col-span-4 lg:-translate-y-6',
		'lg:col-span-4',
		'lg:col-span-6'
	];

	return (
		<section className="section-shell" id="work">
			<div className="site-container">
				<SectionIntro
					kicker="Selected work"
					title="A few examples from projects you’ve already brought to life"
					description="A curated snapshot of websites and digital experiences that show range, visual polish, and real-world client work, without turning this into a technical skills list."
				/>

				<div className="mt-12 grid gap-6 lg:grid-cols-12">
					{projects.map((project, index) => (
						<article
							key={project.title}
							className={`glass-panel hover-lift group overflow-hidden ${
								layoutClasses[index] ?? 'lg:col-span-6'
							}`}
						>
							<div className="flex h-full flex-col">
								<div className="relative overflow-hidden">
									<img
										alt={project.category}
										className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03] lg:h-72"
										src={project.image}
									/>
									<div className="absolute inset-0 bg-linear-to-t from-surface-soft via-surface-soft/20 to-transparent" />
								</div>
								<div className="flex flex-1 flex-col justify-between p-6">
									<div>
										<div className="chip-accent">Client Work</div>
										<h3 className="mt-4 text-xl font-semibold text-ink-950 sm:text-2xl">
											{project.category}
										</h3>
										<p className="mt-3 max-w-2xl text-sm leading-7 text-ink-600">
											{project.description}
										</p>
									</div>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
