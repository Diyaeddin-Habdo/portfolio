import { motion as Motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { engineeringPrinciples } from '../data/profile';

const About = () => (
  <section id="about" className="border-y border-white/[0.06] bg-white/[0.018] py-24 sm:py-32">
    <div className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Software that survives real-world complexity."
        />

        <Motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-base leading-8 text-[#a8b1aa] sm:text-lg"
        >
          <p>
            I&apos;m a Computer Engineering graduate from Malatya Turgut Özal University and currently a
            Software Engineer at İLSAN Tekstil. My work sits where business rules, secure APIs, data and
            clear interfaces meet.
          </p>
          <p>
            I enjoy turning operational complexity into dependable products—then carrying those products
            through deployment, observability and production support.
          </p>
        </Motion.div>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {engineeringPrinciples.map((principle, index) => (
          <Motion.article
            key={principle.number}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="surface-card rounded-2xl p-6 sm:p-7"
          >
            <span className="font-mono text-xs text-[#b8f24a]">{principle.number}</span>
            <h3 className="mt-8 text-xl font-bold tracking-[-0.025em] text-white">{principle.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#8e9a91]">{principle.description}</p>
          </Motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default About;
