import Section from '../components/Section';
import { education, languages } from '../data/education';

const Education = () => (
  <Section id="education" label="Education" index="05">
    <ol className="border-t border-line">
      {education.map((item) => (
        <li key={item.degree} className="grid gap-x-5 gap-y-2 border-b border-line py-7 md:grid-cols-9" data-reveal>
          <p className="flex items-center gap-2 text-sm font-medium md:col-span-3">
            {item.current && <span className="h-2 w-2 rounded-full bg-accent" />}
            {item.period}
          </p>
          <div className="md:col-span-6">
            <h3 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">{item.degree}</h3>
            <p className="mt-1 text-muted">{item.school}</p>
          </div>
        </li>
      ))}
    </ol>

    <div className="mt-20 grid gap-x-5 gap-y-8 md:grid-cols-9">
      <p className="text-sm font-medium md:col-span-3" data-reveal>
        (Languages)
      </p>
      <dl className="grid gap-x-5 gap-y-6 sm:grid-cols-3 md:col-span-6">
        {languages.map((language) => (
          <div key={language.name} className="border-t border-line pt-4" data-reveal>
            <dt className="text-2xl font-medium tracking-[-0.03em]">{language.name}</dt>
            <dd className="mt-1 text-sm text-muted">{language.level}</dd>
          </div>
        ))}
      </dl>
    </div>
  </Section>
);

export default Education;
