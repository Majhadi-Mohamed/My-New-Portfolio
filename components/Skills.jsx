'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiReact, SiHtml5, SiCss, SiBootstrap, SiJavascript,
  SiLaravel, SiNodedotjs, SiExpress, SiPython, SiMysql, SiMongodb,
  SiGit, SiGithub, SiTailwindcss,
} from 'react-icons/si'
import { MdSecurity, MdCloud } from 'react-icons/md'
import { FaProjectDiagram } from 'react-icons/fa'
import { TbApi } from 'react-icons/tb'

const CATEGORIES = [
  {
    title: 'Frontend',
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js',          icon: SiReact,       level: 90, color: '#61DAFB' },
      { name: 'JavaScript (ES6+)', icon: SiJavascript,  level: 90, color: '#F7DF1E' },
      { name: 'HTML5',             icon: SiHtml5,       level: 95, color: '#E34F26' },
      { name: 'CSS3',              icon: SiCss,         level: 90, color: '#1572B6' },
      { name: 'Tailwind CSS',      icon: SiTailwindcss, level: 85, color: '#38BDF8' },
      { name: 'Bootstrap',         icon: SiBootstrap,   level: 85, color: '#7952B3' },
    ],
  },
  {
    title: 'Backend',
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Node.js',       icon: SiNodedotjs, level: 85, color: '#339933' },
      { name: 'Express.js',    icon: SiExpress,   level: 80, color: '#999999' },
      { name: 'Laravel (PHP)', icon: SiLaravel,   level: 85, color: '#FF2D20' },
      { name: 'MongoDB',       icon: SiMongodb,   level: 80, color: '#47A248' },
      { name: 'MySQL / SQL',   icon: SiMysql,     level: 75, color: '#4479A1' },
      { name: 'Python',        icon: SiPython,    level: 70, color: '#3776AB' },
    ],
  },
  {
    title: 'Tools & Methods',
    gradient: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'Git',                  icon: SiGit,            level: 90, color: '#F05032' },
      { name: 'GitHub',               icon: SiGithub,         level: 90, color: '#8b8b8b' },
      { name: 'REST API / JWT',       icon: TbApi,            level: 85, color: '#6366f1' },
      { name: 'Agile Scrum / Kanban', icon: FaProjectDiagram, level: 80, color: '#10B981' },
      { name: 'Cloud Deployment',     icon: MdCloud,          level: 70, color: '#0EA5E9' },
      { name: 'Security & Auth',      icon: MdSecurity,       level: 70, color: '#EF4444' },
    ],
  },
]

function SkillBar({ skill, inVw, delay }) {
  const Icon = skill.icon
  return (
    <div className="flex items-center gap-3 group">
      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800
                      flex items-center justify-center flex-shrink-0
                      group-hover:scale-110 transition-transform duration-200">
        <Icon size={15} style={{ color: skill.color }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between mb-1.5">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">
            {skill.name}
          </span>
          <span className="text-xs text-slate-400 ml-2 flex-shrink-0">{skill.level}%</span>
        </div>
        <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
            initial={{ width: 0 }}
            animate={inVw ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 0.9, delay, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const ref  = useRef(null)
  const inVw = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-28 bg-slate-50/80 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inVw ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
            My Tech Stack
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Technologies and tools I use to build robust, scalable, and performant applications.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800
                         bg-white dark:bg-slate-900
                         hover:border-indigo-200 dark:hover:border-indigo-800
                         hover:shadow-xl hover:shadow-indigo-500/5
                         transition-all duration-300"
              initial={{ opacity: 0, y: 32 }}
              animate={inVw ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.12 }}
            >
              <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${cat.gradient} mb-5`} />
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-6">
                {cat.title}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    inVw={inVw}
                    delay={ci * 0.08 + si * 0.08 + 0.3}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
