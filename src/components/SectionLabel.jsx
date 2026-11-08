const SectionLabel = ({ children, index }) => (
  <div className="flex items-baseline justify-between gap-4 text-sm md:block" data-reveal>
    <p className="font-medium">({children})</p>
    {index && <p className="text-muted tabular-nums md:mt-2">{index}</p>}
  </div>
);

export default SectionLabel;
