'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiCheckCircle } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const CONTACT_INFO = [
  { icon: HiMail,           label: 'Email',    value: 'majhadi.1998@gmail.com', href: 'mailto:majhadi.1998@gmail.com' },
  { icon: HiPhone,          label: 'Phone',    value: '+212 634493136',          href: 'tel:+212634493136' },
  { icon: HiLocationMarker, label: 'Location', value: 'Inezgane, Agadir, Morocco' },
]

const SOCIALS = [
  { icon: FaGithub,   href: 'https://github.com/Majhadi-Mohamed',                    label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mohamed-majhadi-6a5570401', label: 'LinkedIn' },
]

const INITIAL_FORM = { name: '', email: '', message: '' }

export default function Contact() {
  const ref  = useRef(null)
  const inVw = useInView(ref, { once: true, margin: '-80px' })
  const [form,   setForm]   = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('success'); setForm(INITIAL_FORM) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl text-sm ' +
    'border border-slate-200 dark:border-slate-700 ' +
    'bg-slate-50 dark:bg-slate-800 ' +
    'text-slate-900 dark:text-slate-100 ' +
    'placeholder-slate-400 ' +
    'focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 ' +
    'transition-all duration-200'

  return (
    <section id="contact" className="py-28">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inVw ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Feel free to reach out to discuss projects, opportunities, or just to say hello.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -32 }}
            animate={inVw ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-5 rounded-2xl
                           border border-slate-200 dark:border-slate-800
                           bg-white dark:bg-slate-900
                           hover:border-indigo-200 dark:hover:border-indigo-800
                           transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/50
                                flex items-center justify-center text-indigo-500 flex-shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">
                    {label}
                  </span>
                  {href ? (
                    <a href={href} className="font-semibold text-slate-700 dark:text-slate-300
                                              hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{value}</span>
                  )}
                </div>
              </div>
            ))}

            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-4">
                Follow me
              </span>
              <div className="flex gap-3">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl flex items-center justify-center
                               text-slate-500 dark:text-slate-400
                               border border-slate-200 dark:border-slate-700
                               hover:text-white hover:bg-indigo-500 hover:border-indigo-500
                               transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.93 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800
                       bg-white dark:bg-slate-900 space-y-5"
            initial={{ opacity: 0, x: 32 }}
            animate={inVw ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Name</label>
                <input type="text" required placeholder="Your name" value={form.name} onChange={set('name')} className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                <input type="email" required placeholder="your@email.com" value={form.email} onChange={set('email')} className={inputClass} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Message</label>
              <textarea
                required rows={5}
                placeholder="Describe your project or write a message…"
                value={form.message} onChange={set('message')}
                className={`${inputClass} resize-none`}
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full py-3.5 rounded-xl font-semibold text-white text-sm
                         bg-gradient-to-r from-indigo-600 to-purple-600
                         flex items-center justify-center gap-2
                         shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40
                         disabled:opacity-60 disabled:cursor-not-allowed
                         transition-all duration-200"
              whileHover={{ scale: status === 'loading' ? 1 : 1.015 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === 'success' ? (
                <><HiCheckCircle size={18} /> Message sent!</>
              ) : (
                <><HiPaperAirplane size={18} className="rotate-90" /> {status === 'loading' ? 'Sending…' : 'Send Message'}</>
              )}
            </motion.button>

            {status === 'error' && (
              <motion.p className="text-center text-sm text-red-500" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                An error occurred. Please try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
