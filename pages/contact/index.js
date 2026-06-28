import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { HiArrowRight } from 'react-icons/hi2';
import { BsEnvelope, BsGeoAlt } from 'react-icons/bs';
import { RiLinkedinLine, RiGithubLine } from 'react-icons/ri';
import Link from 'next/link';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const mailtoHref = `mailto:abdulrahman.alhaleme@gmail.com?subject=${encodeURIComponent(
    form.subject || 'Contact from Portfolio'
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  )}`;

  return (
    <div className="h-full bg-primary/30 py-32">
      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center gap-x-12">

        {/* Left – Contact info */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col flex-1 items-center xl:items-start text-center xl:text-left mb-8 xl:mb-0"
        >
          <h2 className="h2 mb-4">
            Let&apos;s <span className="text-accent">Connect</span>
          </h2>
          <p className="mb-8 max-w-[400px]">
            Have a project in mind, want to collaborate, or just say hello?
            I&apos;d love to hear from you.
          </p>

          <div className="flex flex-col gap-y-5 text-white/60 text-sm">
            <div className="flex items-center gap-x-4">
              <BsEnvelope className="text-accent text-xl shrink-0" />
              <a
                href="mailto:abdulrahman.alhaleme@gmail.com"
                className="hover:text-accent transition-all duration-300"
              >
                abdulrahman.alhaleme@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-x-4">
              <BsGeoAlt className="text-accent text-xl shrink-0" />
              <span>Amman, Jordan</span>
            </div>
            <div className="flex items-center gap-x-4">
              <RiLinkedinLine className="text-accent text-xl shrink-0" />
              <Link
                href="https://www.linkedin.com/in/abdulrahman-al-haleme/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-all duration-300"
              >
                linkedin.com/in/abdulrahman-al-haleme
              </Link>
            </div>
            <div className="flex items-center gap-x-4">
              <RiGithubLine className="text-accent text-xl shrink-0" />
              <Link
                href="https://github.com/abdulrahman-alhaleme"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-all duration-300"
              >
                github.com/abdulrahman-alhaleme
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right – Form */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:max-w-[45%]"
        >
          <form className="flex flex-col gap-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex gap-x-4">
              <input
                name="name"
                placeholder="name"
                className="input"
                value={form.name}
                onChange={handleChange}
              />
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <input
              name="subject"
              placeholder="subject"
              className="input"
              value={form.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="message"
              className="textarea"
              value={form.message}
              onChange={handleChange}
            />
            <a
              href={mailtoHref}
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 flex items-center justify-center gap-x-2 hover:border-accent hover:bg-accent transition-all duration-300 capitalize font-medium"
            >
              Send <HiArrowRight />
            </a>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
