import { motion as Motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import experience from '../data/experience';

const Experience = () => (
  <section id="experience" className="py-24 sm:py-32">
    <div className="section-shell">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="Building production systems, not just features."
        description="A growing track record across enterprise software, full-stack delivery and secure application architecture."
      />

      <div className="mt-14 border-t border-white/[0.08]">
        {experience.map((item, index) => (
          <Motion.article
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="grid gap-7 border-b border-white/[0.08] py-10 lg:grid-cols-[0.35fr_0.65fr] lg:gap-14 lg:py-14"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#9ca79f]">{item.period}</p>
                {item.current && (
                  <span className="rounded-full border border-[#b8f24a]/20 bg-[#b8f24a]/5 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-[#b8f24a]">
                    Current
                  </span>
                )}
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-[-0.035em] text-white">{item.role}</h3>
              <p className="mt-2 text-sm font-semibold text-[#b8f24a]">{item.company}</p>
              <p className="mt-1 text-sm text-[#6f7b73]">{item.location}</p>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-[#c1c8c3]">{item.summary}</p>
              <ul className="mt-6 space-y-3">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-6 text-[#8e9a91]">
                    <span className="mt-[0.65rem] h-1 w-1 shrink-0 rounded-full bg-[#b8f24a]" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-2">
                {item.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 font-mono text-[0.68rem] text-[#9ca79f]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </Motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
