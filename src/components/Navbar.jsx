import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import { scrollToTarget } from '../lib/motion';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'education', label: 'Education' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const navigate = (event, target) => {
    event.preventDefault();
    setIsOpen(false);
    scrollToTarget(target);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        isScrolled || isOpen ? 'bg-paper/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between gap-6 text-sm md:grid md:grid-cols-12 md:gap-x-5">
        <a
          href="#top"
          onClick={(event) => navigate(event, 0)}
          className="font-medium md:col-span-3"
        >
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-6 md:col-span-6 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(event) => navigate(event, `#${link.id}`)}
                className="link-underline pb-0.5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(event) => navigate(event, '#contact')}
          className="group hidden items-center justify-end gap-2 font-medium md:col-span-3 md:flex"
        >
          <span className="h-2 w-2 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
          Let&apos;s talk
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="font-medium md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="shell flex h-[calc(100svh-4rem)] flex-col justify-between pb-8 md:hidden">
          <ul className="border-t border-ink">
            {[...links, { id: 'contact', label: 'Contact' }].map((link, index) => (
              <li key={link.id} className="border-b border-line">
                <a
                  href={`#${link.id}`}
                  onClick={(event) => navigate(event, `#${link.id}`)}
                  className="flex items-baseline justify-between py-4 text-4xl font-medium tracking-tight"
                >
                  {link.label}
                  <span className="text-sm text-muted tabular-nums">0{index + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <a href={`mailto:${profile.email}`} className="text-sm text-muted">
            {profile.email}
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
