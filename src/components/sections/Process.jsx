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

        <ol className="relative mt-12 grid gap-6 lg:grid-cols-2 lg:gap-x-12">
          <div className="absolute left-1/2 top-4 hidden h-[calc(100%-2rem)] w-px -translate-x-1/2 bg-gradient-to-b from-brand-500/50 via-cyan-300/35 to-accent-400/35 lg:block" />
          {steps.map((step, index) => (
            <li
              key={step.title}
              className={`glass-panel hover-lift relative p-7 ${index % 2 === 0 ? 'lg:mr-10' : 'lg:ml-10 lg:mt-16'}`}
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-cyan-400 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(47,123,255,0.24)]">
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
