import Section from '../components/Section';
import skillGroups from '../data/skills';

const Skills = () => (
  <Section id="stack" label="Stack" index="04">
    <dl className="border-t border-line">
      {skillGroups.map((group) => (
        <div key={group.title} className="grid gap-x-5 gap-y-2 border-b border-line py-6 md:grid-cols-9" data-reveal>
          <dt className="font-medium md:col-span-3">{group.title}</dt>
          <dd className="text-xl leading-snug tracking-[-0.02em] md:col-span-6 md:text-2xl">
            {group.items.map((item, index) => (
              <span key={item}>
                {index > 0 && <span className="text-accent"> / </span>}
                {item}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default Skills;
