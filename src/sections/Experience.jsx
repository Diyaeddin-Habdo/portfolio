import Section from '../components/Section';
import experience from '../data/experience';

const Experience = () => (
  <Section id="experience" label="Experience" index="02">
    <ol>
      {experience.map((job) => (
        <li key={job.company} className="grid gap-x-5 gap-y-6 border-b border-line py-10 first:pt-0 last:border-b-0 md:grid-cols-9">
          <div className="md:col-span-3" data-reveal>
            <p className="flex items-center gap-2 text-sm font-medium">
              {job.current && <span className="h-2 w-2 rounded-full bg-accent" />}
              {job.period}
            </p>
            <p className="mt-1 text-sm text-muted">{job.location}</p>
          </div>

          <div className="md:col-span-6">
            <div data-reveal>
              <h3 className="text-3xl font-medium tracking-[-0.03em] md:text-5xl">{job.company}</h3>
              <p className="mt-2 text-lg text-muted">{job.role}</p>
            </div>

            <ul className="mt-8 grid gap-x-8 gap-y-4 text-[0.95rem] leading-relaxed lg:grid-cols-2">
              {job.highlights.map((highlight, index) => (
                <li key={highlight} className="flex gap-3" data-reveal>
                  <span className="pt-0.5 text-xs text-muted tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-muted" data-reveal>
              {job.stack.join(' / ')}
            </p>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
