import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from 'react-icons/fa';
import { SiVisualstudiocode } from 'react-icons/si';

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend',
        icons: [<FaHtml5 key="html" />, <FaCss3 key="css" />, <FaJs key="js" />, <FaReact key="react" />],
      },
      {
        title: 'Backend',
        icons: [<FaNodeJs key="node" />, <FaPython key="python" />],
      },
      {
        title: 'Tools',
        icons: [<FaGitAlt key="git" />, <FaGithub key="github" />, <SiVisualstudiocode key="vscode" />],
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'B.Sc. in Computer & Communications Engineering',
        stage: 'Al-Zaytoonah University of Jordan · 2022 – 2026',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Full-Stack Web Developer · Freelance',
        stage: '2023 – Present',
      },
      {
        title: 'Embedded Systems & IoT Developer',
        stage: '2024 – Present',
      },
      {
        title: 'AI / ML Systems · Academic Research',
        stage: '2025 – 2026',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">

        {/* Left – Bio + Counters */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Full-Stack Developer &{' '}
            <span className="text-accent">IoT Enthusiast</span>
          </motion.h2>

          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I&apos;m <span className="text-white font-semibold">Abdulrahman Al-Haleme</span>,
            a passionate Full-Stack Web Developer and Computer &amp; Communications
            Engineering student at Al-Zaytoonah University of Jordan (graduating 2026).
            I build modern React interfaces, scalable Node.js backends, and
            AI-powered IoT systems with ESP32.
          </motion.p>

          {/* Counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of Experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Technologies
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right – Tabs */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* Tab buttons */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`${
                  index === i
                    ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    : ''
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Tab content */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                {item.stage && <div className="hidden md:flex">–</div>}
                {item.stage && <div>{item.stage}</div>}
                {item.icons && (
                  <div className="flex gap-x-4">
                    {item.icons.map((icon, j) => (
                      <div key={j} className="text-2xl text-white">
                        {icon}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
