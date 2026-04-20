import Button from '../ui/Button';

export default function Hero({ content }) {
  return (
    <section className="section-shell relative overflow-hidden pt-16 sm:pt-20" id="top">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="relative z-10">
          <span className="section-kicker">{content.eyebrow}</span>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl lg:text-[4.25rem] lg:leading-[1.02]">
            {content.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-600">{content.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={content.primaryCta.href}>{content.primaryCta.label}</Button>
            <Button href={content.secondaryCta.href} variant="secondary">
              {content.secondaryCta.label}
            </Button>
          </div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {content.stats.map((stat) => (
              <div key={stat.label} className="card-surface rounded-2xl px-5 py-5">
                <dt className="text-sm font-medium text-ink-600">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-ink-950">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.18),transparent_30%)] blur-2xl" />
          <div className="card-surface soft-grid relative overflow-hidden p-4 sm:p-6">
            <div className="absolute inset-x-6 top-6 h-24 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.14),transparent_68%)] blur-2xl" />
            <img alt="FabDigital Studio website preview" className="relative w-full rounded-2xl border border-white/70 shadow-[0_24px_60px_rgba(15,23,42,0.10)]" src={content.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
