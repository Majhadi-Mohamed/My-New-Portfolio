'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { HiSun, HiMoon, HiMenuAlt3, HiX, HiDownload } from 'react-icons/hi'

const NAV_LINKS = [
  { href: '#home',     label: 'Home' },
  { href: '#skills',   label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false)
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [mounted,       setMounted]       = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const ids = ['contact', 'projects', 'skills', 'home']
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'glass shadow-sm shadow-black/5' : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <motion.a
            href="#home"
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600
                       flex items-center justify-center text-white font-bold text-sm
                       shadow-lg shadow-indigo-500/30"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.93 }}
          >
            MM
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.replace('#', '')
              const isActive = activeSection === id
              return (
                <motion.a
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                  whileHover={{ y: -1 }}
                >
                  {label}
                </motion.a>
              )
            })}

            {/* CV button */}
            <motion.a
              href="/CV-MAJHADI.pdf"
              download="Majhadi_Mohamed_CV.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-lg
                         border border-indigo-400 dark:border-indigo-600
                         text-indigo-600 dark:text-indigo-400
                         hover:bg-indigo-600 hover:text-white hover:border-indigo-600
                         dark:hover:bg-indigo-600 dark:hover:text-white
                         transition-all duration-200"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <HiDownload size={13} />
              CV
            </motion.a>
          </div>

          {/* Right: theme toggle + mobile */}
          <div className="flex items-center gap-2">
            {mounted && (
              <motion.button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-9 h-9 rounded-lg flex items-center justify-center
                           text-slate-500 dark:text-slate-400
                           hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <HiSun size={18} /> : <HiMoon size={18} />}
              </motion.button>
            )}
            <motion.button
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center
                         text-slate-500 dark:text-slate-400
                         hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.93 }}
              aria-label="Menu"
            >
              {menuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="md:hidden glass border-t border-slate-200/40 dark:border-slate-700/40"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <nav className="px-6 py-4 flex flex-col gap-1">
                {NAV_LINKS.map(({ href, label }) => {
                  const id = href.replace('#', '')
                  const isActive = activeSection === id
                  return (
                    <a
                      key={href}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={`py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-indigo-600 dark:text-indigo-400'
                          : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                      }`}
                    >
                      {label}
                    </a>
                  )
                })}
                <a
                  href="/CV-MAJHADI.pdf"
                  download="Majhadi_Mohamed_CV.pdf"
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 flex items-center gap-2"
                >
                  <HiDownload size={15} />
                  Download CV
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
