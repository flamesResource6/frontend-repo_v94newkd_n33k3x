import React from 'react'

const therapists = [
  {name:'Dr. Sara Ahmed, PsyD', tag:'Anxiety · Burnout · Transitions', img:'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop', bio:'Sara is a licensed clinical psychologist specializing in anxiety, burnout, and life transitions. She integrates CBT, mindfulness, and ACT to help clients build resilience.'},
  {name:'Michael Chen, LMFT', tag:'Couples · Communication', img:'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=800&auto=format&fit=crop', bio:'Michael focuses on couples work and relationship dynamics, helping partners repair trust and deepen connection through evidence-based approaches.'},
  {name:'Aisha Patel, LCSW', tag:'Trauma-informed · EMDR', img:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop', bio:'Aisha provides trauma-informed care and uses EMDR-informed techniques to support healing in a safe, collaborative environment.'},
  {name:'Luis Martinez, PhD', tag:'Teens · Family Systems', img:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop', bio:'Luis supports teens and families, bringing a systems perspective to foster understanding, boundaries, and communication.'},
]

export default function Therapists(){
  const [open, setOpen] = React.useState(null)
  return (
    <section id="therapists" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#222222]">Meet Our Therapists</h2>
          <p className="text-slate-600">Warm, qualified, and here to support you.</p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]"></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapists.map((t, i)=> (
            <div key={i} className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="relative">
                <img src={t.img} alt={t.name} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/20" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-[#222222]">{t.name}</h3>
                <p className="text-sm text-slate-600">{t.tag}</p>
                <button onClick={()=> setOpen(t)} className="mt-4 text-emerald-700 hover:text-emerald-900 text-sm">View Profile →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 grid place-items-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={()=> setOpen(null)} />
          <div className="relative max-w-xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <img src={open.img} alt={open.name} className="h-64 md:h-full w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#222222]">{open.name}</h3>
                <p className="text-sm text-slate-600">{open.tag}</p>
                <p className="mt-3 text-slate-700 text-sm leading-relaxed">{open.bio}</p>
                <div className="mt-5 flex gap-3">
                  <a href="#booking" onClick={(e)=>{e.preventDefault();document.querySelector('#booking')?.scrollIntoView({behavior:'smooth'})}} className="px-4 py-2 rounded-full bg-emerald-600 text-white text-sm shadow">Book Session</a>
                  <button onClick={()=> setOpen(null)} className="px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-sm">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
