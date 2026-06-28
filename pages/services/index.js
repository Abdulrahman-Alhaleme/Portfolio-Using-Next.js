import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { RxDesktop, RxRocket, RxCrop, RxReader, RxPencil2 } from 'react-icons/rx';

const services = [
  {
    icon: <RxDesktop />,
    title: 'Frontend Development',
    description:
      'Building responsive, interactive UIs with React, JavaScript, HTML, and CSS. Focus on clean code, performance, and great user experience.',
  },
  {
    icon: <RxRocket />,
    title: 'Backend Development',
    description:
      'Designing and implementing RESTful APIs and server-side logic with Node.js. Scalable, secure, and maintainable architecture.',
  },
  {
    icon: <RxCrop />,
    title: 'Embedded Systems & IoT',
    description:
      'Firmware and applications for ESP32-S3 devices. Sensor integration, communication protocols, and cloud connectivity for real-world IoT systems.',
  },
  {
    icon: <RxReader />,
    title: 'AI / ML Integration',
    description:
      'ML pipelines in Python with scikit-learn — from MFCC feature extraction to training and deploying classifiers in production systems.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Full-Stack Projects',
    description:
      'End-to-end development: from database design and API to frontend and deployment. One developer, full ownership.',
  },
];

const Services = () => {
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
              My Services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('right', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              From sleek web interfaces to AI-powered IoT systems — I bring ideas
              to life across the full stack.
            </motion.p>
          </div>

          {/* Right – Cards */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid xl:grid-cols-3 gap-6 xl:max-h-[480px] overflow-y-auto xl:pr-2 scrollbar scrollbar-thin scrollbar-thumb-accent"
          >
            {services.map((item, i) => (
              <div
                key={i}
                className="bg-[rgba(65,47,123,0.15)] rounded-lg px-6 py-8 flex flex-col gap-y-4 hover:bg-[rgba(65,47,123,0.3)] transition-all duration-300 cursor-default"
              >
                <div className="text-4xl text-accent">{item.icon}</div>
                <div className="text-lg font-semibold">{item.title}</div>
                <p className="leading-normal text-white/50">{item.description}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Services;
