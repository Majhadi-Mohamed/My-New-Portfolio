'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiCode } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const PROJECTS = [
  {
    title: 'Pharmacy Management System',
    year: '2025 – 2026',
    description:
      'Full-stack pharmacy management application — inventory, clients, sales, and prescriptions. ' +
      'Secure REST API architecture with a reactive interface.',
    stack: ['Laravel', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Majhadi-Mohamed',
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'hover:shadow-emerald-500/10',
  },
  {
    title: 'Client Management App (CRM)',
    year: '2025 – 2026',
    description:
      'Complete CRM system for managing clients, contacts, and business opportunities. ' +
      'JWT-secured authentication and real-time synchronization.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Git'],
    github: 'https://github.com/Majhadi-Mohamed',
    gradient: 'from-indigo-500 to-purple-500',
    glow: 'hover:shadow-indigo-500/10',
  },
  {
    title: 'Educational Platform — SITE-EDU',
    year: '2024 – 2025',
    description:
      'Educational platform for Fayçal Private School: course management, student enrollment, ' +
      'online content delivery, and an admin dashboard.',
    stack: ['Laravel', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Majhadi-Mohamed',
    gradient: 'from-orange-500 to-rose-500',
    glow: 'hover:shadow-orange-500/10',
  },
]

export default function Projects() {
  const ref  = useRef(null)
  const inVw = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-28">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inVw ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
            My Work
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Full-stack applications built end-to-end, from database design to user interface.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              className={`group relative flex flex-col p-6 rounded-2xl
                         border border-slate-200 dark:border-slate-800
                         bg-white dark:bg-slate-900
                         hover:border-transparent
                         hover:shadow-2xl ${project.glow}
                         hover:-translate-y-2
                         transition-all duration-300 cursor-default`}
              initial={{ opacity: 0, y: 36 }}
              animate={inVw ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.14 }}
            >
              {/* Top gradient bar */}
              <div className={`w-full h-0.5 rounded-full bg-gradient-to-r ${project.gradient} mb-6`} />

              {/* Year + icon row */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full
                                 bg-indigo-50 dark:bg-indigo-950/50
                                 text-indigo-600 dark:text-indigo-400
                                 border border-indigo-100 dark:border-indigo-900">
                  {project.year}
                </span>
                <HiCode
                  size={18}
                  className="text-slate-300 dark:text-slate-700
                             group-hover:text-indigo-400 transition-colors duration-200"
                />
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg leading-snug text-slate-900 dark:text-slate-100 mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium
                               bg-slate-50 dark:bg-slate-800
                               text-slate-600 dark:text-slate-400
                               border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold
                             text-slate-500 dark:text-slate-400
                             hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <FaGithub size={14} />
                  Source
                </a>
              </div>

              {/* Hover overlay */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                              transition-opacity duration-300 pointer-events-none
                              bg-gradient-to-br ${project.gradient} group-hover:opacity-[0.03]`} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
