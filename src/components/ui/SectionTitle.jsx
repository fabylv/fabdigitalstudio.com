export default function SectionTitle({ eyebrow, title, description, align = 'center' }) {
	const alignment = align === 'left' ? 'mx-0 text-left' : 'mx-auto text-center';

	return (
		<div className={`max-w-3xl ${alignment}`}>
			{eyebrow ? (
				<p className="mb-3 inline-flex rounded-full border border-[#c7a56b]/30 bg-[#c7a56b]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#e7d7b8]">
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
