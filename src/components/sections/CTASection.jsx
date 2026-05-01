import Button from '../ui/Button';
import Container from '../ui/Container';

export default function CTASection({ content }) {
	return (
		<section className="py-20 sm:py-24">
			<Container>
				<div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#151618] via-[#24272c] to-[#7d8794] px-6 py-12 text-white shadow-2xl sm:px-10 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-10">
					<div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
					<div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#c7a56b]/20 blur-3xl" />
					<div className="absolute right-28 top-10 h-24 w-24 rounded-full bg-[#d9dee4]/18 blur-3xl" />

					<div className="relative max-w-2xl">
						<span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-semibold text-white">
							{content.eyebrow}
						</span>

						<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
							{content.title}
						</h2>

						<p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
							{content.description}
						</p>
					</div>

					<div className="relative mt-8 lg:mt-0">
						<Button
							className="bg-[#eadbbe] text-[#151312] hover:bg-[#e7d7b8]"
							href={content.action.href}
						>
							{content.action.label}
						</Button>
					</div>
				</div>
			</Container>
		</section>
	);
}
