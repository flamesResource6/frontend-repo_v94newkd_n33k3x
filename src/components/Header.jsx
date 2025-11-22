import React, { useEffect, useState } from 'react'
import { Menu, PhoneCall, AlertTriangle, Leaf } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Therapists', href: '#therapists' },
  { label: 'Approach', href: '#approach' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      // set active based on sections
      const sections = navItems.map(n => document.querySelector(n.href)).filter(Boolean)
      let current = '#home'
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect()
        if (rect.top <= 96 && rect.bottom >= 96) {
          current = '#' + sec.id
        }
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <button onClick={() => handleNav('#home')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#A8C3A0] to-[#CDE6F5] grid place-content-center shadow-inner">
              <Leaf className="w-4 h-4 text-emerald-700" />
            </div>
            <span className="font-semibold tracking-tight text-[#222222]">Serenity Psychology Centre</span>
          </button>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className={`px-4 py-2 rounded-full text-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-300 ${active === item.href ? 'bg-emerald-100 text-emerald-900 shadow-sm' : 'hover:bg-emerald-50 text-slate-700'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => handleNav('#booking')} className="px-4 py-2 rounded-full bg-emerald-600 text-white text-sm shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-transform hover:scale-[1.02]">Book a Session</button>
            <a href="#contact" onClick={(e)=>{e.preventDefault();handleNav('#contact')}} className="px-4 py-2 rounded-full border border-rose-200 text-rose-700 text-sm hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-300 inline-flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Emergency Help
            </a>
          </div>

          <button className="md:hidden p-2 rounded-full hover:bg-emerald-50" aria-label="Open menu" onClick={() => setOpen(v=>!v)}>
            <Menu className="w-6 h-6 text-slate-700" />
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pb-4 space-y-3 bg-white/80 backdrop-blur-md">
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className={`px-4 py-2 rounded-full text-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-300 ${active === item.href ? 'bg-emerald-100 text-emerald-900 shadow-sm' : 'hover:bg-emerald-50 text-slate-700'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 pt-2">
            <button onClick={() => handleNav('#booking')} className="flex-1 px-4 py-2 rounded-full bg-emerald-600 text-white text-sm shadow hover:shadow-md">Book a Session</button>
            <a href="#contact" onClick={(e)=>{e.preventDefault();handleNav('#contact')}} className="px-4 py-2 rounded-full border border-rose-200 text-rose-700 text-sm hover:bg-rose-50 inline-flex items-center gap-2">
              <PhoneCall className="w-4 h-4" /> Emergency
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
