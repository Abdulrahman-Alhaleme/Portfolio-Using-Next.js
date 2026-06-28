import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const projects = [
  {
    title: 'Acoustic Anomaly Detection for Smart Factories',
    category: 'AI · Embedded · Full-Stack',
    description:
      'A real-time machine fault detection system driven by sound. An ESP32-S3 with an INMP441 microphone captures audio, extracts MFCC features, and runs a Random Forest classifier to detect anomalies. Results stream to a React monitoring dashboard with instant Telegram Bot alerts.',
    tech: ['ESP32-S3', 'Python', 'scikit-learn', 'MFCC', 'React', 'Telegram API'],
    github: 'https://github.com/abdulrahman-alhaleme',
    demo: null,
    featured: true,
  },
];

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">

          {/* Left – Title */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('right', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Real-world projects combining web development, embedded systems,
              and machine learning — built end-to-end.
            </motion.p>
          </div>

          {/* Right – Project cards */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col gap-6 flex-1 xl:max-h-[480px] overflow-y-auto xl:pr-2 scrollbar scrollbar-thin scrollbar-thumb-accent"
          >
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-[rgba(65,47,123,0.15)] border border-accent/20 rounded-lg px-8 py-8 hover:bg-[rgba(65,47,123,0.25)] transition-all duration-300"
              >
                {project.featured && (
                  <span className="text-accent text-xs uppercase tracking-widest mb-3 block">
                    ★ Featured Project
                  </span>
                )}
                <div className="text-white/40 text-sm mb-1 capitalize">{project.category}</div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-white/60 mb-5 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, ti) => (
                    <span
                      key={ti}
                      className="text-xs bg-accent/10 text-accent border border-accent/20 rounded px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-x-4 text-lg">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-all duration-300 flex items-center gap-x-2 text-sm"
                    >
                      <FaGithub /> View on GitHub
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Work;
