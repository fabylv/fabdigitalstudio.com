import SectionIntro from '../ui/SectionIntro';

export default function Services({ services }) {
  return (
    <section className="section-shell" id="services">
      <div className="site-container">
        <SectionIntro
          kicker="Services"
          title="The website work most businesses actually need"
          description="A practical service stack designed to improve credibility, clarity, and performance without adding unnecessary complexity."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <article key={service.title} className="glass-panel hover-lift group p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-400 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(79,70,229,0.24)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-brand-100 via-cyan-100 to-transparent" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink-950">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
