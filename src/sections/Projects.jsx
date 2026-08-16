import { motion as Motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import projects from '../data/projects';

const Projects = () => (
  <section id="projects" className="border-y border-white/[0.06] bg-white/[0.018] py-24 sm:py-32">
    <div className="section-shell">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          title="Products shaped around the problem."
          description="A selection of production, web, mobile and systems projects across my engineering journey."
        />
        <a
          href="https://github.com/Diyaeddin-Habdo"
          target="_blank"
          rel="noreferrer"
          className="text-link focus-ring w-fit rounded-sm"
        >
          Explore GitHub
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <Motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className={`surface-card group flex h-full flex-col rounded-2xl p-6 sm:p-8 ${
              project.featured ? 'md:col-span-2 lg:grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:p-10' : ''
            }`}
          >
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#b8f24a]">{project.type}</p>
              <h3
                className={`mt-4 font-bold tracking-[-0.04em] text-white ${
                  project.featured ? 'text-3xl sm:text-4xl' : 'text-2xl'
                }`}
              >
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#8e9a91] sm:text-base">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/[0.09] px-3 py-1.5 font-mono text-[0.65rem] text-[#879189]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link focus-ring mt-8 w-fit rounded-sm"
                >
                  View project
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              )}
            </div>

            {project.highlights && (
              <div className="mt-9 border-t border-white/[0.08] pt-7 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#6f7b73]">Under the hood</p>
                <ul className="mt-5 space-y-5">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlight} className="flex gap-4 text-sm leading-6 text-[#a8b1aa]">
                      <span className="font-mono text-[0.65rem] text-[#b8f24a]">
                        {String(highlightIndex + 1).padStart(2, '0')}
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
