import SectionIntro from '../ui/SectionIntro';

export default function ValueSection({ points }) {
  return (
    <section className="section-shell">
      <div className="site-container">
        <div className="overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.16)] sm:px-10 sm:py-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <span className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-semibold text-brand-100">
                Why choose us
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                A modern workflow without the agency bloat
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                FabDigital Studio combines strategy, clean front-end execution, and AI-assisted efficiency to deliver polished websites with less drag.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {points.map((point) => (
                <article key={point.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                  <div className="h-1.5 w-14 rounded-full bg-gradient-to-r from-brand-500 to-cyan-400" />
                  <h3 className="mt-5 text-lg font-semibold text-white">{point.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{point.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
