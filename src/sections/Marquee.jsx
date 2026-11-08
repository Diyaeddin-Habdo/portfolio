import { marqueeItems } from '../data/skills';

const MarqueeRow = ({ hidden }) => (
  <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
    {marqueeItems.map((item) => (
      <span key={item} className="flex items-center">
        <span className="px-6 md:px-10">{item}</span>
        <span className="text-accent">✱</span>
      </span>
    ))}
  </div>
);

const Marquee = () => (
  <div className="overflow-hidden border-y border-ink py-5 text-4xl font-medium tracking-tight md:py-7 md:text-6xl">
    <div className="marquee-track flex w-max">
      <MarqueeRow />
      <MarqueeRow hidden />
    </div>
  </div>
);

export default Marquee;
