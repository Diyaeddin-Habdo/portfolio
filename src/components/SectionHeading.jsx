const SectionHeading = ({ index, eyebrow, title, description, centered = false }) => (
  <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
    <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-[#9ca79f]">
      <span className="text-[#b8f24a]">{index}</span>
      <span className="mx-2 text-white/20">/</span>
      {eyebrow}
    </p>
    <h2 className="text-3xl font-bold tracking-[-0.045em] text-[#f2f5ef] sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="mt-5 text-base leading-7 text-[#9ca79f] sm:text-lg">{description}</p>
    )}
  </div>
);

export default SectionHeading;
