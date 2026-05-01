import Maintenance from './components/Maintenance';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import ValueSection from './components/sections/ValueSection';
import CTASection from './components/sections/CTASection';
import Contact from './components/sections/Contact';
import DecorativeDivider from './components/ui/DecorativeDivider';
import ScrollToTopButton from './components/ui/ScrollToTopButton';

import {
	navigation,
	heroContent,
	services,
	valuePoints,
	ctaContent,
	contactDetails,
	footerLinks
} from './data/siteContent';

const maintenanceMode = import.meta.env.VITE_MAINTENANCE === 'true';

export default function App() {
	if (maintenanceMode) {
		return <Maintenance />;
	}
	return (
		<div className="min-h-screen text-white">
			<a className="skip-link" href="#main-content">
				Skip to main content
			</a>
			<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
				<div className="absolute left-1/2 -top-40 h-112 w-md -translate-x-1/2 rounded-full bg-[#ffb300]/10 blur-3xl" />
				<div className="absolute -right-32 top-32 h-104 w-104 rounded-full bg-[#0a7cff]/14 blur-3xl" />
				<div className="absolute -bottom-40 -left-24 h-96 w-[24rem] rounded-full bg-[#ff6a00]/10 blur-3xl" />
			</div>

			<Header navigation={navigation} />

			<main id="main-content" tabIndex="-1">
				<Hero content={heroContent} />
				<DecorativeDivider />
				<Services services={services} />
				<DecorativeDivider />
				<ValueSection points={valuePoints} />
				<DecorativeDivider />
				<CTASection content={ctaContent} />
				<DecorativeDivider />
				<Contact content={contactDetails} />
			</main>

			<Footer links={footerLinks} />
			<ScrollToTopButton />
		</div>
	);
}
