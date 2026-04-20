import SectionIntro from '../ui/SectionIntro';

export default function Process({ steps }) {
  return (
    <section className="section-shell" id="process">
      <div className="site-container">
        <SectionIntro
          align="center"
          kicker="Process"
          title="A clear path from idea to launch"
          description="Simple, focused steps that keep the project moving and make collaboration easy for busy clients."
        />

        <ol className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="card-surface p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-700">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
