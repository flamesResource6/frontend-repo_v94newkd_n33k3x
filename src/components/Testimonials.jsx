import React from 'react'

const items = [
  {q:'I felt heard and understood from the first session. My anxiety is manageable for the first time in years.', by:'A.M.', tag:'Individual Therapy · Anxiety'},
  {q:'We communicate so much better now. It changed our relationship.', by:'J.K.', tag:'Couples Therapy'},
  {q:'The tools I learned helped me navigate burnout and set boundaries at work.', by:'S.R.', tag:'Stress & Burnout'},
  {q:'Our family feels closer and more supported.', by:'L.P.', tag:'Family Therapy'},
]

export default function Testimonials(){
  const [index, setIndex] = React.useState(0)
  React.useEffect(()=>{
    const id = setInterval(()=> setIndex(i => (i+1)%items.length), 5000)
    return ()=> clearInterval(id)
  },[])
  const visible = [items[index], items[(index+1)%items.length], items[(index+2)%items.length]]
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#222222]">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {visible.map((t,i)=> (
            <figure key={i} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <blockquote className="text-slate-700">“{t.q}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-600">{t.by} · <span className="text-slate-500">{t.tag}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
