import { intro, profile } from '../data/profile';
import { scrollToTarget } from '../lib/motion';

const Hero = () => {
  const cvUrl = `${import.meta.env.BASE_URL}${profile.cvFileName}`;

  return (
    <section id="top" className="shell flex min-h-[100svh] flex-col justify-between pb-6 pt-28 md:pb-10 md:pt-32">
      <div className="grid grid-cols-12 gap-x-5 gap-y-6 text-sm">
        <p className="col-span-12 font-medium md:col-span-3" data-hero-fade>
          ({profile.role})
        </p>
        <p className="col-span-12 max-w-md text-base leading-relaxed text-muted md:col-span-5 md:text-lg" data-hero-fade>
          {intro}
        </p>
        <div className="col-span-12 flex flex-col gap-1 md:col-span-4 md:items-end md:text-right" data-hero-fade>
          <p className="flex items-center gap-2 font-medium">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            Software Engineer at İLSAN Tekstil
          </p>
          <p className="text-muted">M.Sc. AI Engineering, in progress</p>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="text-[18.5vw] font-semibold leading-[0.8] tracking-[-0.065em] md:text-[15.4vw]">
          <span className="line-mask">
            <span data-hero-line>{profile.firstName}</span>
          </span>
          <span className="line-mask md:text-right">
            <span data-hero-line>
              {profile.lastName}
              <span className="text-accent">.</span>
            </span>
          </span>
        </h1>

        <div className="mt-8 grid grid-cols-12 gap-x-5 gap-y-4 border-t border-line pt-5 text-sm md:mt-10">
          <p className="col-span-6 md:col-span-3" data-hero-fade>
            {profile.location}
          </p>
          <p className="col-span-6 md:col-span-3" data-hero-fade>
            {profile.focus} · PostgreSQL
          </p>
          <a
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
            className="link-underline col-span-6 justify-self-start font-medium md:col-span-3"
            data-hero-fade
          >
            Download CV ↗
          </a>
          <a
            href="#about"
            onClick={(event) => {
              event.preventDefault();
              scrollToTarget('#about');
            }}
            className="col-span-6 justify-self-end text-muted transition-colors hover:text-ink md:col-span-3"
            data-hero-fade
          >
            Scroll ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
