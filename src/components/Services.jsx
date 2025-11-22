import React from 'react'
import { HeartHandshake, Users2, Baby, Home, Briefcase, ShieldCheck } from 'lucide-react'

const filters = ['All','Adults','Couples','Children & Teens','Families','Workplace Stress']
const services = [
  {icon: HeartHandshake, title:'Individual Therapy for Anxiety & Depression', cat:'Adults', desc:'Personalized support using CBT, mindfulness, and evidence-based approaches.'},
  {icon: Users2, title:'Couples & Relationship Counseling', cat:'Couples', desc:'Build healthy communication, repair trust, and strengthen connection.'},
  {icon: Home, title:'Family Therapy', cat:'Families', desc:'Improve dynamics and find shared ground through guided sessions.'},
  {icon: Baby, title:'Child & Teen Counseling', cat:'Children & Teens', desc:'Age-appropriate therapy that supports growth, confidence, and resilience.'},
  {icon: Briefcase, title:'Stress & Burnout Management', cat:'Workplace Stress', desc:'Tools to manage stress, set boundaries, and prevent burnout.'},
  {icon: ShieldCheck, title:'Trauma & PTSD Support', cat:'Adults', desc:'Compassionate, trauma-informed care including grounding and EMDR-informed tools.'},
]

export default function Services(){
  const [active, setActive] = React.useState('All')
  const filtered = services.filter(s => active==='All' ? true : s.cat===active)
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#222222]">Our Therapy Services</h2>
          <p className="mt-2 text-slate-600">A range of evidence-based services tailored to your unique needs.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map(f => (
            <button key={f} onClick={()=>setActive(f)}
              className={`px-4 py-2 rounded-full text-sm transition shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 ${active===f ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'}`}>{f}</button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300">
          {filtered.map((s, i)=> (
            <article key={i} className="group rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 grid place-content-center">
                {React.createElement(s.icon, {className:'w-6 h-6'})}
              </div>
              <h3 className="mt-4 font-semibold text-lg text-[#222222]">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
              <div className="mt-4 text-xs text-slate-500">50-minute sessions · Online & In-person</div>
              <button className="mt-4 text-emerald-700 hover:text-emerald-900 text-sm">Learn More →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
