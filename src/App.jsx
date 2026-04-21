import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import SelectedWork from './components/sections/SelectedWork';
import ValueSection from './components/sections/ValueSection';
import Process from './components/sections/Process';
import CTASection from './components/sections/CTASection';
import Contact from './components/sections/Contact';

import {
	navigation,
	heroContent,
	services,
	selectedWork,
	valuePoints,
	processSteps,
	ctaContent,
	contactDetails,
	footerLinks
} from './data/siteContent';

export default function App() {
	return (
		<div className="min-h-screen bg-[#07111f] text-white">
			<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
				<div className="absolute left-1/2 -top-40 h-112 w-md -translate-x-1/2 rounded-full bg-[#ebc05d]/10 blur-3xl" />
				<div className="absolute -right-32 top-32 h-104 w-104 rounded-full bg-[#1b4b7a]/20 blur-3xl" />
				<div className="absolute -bottom-40 -left-24 h-96 w-[24rem] rounded-full bg-[#0d8db8]/10 blur-3xl" />
			</div>

			<Header navigation={navigation} />

			<main>
				<Hero content={heroContent} />
				<Services services={services} />
				<SelectedWork projects={selectedWork} />
				<ValueSection points={valuePoints} />
				<Process steps={processSteps} />
				<CTASection content={ctaContent} />
				<Contact content={contactDetails} />
			</main>

			<Footer links={footerLinks} />
		</div>
	);
}
