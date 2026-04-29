'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiUser } from 'react-icons/hi'
import { FaPlane, FaBook, FaDumbbell, FaSearch } from 'react-icons/fa'

const INFO = [
  { icon: HiUser,           label: 'Age',      value: '28 years old' },
  { icon: HiMail,           label: 'Email',    value: 'majhadi.1998@gmail.com', href: 'mailto:majhadi.1998@gmail.com' },
  { icon: HiPhone,          label: 'Phone',    value: '+212 634493136',          href: 'tel:+212634493136' },
  { icon: HiLocationMarker, label: 'Location', value: 'Inezgane, Agadir, Morocco' },
]

const LANGUAGES = [
  { name: 'Arabic',  level: 'Native',               pct: 100 },
  { name: 'French',  level: 'Read, spoken, written', pct: 85  },
  { name: 'English', level: 'Read, spoken, written', pct: 80  },
]

const INTERESTS = [
  { icon: FaPlane,    label: 'Travel' },
  { icon: FaBook,     label: 'Reading' },
  { icon: FaDumbbell, label: 'Sport' },
  { icon: FaSearch,   label: 'Web Research' },
]

const SOFT_SKILLS = [
  'Leadership', 'Teamwork', 'Project Management',
  'Time Management', 'Adaptability', 'Communication',
]

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const ref  = useRef(null)
  const inVw = useInView(ref, { once: true, margin: '-80px' })
  const from = direction === 'left'  ? { x: -32, opacity: 0 }
             : direction === 'right' ? { x: 32,  opacity: 0 }
             : { y: 24, opacity: 0 }
  return (
    <motion.div
      ref={ref}
      initial={from}
      animate={inVw ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  const ref  = useRef(null)
  const inVw = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="section-label">About</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
              Who am I?
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn direction="left" delay={0.1}>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-5">
              Full-stack development student at the Cité des Métiers d&apos;Agadir, specializing in
              building modern web applications with{' '}
              <strong className="text-slate-900 dark:text-slate-200 font-semibold">
                React, Node.js, and Laravel
              </strong>
              . I build complete solutions — frontend, backend, REST APIs, and databases.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10">
              Dynamic, creative, and problem-solving oriented, I work with agile methodologies{' '}
              <strong className="text-slate-900 dark:text-slate-200 font-semibold">
                (Scrum / Kanban)
              </strong>
              .
            </p>

            <div className="space-y-4">
              {INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50
                                  flex items-center justify-center text-indigo-500 flex-shrink-0">
                    <Icon size={17} />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium text-slate-700 dark:text-slate-300
                                   hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="font-medium text-slate-700 dark:text-slate-300">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-5">
              {/* Languages */}
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800
                              bg-white dark:bg-slate-900/60" ref={ref}>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-5">
                  Languages
                </h3>
                <div className="space-y-4">
                  {LANGUAGES.map((lang, i) => (
                    <div key={lang.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {lang.name}
                        </span>
                        <span className="text-xs text-slate-400">{lang.level}</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                          initial={{ width: 0 }}
                          animate={inVw ? { width: `${lang.pct}%` } : {}}
                          transition={{ duration: 0.9, delay: 0.4 + i * 0.1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800
                              bg-white dark:bg-slate-900/60">
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Interests
                </h3>
                <div className="grid grid-cols-2 gap-2.5">
                  {INTERESTS.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2.5 p-3 rounded-xl
                                 bg-slate-50 dark:bg-slate-800/60
                                 text-slate-600 dark:text-slate-400"
                    >
                      <Icon size={14} className="text-indigo-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft skills */}
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800
                              bg-white dark:bg-slate-900/60">
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SOFT_SKILLS.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold
                                 bg-indigo-50 dark:bg-indigo-950/50
                                 text-indigo-600 dark:text-indigo-400
                                 border border-indigo-100 dark:border-indigo-900"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
