import logo from '../assets/fds-logo.png';
import Button from './ui/Button';
import Container from './ui/Container';

export default function Maintenance() {
	return (
		<div className="relative flex min-h-screen items-center overflow-hidden py-12 text-white sm:py-16">
			<div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/6 via-transparent to-transparent" />
			<div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl" />
			<div className="pointer-events-none absolute left-[12%] top-1/3 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
			<div className="pointer-events-none absolute right-[8%] top-24 h-64 w-64 rounded-full bg-blue-500/12 blur-3xl" />

			<Container className="relative">
				<div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-slate-950/80 p-7 text-center shadow-[0_30px_80px_rgba(2,8,23,0.40)] backdrop-blur-xl sm:p-10">
					<img
						alt="FabDigital Studio"
						className="mx-auto h-20 w-auto opacity-95 sm:h-24"
						src={logo}
					/>

					<span className="mt-6 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-200">
						Temporarily offline for updates
					</span>

					<h1 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-tight">
						We’re making a few improvements behind the scenes.
					</h1>

					<p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
						FabDigital Studio is temporarily in maintenance mode while we polish a few things.
						 Please check back soon.
					</p>

					<div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
						<span className="chip">Website updates</span>
						<span className="chip">Performance polish</span>
						<span className="chip-accent">Back shortly</span>
					</div>

					<div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-xl sm:p-6">
						<p className="text-sm font-semibold text-white">Need to reach us in the meantime?</p>
						<p className="mt-2 text-sm leading-6 text-white/65 sm:text-base">
							Email <a className="text-amber-200 hover:text-amber-100" href="mailto:faby@fabdigitalstudio.com">faby@fabdigitalstudio.com</a>
							 {' '}and we’ll get back to you as soon as possible.
						</p>
					</div>

					<div className="mt-8 flex justify-center">
						<Button href="mailto:faby@fabdigitalstudio.com">Contact FabDigital Studio</Button>
					</div>
				</div>
			</Container>
		</div>
	);
}
