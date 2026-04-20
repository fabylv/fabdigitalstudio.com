import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import ValueSection from './components/sections/ValueSection';
import Process from './components/sections/Process';
import CTASection from './components/sections/CTASection';
import Contact from './components/sections/Contact';
import {
  contactDetails,
  ctaContent,
  footerLinks,
  heroContent,
  navigation,
  processSteps,
  services,
  valuePoints,
} from './data/siteContent';

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(circle_at_top_left,rgba(47,111,228,0.24),transparent_32%),radial-gradient(circle_at_82%_10%,rgba(47,215,230,0.18),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(255,111,58,0.12),transparent_16%)]" />
      <Header navigation={navigation} />
      <main>
        <Hero content={heroContent} />
        <Services services={services} />
        <ValueSection points={valuePoints} />
        <Process steps={processSteps} />
        <CTASection content={ctaContent} />
        <Contact content={contactDetails} />
      </main>
      <Footer links={footerLinks} />
    </div>
  );
}
