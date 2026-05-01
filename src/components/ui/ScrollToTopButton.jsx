import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(window.scrollY > 320);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
	};

	return (
		<button
			aria-label="Back to top"
			className={`fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#17191d]/90 text-[#f5f1e8] shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-[#c7a56b]/40 hover:text-[#e7d7b8] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14 ${
				isVisible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
			}`}
			onClick={scrollToTop}
			type="button"
		>
			<svg
				aria-hidden="true"
				className="h-5 w-5"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path d="M12 19V5" />
				<path d="m5 12 7-7 7 7" />
			</svg>
		</button>
	);
}
