import Button from '../ui/Button';

export default function Hero({ content }) {
  return (
    <section className="section-shell relative overflow-hidden pt-16 sm:pt-20" id="top">
      <div className="site-container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="relative z-10 animate-rise">
          <span className="section-kicker">{content.eyebrow}</span>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl lg:text-[4.4rem] lg:leading-[0.98]">
            <span className="block">Modern websites</span>
            <span className="block gradient-text">for brands that need to feel current.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-600">{content.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={content.primaryCta.href}>{content.primaryCta.label}</Button>
            <Button href={content.secondaryCta.href} variant="secondary">
              {content.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="chip">AI-assisted workflow</span>
            <span className="chip">Launch-ready pages</span>
            <span className="chip">Fast performance</span>
          </div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {content.stats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-2xl px-5 py-5">
                <dt className="text-sm font-medium text-ink-600">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-ink-950">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-rise">
          <div className="absolute -left-4 top-10 hidden animate-float-slow lg:block">
            <div className="chip">Conversion-focused layouts</div>
          </div>
          <div className="absolute -right-4 bottom-14 hidden animate-float-delayed lg:block">
            <div className="chip">Clean front-end build</div>
          </div>
          <div className="absolute inset-0 rounded-[2.25rem] bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_38%),radial-gradient(circle_at_82%_22%,rgba(34,211,238,0.18),transparent_30%)] blur-2xl" />
          <div className="glass-panel soft-grid relative overflow-hidden p-4 sm:p-6">
            <div className="absolute inset-x-8 top-6 h-24 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.16),transparent_68%)] blur-2xl" />
            <img alt="FabDigital Studio website preview" className="relative w-full rounded-2xl border border-white/80 shadow-[0_28px_70px_rgba(15,23,42,0.12)]" src={content.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
