import React from 'react'
import { Instagram, Facebook, Linkedin } from 'lucide-react'

export default function Footer(){
  const year = new Date().getFullYear()
  const links = ['Home','Services','Therapists','Resources','Contact']
  const handle = (id) => document.querySelector('#'+id.toLowerCase())?.scrollIntoView({behavior:'smooth'})
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-semibold">Serenity Psychology Centre</div>
            <p className="mt-2 text-sm text-slate-400">Compassionate, evidence-based care for individuals, couples, families, and teens.</p>
          </div>
          <nav className="grid grid-cols-2 gap-2">
            {links.map(l => (
              <button key={l} onClick={()=>handle(l)} className="text-left text-sm text-slate-300 hover:text-white">{l}</button>
            ))}
          </nav>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/5 hover:bg-white/10"><Instagram className="w-5 h-5"/></a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-white/5 hover:bg-white/10"><Facebook className="w-5 h-5"/></a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-white/5 hover:bg-white/10"><Linkedin className="w-5 h-5"/></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        <div className="max-w-6xl mx-auto px-4">© {year} Serenity Psychology Centre • Not a crisis service.</div>
      </div>
    </footer>
  )
}
