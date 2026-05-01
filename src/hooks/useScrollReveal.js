import { useEffect, useRef } from 'react';

export default function useScrollReveal(options = {}) {
	const sectionRef = useRef(null);

	useEffect(() => {
		const root = sectionRef.current;
		if (!root) return undefined;

		const revealElements = root.querySelectorAll('[data-reveal]');
		if (!revealElements.length) return undefined;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					entry.target.setAttribute('data-visible', entry.isIntersecting ? 'true' : 'false');
				});
			},
			{
				threshold: options.threshold ?? 0.22,
				rootMargin: options.rootMargin ?? '0px 0px -10% 0px'
			}
		);

		revealElements.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	}, [options.rootMargin, options.threshold]);

	return sectionRef;
}
