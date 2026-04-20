import Button from '../ui/Button';

export default function Hero({ content }) {
  return (
    <section className="section-shell pt-16 sm:pt-20" id="top">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <span className="section-kicker">{content.eyebrow}</span>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
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
              <div key={stat.label} className="card-surface px-5 py-5">
                <dt className="text-sm font-medium text-ink-600">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-ink-950">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="card-surface overflow-hidden p-4 sm:p-6">
          <img alt="Fab Digital Studio website preview" className="w-full rounded-2xl" src={content.image} />
        </div>
      </div>
    </section>
  );
}
