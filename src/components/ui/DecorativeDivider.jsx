import Container from './Container';

export default function DecorativeDivider() {
	return (
		<div aria-hidden="true" className="relative py-3 sm:py-4">
			<Container>
				<div className="flex w-full items-center gap-4">
					<div className="h-px flex-1 bg-linear-to-r from-transparent via-[#0a7cff]/40 to-[#22b6ff]/25" />
					<div className="relative flex h-4 w-12 items-center justify-center">
						<div className="absolute h-8 w-8 rounded-full bg-[#0a7cff]/18 blur-xl" />
						<div className="h-2 w-2 rounded-full bg-[#dff7ff] shadow-[0_0_10px_rgba(223,247,255,0.55)]" />
						<div className="absolute h-3 w-3 rounded-full border border-[#ff6a00]/50" />
					</div>
					<div className="h-px flex-1 bg-linear-to-l from-transparent via-[#ff6a00]/40 to-[#ffb300]/25" />
				</div>
			</Container>
		</div>
	);
}
