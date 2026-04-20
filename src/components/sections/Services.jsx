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
            <article
              key={service.title}
              className="card-surface group p-7 transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-sm font-semibold text-brand-700">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-brand-100 to-transparent" />
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
