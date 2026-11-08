import SectionLabel from './SectionLabel';

const Section = ({ id, label, index, children, className = '' }) => (
  <section id={id} className={`shell py-16 md:py-24 ${className}`}>
    <div className="h-px w-full bg-ink" data-rule />
    <div className="mt-6 grid grid-cols-12 gap-x-5 gap-y-10 md:mt-8">
      <div className="col-span-12 md:col-span-3">
        <SectionLabel index={index}>{label}</SectionLabel>
      </div>
      <div className="col-span-12 md:col-span-9">{children}</div>
    </div>
  </section>
);

export default Section;
