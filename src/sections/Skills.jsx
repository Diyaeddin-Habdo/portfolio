import { motion as Motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import skillGroups from '../data/skills';

const Skills = () => (
  <section id="skills" className="py-24 sm:py-32">
    <div className="section-shell">
      <SectionHeading
        index="04"
        eyebrow="Technology"
        title="A stack built for complete product delivery."
        description="I work across application layers while keeping architecture, security and operations in view."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Motion.article
            key={group.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="bg-[#0d1210] p-6 sm:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-bold tracking-[-0.025em] text-white">{group.title}</h3>
              <span className="font-mono text-[0.65rem] text-[#b8f24a]">{group.index}</span>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md bg-white/[0.035] px-2.5 py-1.5 text-xs font-semibold text-[#9ca79f]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
