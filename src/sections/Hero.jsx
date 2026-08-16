import { motion as Motion } from 'framer-motion';
import { FiArrowDownRight, FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import profileImage from '../assets/profile.jpeg';
import { profile } from '../data/profile';

const Hero = () => {
  const cvUrl = `${import.meta.env.BASE_URL}${profile.cvFileName}`;

  return (
    <section id="home" className="section-shell flex min-h-[100svh] items-center pb-20 pt-32 sm:pt-36">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b8f24a]/20 bg-[#b8f24a]/[0.06] px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[#b8f24a]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#b8f24a]" />
            Software Engineer · Available to connect
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.065em] text-[#f2f5ef] sm:text-6xl lg:text-[5.2rem]">
            I build the systems behind
            <span className="block text-[#b8f24a]">complex work.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#9ca79f] sm:text-lg">
            I&apos;m {profile.name}, a full-stack software engineer building secure, scalable business
            applications with .NET, React and PostgreSQL.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[#9ca79f]">
            <span className="inline-flex items-center gap-2">
              <FiMapPin className="text-[#b8f24a]" aria-hidden="true" />
              {profile.location}
            </span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>English · Turkish · Arabic</span>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="accent-button focus-ring">
              Explore my work
              <FiArrowDownRight aria-hidden="true" />
            </a>
            <a href={cvUrl} target="_blank" rel="noreferrer" className="ghost-button focus-ring">
              <FiDownload aria-hidden="true" />
              View resume
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full px-1 py-2 text-sm font-semibold text-[#9ca79f] transition hover:text-white"
            >
              <FiGithub aria-hidden="true" />
              GitHub
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full px-1 py-2 text-sm font-semibold text-[#9ca79f] transition hover:text-white"
            >
              <FiLinkedin aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative mx-auto w-full max-w-[31rem] lg:mx-0 lg:ml-auto"
        >
          <div className="absolute -inset-4 rotate-2 rounded-[2.1rem] border border-[#b8f24a]/15" aria-hidden="true" />
          <div className="surface-card relative overflow-hidden rounded-[1.8rem] p-3">
            <div className="relative aspect-[4/4.45] overflow-hidden rounded-[1.25rem] bg-[#121915]">
              <img
                src={profileImage}
                alt="Diyaeddin Habdo"
                className="h-full w-full object-cover object-[center_28%] grayscale-[15%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b0a] via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-[#b8f24a]">Current focus</p>
                <p className="mt-2 max-w-sm text-xl font-bold leading-tight tracking-[-0.025em] text-white sm:text-2xl">
                  Multi-tenant ERP systems for textile manufacturing
                </p>
              </div>
            </div>
          </div>

          <div className="surface-card absolute -bottom-8 -left-3 rounded-2xl px-4 py-3 sm:-left-10 sm:px-5 sm:py-4">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[#6f7b73]">Core stack</p>
            <p className="mt-1 text-sm font-bold text-white">.NET 9 · React 19 · PostgreSQL</p>
          </div>

          <a
            href="#experience"
            className="focus-ring absolute -right-2 top-8 grid h-12 w-12 place-items-center rounded-full bg-[#b8f24a] text-lg text-[#080b0a] shadow-xl transition hover:rotate-6 sm:-right-6"
            aria-label="Go to experience"
          >
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
