import React from 'react'

export default function Contact(){
  const [form, setForm] = React.useState({name:'', email:'', phone:'', message:'', online:false})
  const onChange = (e)=>{
    const {name, type, checked, value} = e.target
    setForm(f=> ({...f, [name]: type==='checkbox'? checked : value}))
  }
  const onSubmit = (e)=>{ e.preventDefault(); alert('Thanks! We will be in touch within 1-2 business days.') }
  return (
    <section id="contact" className="py-20 bg-[#F7F3EE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#222222]">Contact & Location</h2>
            <p className="mt-2 text-slate-600">Have a question? Send us a message and we will get back to you soon.</p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <Field label="Name" name="name" value={form.name} onChange={onChange} />
              <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} />
              <Field label="Phone (optional)" name="phone" type="tel" value={form.phone} onChange={onChange} />
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" value={form.message} onChange={onChange} className="mt-1 w-full rounded-xl border-slate-300 focus:border-emerald-400 focus:ring-emerald-400" rows={4} />
              </div>
              <label className="flex items-center gap-2 text-sm text-slate-700">
                <input type="checkbox" name="online" checked={form.online} onChange={onChange} className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-400" />
                I prefer online sessions
              </label>
              <div className="pt-2">
                <button className="px-5 py-3 rounded-full bg-emerald-600 text-white shadow">Send Message</button>
              </div>
              <p className="text-xs text-slate-500">If you are in crisis or in immediate danger, please contact your local emergency services or crisis hotline instead of using this form.</p>
            </form>
          </div>
          <div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-[#222222]">Serenity Psychology Centre</h3>
              <p className="mt-2 text-slate-600">123 Willow Lane, Suite 204<br/>Riverbend, RB 12345</p>
              <p className="mt-2 text-slate-600">Phone: (555) 123-4567<br/>Email: hello@serenitycentre.example</p>
              <p className="mt-2 text-slate-600">Mon–Fri: 8:00am – 7:00pm<br/>Sat: 9:00am – 2:00pm</p>
              <div className="mt-4 h-56 w-full rounded-xl bg-gradient-to-br from-[#CDE6F5] to-[#D9C6E8] grid place-content-center text-slate-600 border border-slate-200">Map placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({label, ...props}){
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700">{label}</label>
      <input {...props} className="mt-1 w-full rounded-full border px-4 py-2 border-slate-300 focus:border-emerald-400 focus:ring-emerald-400" />
    </div>
  )
}
