import portrait from '../assets/portrait.webp';
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

      <div className="mt-14">
        <div className="grid grid-cols-12 items-end gap-x-5 gap-y-8">
          <h1 className="col-span-12 text-[17vw] font-semibold leading-[0.8] tracking-[-0.06em] md:col-span-9 md:text-[11vw] 2xl:text-[10rem]">
            <span className="line-mask">
              <span data-hero-line>{profile.firstName}</span>
            </span>
            <span className="line-mask">
              <span data-hero-line>
                {profile.lastName}
                <span className="text-accent">.</span>
              </span>
            </span>
          </h1>

          <figure className="order-first col-span-7 sm:col-span-5 md:order-none md:col-span-3">
            <img
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              width="400"
              height="400"
              className="aspect-[4/5] w-full object-cover"
              data-hero-image
            />
          </figure>
        </div>

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
