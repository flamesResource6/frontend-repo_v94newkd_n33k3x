import React from 'react'

const items = [
  {q:'Evidence-based therapies', a:'We draw from modalities like CBT, ACT, EMDR-informed strategies, and mindfulness-based approaches to provide care grounded in research.'},
  {q:'Trauma-informed care', a:'Safety and choice are central. We move at your pace and collaboratively build coping resources before processing difficult experiences.'},
  {q:'Culturally sensitive and inclusive', a:'We honor your identities and experiences, striving to provide care that is affirming and respectful.'},
  {q:'Confidential and ethical practice', a:'Your privacy matters. We follow strict ethical guidelines and maintain confidentiality in all aspects of care.'},
]

export default function Approach(){
  const [open, setOpen] = React.useState(0)
  return (
    <section id="approach" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#222222]">Our Therapeutic Approach</h2>
        </div>
        <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {items.map((it, i)=> (
            <div key={i}>
              <button aria-expanded={open===i} aria-controls={`acc-${i}`} onClick={()=> setOpen(open===i? -1: i)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded-2xl">
                <span className="font-medium text-[#222222]">{it.q}</span>
                <span className={`ml-4 transition ${open===i? 'rotate-180' : ''}`}>⌄</span>
              </button>
              <div id={`acc-${i}`} className={`px-5 overflow-hidden transition-[max-height,opacity] duration-300 ${open===i? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="pb-4 text-slate-600">{it.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
