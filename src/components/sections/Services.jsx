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
          {services.map((service) => (
            <article key={service.title} className="card-surface p-7">
              <h3 className="text-xl font-semibold text-ink-950">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
