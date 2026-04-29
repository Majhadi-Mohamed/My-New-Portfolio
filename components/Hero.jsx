'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiMail, HiArrowDown, HiDownload } from 'react-icons/hi'

const SOCIALS = [
  { icon: FaGithub,   href: 'https://github.com/Majhadi-Mohamed',                    label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mohamed-majhadi-6a5570401', label: 'LinkedIn' },
  { icon: FaTwitter,  href: 'https://twitter.com/',                                  label: 'Twitter' },
  { icon: HiMail,     href: 'mailto:majhadi.1998@gmail.com',                         label: 'Email' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4  w-[500px] h-[500px] bg-indigo-500/15 dark:bg-indigo-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-3xl animate-blob [animation-delay:2s]" />
        <div className="absolute bottom-1/4 left-1/2  w-[360px] h-[360px] bg-pink-500/10  dark:bg-pink-500/5  rounded-full blur-3xl animate-blob [animation-delay:4s]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Radial fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,white_100%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,#020617_100%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Available badge */}
          <motion.div variants={item} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold
                             bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400
                             border border-indigo-200 dark:border-indigo-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Profile image */}
          <motion.div variants={item} className="flex justify-center mb-8">
            <div className="relative inline-block">
              {/* Animated outer rings */}
              <motion.div
                className="absolute inset-[-8px] rounded-full border-2 border-indigo-500/30 dark:border-indigo-400/40"
                animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute inset-[-16px] rounded-full border border-purple-500/15 dark:border-purple-400/20"
                animate={{ scale: [1, 1.04, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />
              {/* Main circle */}
              <div
                className="w-36 h-36 md:w-44 md:h-44 rounded-full
                           ring-4 ring-indigo-500 dark:ring-indigo-400 overflow-hidden
                           shadow-[0_4px_24px_rgba(99,102,241,0.3)]
                           dark:shadow-[0_0_40px_rgba(99,102,241,0.5),0_0_80px_rgba(139,92,246,0.2)]
                           transition-shadow duration-300"
              >
                <img
                  src="/Majhadi1.jpeg"
                  alt="Majhadi Mohamed"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Online indicator */}
              <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white dark:border-slate-950 overflow-hidden">
                <div className="w-full h-full rounded-full bg-emerald-400 animate-ping opacity-75" />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-3 leading-none
                       text-slate-900 dark:text-slate-100"
          >
            MAJHADI MOHAMED
          </motion.h1>

          {/* Title */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1
                       text-xl md:text-2xl font-semibold text-slate-500 dark:text-slate-400 mb-8"
          >
            <span className="text-indigo-600 dark:text-indigo-400">Backend</span>
            <span className="text-indigo-400">·</span>
            <span>Developer</span>
            <span className="text-indigo-400">·</span>
            <span>Full-Stack</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={item}
            className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-10"
          >
            Full-stack student at Cité des Métiers d&apos;Agadir, specializing in building modern web
            applications — from scalable REST APIs and database architecture to responsive frontends.
            Experienced with{' '}
            <strong className="text-slate-700 dark:text-slate-300">Node.js, Laravel, React</strong>{' '}
            and agile methodologies.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            {/* Download CV — primary */}
            <motion.a
              href="/CV-MAJHADI.pdf"
              download="Majhadi_Mohamed_CV.pdf"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white
                         bg-gradient-to-r from-indigo-600 to-purple-600
                         shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50
                         hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <HiDownload size={17} />
              Download CV
            </motion.a>

            {/* Contact — outline */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm
                         text-slate-700 dark:text-slate-300
                         border border-slate-300 dark:border-slate-700
                         hover:bg-slate-50 dark:hover:bg-slate-800/60
                         hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={item} className="flex items-center justify-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-xl flex items-center justify-center
                           text-slate-500 dark:text-slate-400
                           border border-slate-200 dark:border-slate-800
                           hover:text-indigo-600 dark:hover:text-indigo-400
                           hover:border-indigo-300 dark:hover:border-indigo-700
                           hover:bg-indigo-50 dark:hover:bg-indigo-950/40
                           transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.93 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center
                   gap-2 text-slate-400 hover:text-indigo-500 transition-colors group"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
        <HiArrowDown size={15} />
      </motion.a>
    </section>
  )
}
