import SectionIntro from '../ui/SectionIntro';

export default function Contact({ content }) {
  return (
    <section className="section-shell" id="contact">
      <div className="site-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card-surface p-8 sm:p-10">
          <SectionIntro kicker="Contact" title={content.title} description={content.description} />
          <div className="mt-8 rounded-2xl border border-line bg-surface-soft p-5">
            <p className="text-sm font-medium text-ink-600">Email</p>
            <a className="mt-2 inline-block text-base font-semibold text-ink-950" href={`mailto:${content.email}`}>
              {content.email}
            </a>
          </div>
        </div>

        <div className="card-surface p-8 sm:p-10">
          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-sm font-medium text-ink-700">
                Name
                <input
                  className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base text-ink-950 outline-none transition focus:border-ink-950"
                  name="name"
                  placeholder="Your name"
                  type="text"
                />
              </label>
              <label className="block text-sm font-medium text-ink-700">
                Email
                <input
                  className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base text-ink-950 outline-none transition focus:border-ink-950"
                  name="email"
                  placeholder="you@business.com"
                  type="email"
                />
              </label>
            </div>

            <label className="block text-sm font-medium text-ink-700">
              Message
              <textarea
                className="mt-2 min-h-40 w-full rounded-3xl border border-line bg-white px-4 py-3 text-base text-ink-950 outline-none transition focus:border-ink-950"
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
