import { useState } from 'react';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { profile } from '../data/profile';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cvUrl = `${import.meta.env.BASE_URL}${profile.cvFileName}`;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#080b0a]/85 backdrop-blur-xl">
      <div className="section-shell flex h-[4.75rem] items-center justify-between">
        <a href="#home" onClick={closeMenu} className="focus-ring flex items-center gap-3 rounded-full">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#b8f24a] font-mono text-sm font-bold text-[#080b0a]">
            DH
          </span>
          <span className="hidden text-sm font-bold tracking-[-0.02em] text-white sm:inline">
            Diyaeddin Habdo
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded-sm text-xs font-semibold uppercase tracking-[0.14em] text-[#9ca79f] transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-white transition hover:border-[#b8f24a]/50 hover:bg-[#b8f24a]/5 sm:flex"
          >
            <FiDownload aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-xl text-white md:hidden"
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-white/[0.07] bg-[#080b0a] px-4 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="section-shell flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="focus-ring border-b border-white/[0.06] py-4 text-sm font-semibold text-[#c6cec8] last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a href={cvUrl} target="_blank" rel="noreferrer" className="accent-button mt-4">
              <FiDownload aria-hidden="true" />
              View resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
