import React from 'react'

const personas = [
  {emoji:'🌫️', text:"I'm feeling constantly anxious and overwhelmed."},
  {emoji:'💔', text:"I'm struggling in my relationship."},
  {emoji:'🧑‍🎓', text:"My teen is withdrawing and seems different."},
  {emoji:'🔥', text:"I feel stuck, unmotivated, and burnt out."},
  {emoji:'🌧️', text:"I'm dealing with grief or loss."},
  {emoji:'💼', text:"Work stress is taking over my life."},
]

export default function Personas(){
  const handleClick = () => {
    const el = document.querySelector('#services')
    el?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section className="py-12 bg-gradient-to-b from-white to-[#F7F3EE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 overflow-x-auto snap-x snap-mandatory pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {personas.map((p, i)=> (
            <button key={i} onClick={handleClick} className="snap-start min-w-[280px] md:min-w-[320px] bg-white border border-slate-200/70 rounded-2xl p-5 shadow-sm hover:shadow-md transition hover:-translate-y-0.5 text-left">
              <div className="text-2xl">{p.emoji}</div>
              <p className="mt-2 text-slate-700">{p.text}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
