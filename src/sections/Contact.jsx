import { motion as Motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/profile';

const Contact = () => (
  <section id="contact" className="pb-24 pt-10 sm:pb-32">
    <Motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="section-shell relative overflow-hidden rounded-[1.75rem] border border-[#b8f24a]/15 bg-[#b8f24a] px-6 py-14 text-[#080b0a] sm:px-12 sm:py-16 lg:px-16"
    >
      <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[48px] border-[#080b0a]/[0.06]" aria-hidden="true" />
      <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#304019]">05 / Let&apos;s talk</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.04] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            Have a complex problem worth solving?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#33411f] sm:text-lg">
            I&apos;m always glad to discuss software architecture, product ideas and engineering opportunities.
          </p>
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="focus-ring inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#080b0a] text-2xl text-[#b8f24a] transition hover:rotate-6 sm:h-20 sm:w-20"
          aria-label={`Email ${profile.name}`}
        >
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>

      <div className="relative mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#080b0a]/15 pt-6 text-sm font-bold">
        <a href={`mailto:${profile.email}`} className="focus-ring inline-flex items-center gap-2 rounded-sm hover:underline">
          <FiMail aria-hidden="true" />
          {profile.email}
        </a>
        <a
          href={profile.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex items-center gap-2 rounded-sm hover:underline"
        >
          <FiLinkedin aria-hidden="true" />
          LinkedIn
        </a>
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex items-center gap-2 rounded-sm hover:underline"
        >
          <FiGithub aria-hidden="true" />
          GitHub
        </a>
      </div>
    </Motion.div>
  </section>
);

export default Contact;
