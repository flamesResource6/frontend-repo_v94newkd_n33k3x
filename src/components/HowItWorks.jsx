import React from 'react'

const steps = [
  {title:'Free 15-minute phone consultation', text:'A quick call to understand your needs and answer questions.'},
  {title:'Get matched with the right therapist', text:'We consider your goals, preferences, and availability.'},
  {title:'Start your personalized therapy plan', text:'Begin sessions with a plan that adapts as you grow.'},
]

export default function HowItWorks(){
  return (
    <section className="py-20 bg-[#F7F3EE]" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#222222]">How It Works</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s,i)=> (
            <div key={i} className="relative rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-emerald-600 text-white grid place-content-center shadow">{i+1}</div>
              <h3 className="font-semibold text-[#222222]">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
