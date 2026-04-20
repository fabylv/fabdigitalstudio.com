import SectionIntro from '../ui/SectionIntro';

export default function ValueSection({ points }) {
  return (
    <section className="section-shell">
      <div className="site-container">
        <div className="card-surface px-6 py-10 sm:px-10 sm:py-12">
          <SectionIntro
            kicker="Why choose us"
            title="A modern workflow without the agency bloat"
            description="FabDigital Studio combines strategy, clean front-end execution, and AI-assisted efficiency to deliver polished websites with less drag."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {points.map((point) => (
              <article key={point.title} className="rounded-2xl border border-line bg-surface-soft p-6">
                <h3 className="text-lg font-semibold text-ink-950">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-600">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
