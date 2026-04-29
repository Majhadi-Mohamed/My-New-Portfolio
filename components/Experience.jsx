'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiAcademicCap, HiBriefcase, HiCode } from 'react-icons/hi'

const TIMELINE = [
  {
    icon: HiAcademicCap,
    title: 'DTS — Digital Development (in progress)',
    org: 'Cité des Métiers et des Compétences',
    period: '2024 – 2026',
    location: 'Agadir, Morocco',
    iconBg: 'bg-indigo-500',
    badge: 'Education',
    badgeColor: 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900',
  },
  {
    icon: HiCode,
    title: 'Pharmacy Management System',
    org: 'Personal Project',
    period: '2025 – 2026',
    location: 'Agadir',
    detail: 'Stack: Laravel · React.js · Node.js · Express.js · MongoDB',
    iconBg: 'bg-emerald-500',
    badge: 'Project',
    badgeColor: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900',
  },
  {
    icon: HiCode,
    title: 'Client Management App (CRM)',
    org: 'Personal Project',
    period: '2025 – 2026',
    location: 'Agadir',
    detail: 'Stack: React.js · Node.js · Express.js · MongoDB · JWT · Git',
    iconBg: 'bg-blue-500',
    badge: 'Project',
    badgeColor: 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900',
  },
  {
    icon: HiCode,
    title: 'Educational Platform — SITE-EDU',
    org: 'Fayçal Private School',
    period: '2024 – 2025',
    location: 'Agadir',
    detail: 'Stack: Laravel · React.js · Node.js · Express.js · MongoDB',
    iconBg: 'bg-orange-500',
    badge: 'Project',
    badgeColor: 'bg-orange-50 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 border-orange-100 dark:border-orange-900',
  },
  {
    icon: HiBriefcase,
    title: 'Internship — Mathematics & Physics Teacher',
    org: 'Fayçal Private School',
    period: '2021 – 2022',
    location: 'Agadir',
    detail: 'Four-month internship · Student academic supervision',
    iconBg: 'bg-violet-500',
    badge: 'Internship',
    badgeColor: 'bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 border-violet-100 dark:border-violet-900',
  },
  {
    icon: HiAcademicCap,
    title: 'Bachelor — Physical Sciences',
    org: 'Faculté des Sciences Appliquées Ibn Zohr',
    period: '2019 – 2020',
    location: 'Agadir',
    iconBg: 'bg-slate-400',
    badge: 'Education',
    badgeColor: 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700',
  },
  {
    icon: HiAcademicCap,
    title: 'Baccalaureate — Physical Sciences',
    org: 'Lycée Abdellah Ibn Yassine',
    period: '2015 – 2016',
    location: 'Agadir',
    iconBg: 'bg-slate-400',
    badge: 'Education',
    badgeColor: 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700',
  },
]

export default function Experience() {
  const ref  = useRef(null)
  const inVw = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-28 bg-slate-50/80 dark:bg-slate-900/40">
      <div className="max-w-3xl mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inVw ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
            Experience &amp; Education
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800" />
          <div className="space-y-6">
            {TIMELINE.map((entry, i) => {
              const Icon = entry.icon
              return (
                <motion.div
                  key={`${entry.title}-${i}`}
                  className="relative pl-14"
                  initial={{ opacity: 0, x: -24 }}
                  animate={inVw ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className={`absolute left-0 w-10 h-10 rounded-xl ${entry.iconBg}
                                   flex items-center justify-center shadow-md`}>
                    <Icon size={18} className="text-white" />
                  </div>

                  <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800
                                  bg-white dark:bg-slate-900
                                  hover:border-indigo-200 dark:hover:border-indigo-800
                                  hover:shadow-lg hover:shadow-indigo-500/5
                                  transition-all duration-200">
                    <div className="flex flex-wrap items-start gap-2 mb-2">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${entry.badgeColor}`}>
                        {entry.badge}
                      </span>
                      <span className="text-xs font-semibold text-indigo-500 ml-auto flex-shrink-0">
                        {entry.period}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1 leading-snug">
                      {entry.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{entry.org}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{entry.location}</p>
                    {entry.detail && (
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 pt-3
                                    border-t border-slate-100 dark:border-slate-800">
                        {entry.detail}
                      </p>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
