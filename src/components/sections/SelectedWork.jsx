import { useEffect, useState } from 'react';
import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import { workIntro } from '../../data/siteContent';

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
			<section className="py-20 sm:py-24" id="work">
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
								className={`group overflow-hidden transition hover:-translate-y-1 ${
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
											className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 lg:h-72"
											src={project.image}
										/>
										<div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />
										<div className="absolute right-4 top-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
											Click to enlarge
										</div>
									</div>

									<div className="flex flex-1 flex-col justify-between p-6">
										<div>
											<div className="chip-accent">Client Work</div>
											<h3 className="mt-4 text-xl font-semibold text-white sm:text-2xl">
												{project.category}
											</h3>
											<p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
												{project.description}
											</p>
										</div>
									</div>
								</button>
							</GlassCard>
						))}
					</div>
				</Container>
			</section>

			{activeProject ? (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-6 backdrop-blur-sm"
					onClick={() => setActiveProject(null)}
				>
					<div
						className="relative max-h-[90vh] w-full max-w-6xl"
						onClick={(event) => event.stopPropagation()}
					>
						<button
							className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-sm font-medium text-white backdrop-blur"
							type="button"
							onClick={() => setActiveProject(null)}
						>
							Close
						</button>

						<img
							alt={activeProject.category}
							className="max-h-[90vh] w-full rounded-3xl border border-white/10 object-contain shadow-2xl"
							src={activeProject.image}
						/>
					</div>
				</div>
			) : null}
		</>
	);
}
