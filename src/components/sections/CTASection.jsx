import Button from '../ui/Button';

export default function CTASection({ content }) {
  return (
    <section className="section-shell">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0b1328_0%,#17315f_20%,#2f7bff_54%,#35d6e6_84%,#ff6a3d_120%)] px-6 py-12 text-white shadow-[0_30px_80px_rgba(11,19,40,0.38)] sm:px-10 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-white/14 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-accent-400/25 blur-3xl" />
          <div className="absolute right-28 top-10 h-24 w-24 rounded-full bg-cyan-200/25 blur-3xl" />
          <div className="relative max-w-2xl">
            <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-semibold text-white">
              Start your project
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{content.title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">{content.description}</p>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <Button className="!bg-accent-400 !text-surface-soft hover:!bg-accent-500" href={content.action.href}>
              {content.action.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
