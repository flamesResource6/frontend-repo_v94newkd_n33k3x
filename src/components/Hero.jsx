import React from 'react'
import Spline from '@splinetool/react-spline'
import { CheckCircle } from 'lucide-react'

const badges = [
  'Licensed Therapists',
  'Online & In-Person',
  '100% Confidential'
]

export default function Hero(){
  return (
    <section id="home" className="relative pt-24">
      <div className="absolute inset-0 h-[70vh] md:h-[80vh]">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white pointer-events-none" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center min-h-[70vh] md:min-h-[80vh]">
          <div className="text-white">
            <p className="inline-block px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 text-sm mb-4">Trusted mental health care</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              <AnimatedHeading />
            </h1>
            <p className="mt-4 text-white/90 text-lg max-w-xl">Serenity Psychology Centre offers confidential, evidence-based therapy for individuals, couples, families, and teens.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#booking" className="px-5 py-3 rounded-full bg-emerald-500 text-white shadow hover:shadow-lg hover:scale-[1.02] transition">Book Your First Session</a>
              <a href="#resources" className="px-5 py-3 rounded-full bg-white/10 ring-1 ring-white/30 text-white hover:bg-white/20 transition">Take a 2-minute self-check</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              {badges.map((b)=> (
                <span key={b} className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 ring-1 ring-white/20 text-sm">
                  <CheckCircle className="w-4 h-4" /> {b}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-gradient-to-br from-[#CDE6F5] via-[#F7F3EE] to-[#D9C6E8]">
              <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop" alt="Therapy" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
            </div>
            <FloatingDots />
          </div>
        </div>
      </div>
    </section>
  )
}

function AnimatedHeading(){
  const phrases = [
    'Find calm, clarity, and support —',
    'Breathe. Heal. Grow —',
    'You are not alone —'
  ]
  const [index, setIndex] = React.useState(0)
  React.useEffect(()=>{
    const id = setInterval(()=> setIndex((i)=> (i+1)%phrases.length), 3500)
    return ()=> clearInterval(id)
  },[])
  return (
    <span>
      <span className="block">{phrases[index]}</span>
      <span className="block text-emerald-200">one session at a time.</span>
    </span>
  )
}

function FloatingDots(){
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -top-4 -left-6 w-24 h-24 rounded-full bg-emerald-300/30 blur-2xl animate-pulse" />
      <div className="absolute bottom-6 -right-8 w-28 h-28 rounded-full bg-sky-300/30 blur-2xl animate-[float_6s_ease-in-out_infinite]" />
      <style>{`@keyframes float {0%{transform:translateY(0)}50%{transform:translateY(-8px)}100%{transform:translateY(0)}}`}</style>
    </div>
  )
}
