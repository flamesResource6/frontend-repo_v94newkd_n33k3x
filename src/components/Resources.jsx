import React from 'react'

const posts = [
  {cat:'Anxiety', title:'5 grounding practices to ease anxious moments', excerpt:'Simple, evidence-backed tools you can use anywhere.', read:'5 min read'},
  {cat:'Parenting', title:'Supporting your teen through change', excerpt:'How to spot signs and open supportive conversations.', read:'6 min read'},
  {cat:'Work', title:'Burnout vs. stress: what’s the difference?', excerpt:'Learn the signals and what to do next.', read:'4 min read'},
  {cat:'Relationships', title:'Repairing trust after conflict', excerpt:'Small steps that rebuild safety and connection.', read:'7 min read'},
  {cat:'Mindfulness', title:'A 3-minute breathing reset', excerpt:'Bring your system back to baseline with this practice.', read:'3 min read'},
]

export default function Resources(){
  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#222222]">Learn & Grow</h2>
          <p className="text-slate-600">Articles and resources to support your mental well-being.</p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {posts.map((p,i)=> (
            <article key={i} className="break-inside-avoid mb-6 p-6 bg-gradient-to-br from-[#F7F3EE] to-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition">
              <span className="inline-block text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">{p.cat}</span>
              <h3 className="mt-3 font-semibold text-lg text-[#222222]">{p.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{p.excerpt}</p>
              <div className="mt-3 text-xs text-slate-500">{p.read}</div>
              <button className="mt-3 text-emerald-700 hover:text-emerald-900 text-sm">Read more →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
