import { useEffect, useRef } from 'react';

export default function useScrollReveal(options = {}) {
	const sectionRef = useRef(null);

	useEffect(() => {
		const root = sectionRef.current;
		if (!root) return undefined;

		const revealElements = root.querySelectorAll('[data-reveal]');
		if (!revealElements.length) return undefined;

		const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

		const setAllVisible = (visible) => {
			revealElements.forEach((element) => {
				element.setAttribute('data-visible', visible ? 'true' : 'false');
			});
		};

		if (motionQuery.matches) {
			setAllVisible(true);
			return undefined;
		}

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

		const handleMotionPreferenceChange = (event) => {
			if (!event.matches) return;
			observer.disconnect();
			setAllVisible(true);
		};

		motionQuery.addEventListener('change', handleMotionPreferenceChange);

		return () => {
			observer.disconnect();
			motionQuery.removeEventListener('change', handleMotionPreferenceChange);
		};
	}, [options.rootMargin, options.threshold]);

	return sectionRef;
}
