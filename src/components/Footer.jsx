import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import { scrollToTarget } from '../lib/motion';

const timeFormat = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: profile.timeZone,
});

const Footer = () => {
  const [time, setTime] = useState(() => timeFormat.format(new Date()));

  useEffect(() => {
    const timer = setInterval(() => setTime(timeFormat.format(new Date())), 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="shell mt-20 md:mt-28">
      <div className="grid grid-cols-12 gap-x-5 gap-y-3 border-t border-line py-6 text-sm">
        <p className="col-span-12 md:col-span-3">© {new Date().getFullYear()} {profile.name}</p>
        <p className="col-span-6 text-muted md:col-span-3">
          Malatya · <span className="tabular-nums">{time}</span> GMT+3
        </p>
        <p className="col-span-6 text-muted md:col-span-3">Built with React, GSAP & Lenis</p>
        <button
          type="button"
          onClick={() => scrollToTarget(0)}
          className="link-underline col-span-12 justify-self-start font-medium md:col-span-3 md:justify-self-end"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
