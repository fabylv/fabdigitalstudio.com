import SectionIntro from '../ui/SectionIntro';

export default function Contact({ content }) {
  return (
    <section className="section-shell" id="contact">
      <div className="site-container grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="glass-panel overflow-hidden p-8 sm:p-10">
          <SectionIntro kicker="Contact" title={content.title} description={content.description} />
          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <p className="text-sm font-medium text-ink-600">Email</p>
              <a className="mt-2 inline-block text-base font-semibold text-ink-950" href={`mailto:${content.email}`}>
                {content.email}
              </a>
            </div>
            <div className="rounded-2xl border border-white/70 bg-gradient-to-br from-brand-50 to-cyan-50 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <p className="text-sm font-medium text-ink-700">Typical projects</p>
              <ul className="mt-3 space-y-2 text-sm text-ink-600">
                <li>• New service business websites</li>
                <li>• Strategic redesigns</li>
                <li>• Landing pages for offers and ads</li>
                <li>• Speed and front-end cleanup</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 sm:p-10">
          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-sm font-medium text-ink-700">
                Name
                <input
                  className="mt-2 w-full rounded-2xl border border-white/70 bg-white/85 px-4 py-3 text-base text-ink-950 outline-none ring-0 transition placeholder:text-ink-600/60 focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                  name="name"
                  placeholder="Your name"
                  type="text"
                />
              </label>
              <label className="block text-sm font-medium text-ink-700">
                Email
                <input
                  className="mt-2 w-full rounded-2xl border border-white/70 bg-white/85 px-4 py-3 text-base text-ink-950 outline-none ring-0 transition placeholder:text-ink-600/60 focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                  name="email"
                  placeholder="you@business.com"
                  type="email"
                />
              </label>
            </div>

            <label className="block text-sm font-medium text-ink-700">
              Message
              <textarea
                className="mt-2 min-h-40 w-full rounded-3xl border border-white/70 bg-white/85 px-4 py-3 text-base text-ink-950 outline-none ring-0 transition placeholder:text-ink-600/60 focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                name="message"
                placeholder="Tell us about your project, goals, or current website."
              />
            </label>

            <button className="button-primary" type="submit">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
