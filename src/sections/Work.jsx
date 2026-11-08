import Section from '../components/Section';
import work from '../data/work';

const Work = () => (
  <Section id="work" label="Selected Work" index="03">
    <ol className="border-t border-line">
      {work.map((item, index) => (
        <li key={item.title} className="group border-b border-line py-8 md:py-10" data-reveal>
          <div className="grid gap-x-5 gap-y-4 md:grid-cols-9">
            <p className="text-sm text-muted tabular-nums md:col-span-1">{String(index + 1).padStart(2, '0')}</p>

            <div className="md:col-span-8">
              <h3 className="text-[clamp(2rem,4.6vw,4.75rem)] font-medium leading-[0.95] tracking-[-0.045em] transition-[color,transform] duration-500 ease-out group-hover:translate-x-3 group-hover:text-accent">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-muted">
                {item.context} · {item.year}
              </p>

              <div className="mt-6 grid gap-x-5 gap-y-3 md:grid-cols-8">
                <p className="leading-relaxed md:col-span-5">{item.description}</p>
                <p className="text-sm text-muted md:col-span-3 md:text-right">{item.stack.join(' / ')}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default Work;
