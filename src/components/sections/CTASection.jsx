import Button from '../ui/Button';

export default function CTASection({ content }) {
  return (
    <section className="section-shell">
      <div className="site-container">
        <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 px-6 py-12 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:px-10 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <span className="section-kicker">Start your project</span>
            <h2 className="section-title">{content.title}</h2>
            <p className="section-copy">{content.description}</p>
          </div>
          <div className="mt-8 lg:mt-0">
            <Button href={content.action.href}>{content.action.label}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
