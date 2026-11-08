import SectionLabel from '../components/SectionLabel';
import { profile } from '../data/profile';

const channels = [
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replaceAll(' ', '')}` },
  { label: 'LinkedIn', value: 'diyaeddin-habdo', href: profile.linkedinUrl, external: true },
  { label: 'GitHub', value: 'Diyaeddin-Habdo', href: profile.githubUrl, external: true },
  { label: 'Resume', value: 'Download CV', href: `${import.meta.env.BASE_URL}${profile.cvFileName}`, external: true },
];

const Contact = () => (
  <section id="contact" className="shell pt-16 md:pt-24">
    <div className="h-px w-full bg-ink" data-rule />
    <div className="mt-6 md:mt-8">
      <SectionLabel index="06">Contact</SectionLabel>
    </div>

    <h2 className="mt-12 text-[15vw] font-semibold leading-[0.82] tracking-[-0.06em] md:mt-16 md:text-[9vw] 2xl:text-[9rem]">
      <span className="line-mask">
        <span data-reveal>Let&apos;s talk</span>
      </span>
      <span className="line-mask md:text-right">
        <span data-reveal>
          together<span className="text-accent">.</span>
        </span>
      </span>
    </h2>

    <div className="mt-16 grid grid-cols-12 gap-x-5 gap-y-10 md:mt-24">
      <div className="col-span-12 md:col-span-6 md:col-start-4" data-reveal>
        <p className="text-sm text-muted">Write to me</p>
        <a
          href={`mailto:${profile.email}`}
          className="link-underline mt-2 inline-block text-[clamp(1.5rem,2.8vw,2.75rem)] font-medium tracking-[-0.04em] transition-colors hover:text-accent"
        >
          {profile.email}
        </a>
      </div>

      <ul className="col-span-12 grid gap-x-5 gap-y-6 sm:grid-cols-2 md:col-span-9 md:col-start-4 lg:grid-cols-4">
        {channels.map((channel) => (
          <li key={channel.label} className="border-t border-line pt-4" data-reveal>
            <p className="text-sm text-muted">{channel.label}</p>
            <a
              href={channel.href}
              {...(channel.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="link-underline mt-1 inline-block font-medium"
            >
              {channel.value}
              {channel.external && ' ↗'}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Contact;
