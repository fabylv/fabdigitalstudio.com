import { useEffect, useState } from 'react';
import SectionIntro from '../ui/SectionIntro';

export default function SelectedWork({ projects }) {
	const [activeProject, setActiveProject] = useState(null);

	useEffect(() => {
		if (!activeProject) {
			document.body.style.overflow = '';
			return;
		}

		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				setActiveProject(null);
			}
		};

		document.body.style.overflow = 'hidden';
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [activeProject]);

	const layoutClasses = [
		'lg:col-span-7 lg:min-h-[28rem]',
		'lg:col-span-5 lg:min-h-[28rem]',
		'lg:col-span-4',
		'lg:col-span-4 lg:-translate-y-6',
		'lg:col-span-4',
		'lg:col-span-6'
	];

	return (
		<>
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
								<button
									className="flex h-full w-full flex-col text-left"
									type="button"
									onClick={() => setActiveProject(project)}
								>
									<div className="relative overflow-hidden">
										<img
											alt={project.category}
											className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03] lg:h-72"
											src={project.image}
										/>
										<div className="absolute inset-0 bg-linear-to-t from-surface-soft via-surface-soft/20 to-transparent" />
										<div className="absolute right-4 top-4 rounded-full border border-white/10 bg-surface-soft/70 px-3 py-1 text-xs font-semibold text-ink-100 backdrop-blur">
											Click to enlarge
										</div>
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
								</button>
							</article>
						))}
					</div>
				</div>
			</section>

			{activeProject ? (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-surface-soft/90 p-6 backdrop-blur-sm"
					onClick={() => setActiveProject(null)}
				>
					<div className="relative max-h-[90vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
						<button
							className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-surface-soft/80 px-4 py-2 text-sm font-medium text-ink-100 backdrop-blur"
							type="button"
							onClick={() => setActiveProject(null)}
						>
							Close
						</button>
						<img
							alt={activeProject.category}
							className="max-h-[90vh] w-full rounded-[2rem] border border-white/10 object-contain shadow-[0_30px_80px_rgba(2,8,23,0.45)]"
							src={activeProject.image}
						/>
					</div>
				</div>
			) : null}
		</>
	);
}
