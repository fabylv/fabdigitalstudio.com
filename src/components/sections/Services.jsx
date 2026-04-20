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

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {services.map((service, index) => {
            const layoutClasses = [
              'lg:col-span-7 lg:min-h-[19rem]',
              'lg:col-span-5 lg:translate-y-8',
              'lg:col-span-5 lg:-translate-y-6',
              'lg:col-span-7 lg:min-h-[18rem]',
            ];

            return (
              <article key={service.title} className={`glass-panel hover-lift group p-7 ${layoutClasses[index] ?? 'lg:col-span-6'}`}>
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 via-cyan-400 to-accent-400 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(47,123,255,0.26)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-brand-500/45 via-cyan-300/30 to-transparent" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-ink-950 sm:text-2xl">{service.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-ink-600">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
