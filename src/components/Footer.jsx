import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { profile } from '../data/profile';

const Footer = () => (
  <footer className="border-t border-white/[0.07] py-8">
    <div className="section-shell flex flex-col items-center justify-between gap-5 sm:flex-row">
      <p className="text-center text-xs text-[#6f7b73] sm:text-left">
        © {new Date().getFullYear()} {profile.name}. Built with care and React.
      </p>
      <div className="flex items-center gap-3">
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-white/10 text-[#9ca79f] transition hover:border-[#b8f24a]/40 hover:text-[#b8f24a]"
        >
          <FiGithub aria-hidden="true" />
        </a>
        <a
          href={profile.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-white/10 text-[#9ca79f] transition hover:border-[#b8f24a]/40 hover:text-[#b8f24a]"
        >
          <FiLinkedin aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
