export default function SectionTitle({ eyebrow, title, description, align = 'center' }) {
	const alignment = align === 'left' ? 'mx-0 text-left' : 'mx-auto text-center';

	return (
		<div className={`max-w-3xl ${alignment}`}>
			{eyebrow ? (
				<p className="mb-3 inline-flex rounded-full border border-[#18d7ff]/24 bg-[#0a7cff]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#dff7ff] shadow-[0_0_24px_rgba(10,124,255,0.1)]">
					{eyebrow}
				</p>
			) : null}

			<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
				{title}
			</h2>

			{description ? (
				<p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">{description}</p>
			) : null}
		</div>
	);
}
