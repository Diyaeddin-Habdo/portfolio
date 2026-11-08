import Section from '../components/Section';
import { about, stats } from '../data/profile';

const unitStyles = {
  live: 'bg-accent',
  progress: 'unit-progress',
  planned: 'bg-line',
};

const unitLabels = {
  live: 'Live',
  progress: 'In progress',
  planned: 'Planned',
};

const UnitProgress = ({ units }) => (
  <div className="mt-6">
    <div className="flex gap-1.5" role="img" aria-label="1 of 5 factory units live, the second in progress">
      {units.map((state, index) => (
        <span key={index} className={`h-2 flex-1 ${unitStyles[state]}`} />
      ))}
    </div>
    <div className="mt-2 flex gap-4 text-xs text-muted">
      {['live', 'progress'].map((state) => (
        <span key={state} className="flex items-center gap-1.5">
          <span className={`h-2 w-2 ${unitStyles[state]}`} />
          {unitLabels[state]}
        </span>
      ))}
    </div>
  </div>
);

const About = () => (
  <Section id="about" label="About" index="01">
    <p
      className="text-[clamp(1.75rem,3.4vw,3.5rem)] font-medium leading-[1.12] tracking-[-0.03em]"
      data-words
    >
      {about.split(' ').map((word, index) => (
        <span key={index} data-word>
          {word}{' '}
        </span>
      ))}
    </p>

    <div className="mt-20 grid gap-x-5 gap-y-12 md:mt-28 md:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="border-t border-line pt-5" data-reveal>
          <p className="text-[clamp(4rem,7vw,7.5rem)] font-semibold leading-none tracking-[-0.06em] tabular-nums">
            <span data-count={stat.value}>{stat.value}</span>
            <span className="text-accent">{stat.suffix}</span>
          </p>
          <p className="mt-4 font-medium">{stat.label}</p>
          <p className="mt-1 max-w-xs text-sm leading-relaxed text-muted">{stat.description}</p>
          {stat.units && <UnitProgress units={stat.units} />}
        </div>
      ))}
    </div>
  </Section>
);

export default About;
