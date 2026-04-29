import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiMail, HiDownload } from 'react-icons/hi'

const SOCIALS = [
  { icon: FaGithub,   href: 'https://github.com/Majhadi-Mohamed',                    label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mohamed-majhadi-6a5570401', label: 'LinkedIn' },
  { icon: FaTwitter,  href: 'https://twitter.com/',                                  label: 'Twitter' },
  { icon: HiMail,     href: 'mailto:majhadi.1998@gmail.com',                         label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-6
                      flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600
                          flex items-center justify-center text-white font-bold text-xs">
            MM
          </div>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Majhadi Mohamed · All rights reserved.
          </span>
          <a
            href="/CV-MAJHADI.pdf"
            download="Majhadi_Mohamed_CV.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg
                       border border-indigo-400/50 dark:border-indigo-600/50
                       text-indigo-600 dark:text-indigo-400
                       hover:bg-indigo-600 hover:text-white hover:border-indigo-600
                       transition-all duration-200"
          >
            <HiDownload size={12} />
            CV
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-2">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-lg flex items-center justify-center
                         text-slate-400 hover:text-indigo-500
                         hover:bg-slate-100 dark:hover:bg-slate-800
                         transition-all duration-200"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
