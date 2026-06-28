import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">

          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-6"
          >
            What People <span className="text-accent">Say</span>
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[560px] mb-10"
          >
            I&apos;m actively building my professional network and collaborating on
            meaningful projects. Testimonials from clients and collaborators will
            be featured here soon — stay tuned.
          </motion.p>

          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-x-2 bg-accent text-white px-8 py-3 rounded-full hover:bg-accent/80 transition-all duration-300 capitalize font-medium"
            >
              Work with me <HiArrowRight className="text-lg" />
            </Link>
            <Link
              href="https://github.com/abdulrahman-alhaleme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 border border-white/20 text-white px-8 py-3 rounded-full hover:border-accent hover:text-accent transition-all duration-300 capitalize font-medium"
            >
              View my GitHub <HiArrowRight className="text-lg" />
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Testimonials;
