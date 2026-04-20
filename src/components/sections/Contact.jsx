import { useState } from 'react';
import SectionIntro from '../ui/SectionIntro';

export default function Contact({ content }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('_subject', 'New FabDigital Studio inquiry');
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/faby@fabdigitalstudio.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || result.success === 'false') {
        throw new Error('Unable to send form');
      }

      form.reset();
      setStatus({ type: 'success', message: 'Thanks, your message was sent successfully.' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong while sending. Please try again or email faby@fabdigitalstudio.com directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-shell" id="contact">
      <div className="site-container grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="glass-panel overflow-hidden p-8 sm:p-10">
          <SectionIntro kicker="Contact" title={content.title} description={content.description} />
          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_16px_40px_rgba(2,8,23,0.20)]">
              <p className="text-sm font-medium text-ink-600">Email</p>
              <a className="mt-2 inline-block text-base font-semibold text-ink-950" href={`mailto:${content.email}`}>
                {content.email}
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(47,111,228,0.14),rgba(255,111,58,0.12))] p-5 shadow-[0_16px_40px_rgba(2,8,23,0.20)]">
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
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input autoComplete="off" className="hidden" name="_honey" tabIndex="-1" type="text" />

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-sm font-medium text-ink-700">
                Name
                <input
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-base text-ink-950 outline-none ring-0 transition placeholder:text-ink-600/60 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20"
                  name="name"
                  placeholder="Your name"
                  required
                  type="text"
                />
              </label>
              <label className="block text-sm font-medium text-ink-700">
                Email
                <input
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-base text-ink-950 outline-none ring-0 transition placeholder:text-ink-600/60 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20"
                  name="email"
                  placeholder="you@business.com"
                  required
                  type="email"
                />
              </label>
            </div>

            <label className="block text-sm font-medium text-ink-700">
              Message
              <textarea
                className="mt-2 min-h-40 w-full rounded-3xl border border-white/10 bg-white/[0.06] px-4 py-3 text-base text-ink-950 outline-none ring-0 transition placeholder:text-ink-600/60 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20"
                name="message"
                placeholder="Tell us about your project, goals, or current website."
                required
              />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button className="button-primary" disabled={isSubmitting} type="submit">
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>

              {status.message ? (
                <p
                  className={`text-sm ${
                    status.type === 'success' ? 'text-cyan-300' : 'text-accent-400'
                  }`}
                >
                  {status.message}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
