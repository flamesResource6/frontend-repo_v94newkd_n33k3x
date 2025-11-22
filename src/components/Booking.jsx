import React from 'react'

export default function Booking(){
  const [form, setForm] = React.useState({name:'', email:'', phone:'', mode:'Online', time:'Morning', notes:''})
  const [touched, setTouched] = React.useState({})
  const onChange = (e)=> setForm({...form, [e.target.name]: e.target.value})
  const onBlur = (e)=> setTouched({...touched, [e.target.name]: true})
  const validEmail = /.+@.+\..+/.test(form.email)
  const validName = form.name.trim().length>1
  const canSubmit = validEmail && validName

  const onSubmit = (e)=>{
    e.preventDefault()
    if(!canSubmit) return
    alert('Thank you! We will reach out shortly to confirm your appointment.')
  }
  return (
    <section id="booking" className="py-20 bg-[#F7F3EE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#222222]">Book an Appointment</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-[#222222]">New Clients</h3>
            <p className="mt-2 text-slate-600">Schedule your first 50-minute introductory session.</p>
            <a href="#" className="mt-4 inline-block px-4 py-2 rounded-full bg-emerald-600 text-white text-sm shadow">Book Intro Session</a>
          </div>
          <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-[#222222]">Returning Clients</h3>
            <p className="mt-2 text-slate-600">Log into your client portal to manage sessions.</p>
            <a href="#" className="mt-4 inline-block px-4 py-2 rounded-full bg-slate-900 text-white text-sm shadow">Go to Client Portal</a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm grid sm:grid-cols-2 gap-4">
          <Field label="Name" name="name" value={form.name} onChange={onChange} onBlur={onBlur} required invalid={touched.name && !validName} />
          <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} onBlur={onBlur} required invalid={touched.email && !validEmail} />
          <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={onChange} onBlur={onBlur} />
          <Select label="Preferred mode" name="mode" value={form.mode} onChange={onChange} options={["Online","In-person"]} />
          <Select label="Preferred time" name="time" value={form.time} onChange={onChange} options={["Morning","Afternoon","Evening"]} />
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-slate-700">What would you like support with?</label>
            <textarea name="notes" value={form.notes} onChange={onChange} className="mt-1 w-full rounded-xl border-slate-300 focus:border-emerald-400 focus:ring-emerald-400" rows={4} />
          </div>
          <div className="sm:col-span-2 flex justify-end">
            <button disabled={!canSubmit} className="px-5 py-3 rounded-full bg-emerald-600 disabled:opacity-50 text-white shadow">Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}

function Field({label, invalid, ...props}){
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700">{label}</label>
      <input {...props} className={`mt-1 w-full rounded-full border px-4 py-2 focus:outline-none transition shadow-sm ${invalid? 'border-rose-400 focus:ring-rose-400' : 'border-slate-300 focus:border-emerald-400 focus:ring-emerald-400'}`} />
      {invalid && <p className="text-xs text-rose-600 mt-1">Please enter a valid {label.toLowerCase()}.</p>}
    </div>
  )
}

function Select({label, options, ...props}){
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700">{label}</label>
      <select {...props} className="mt-1 w-full rounded-full border px-4 py-2 border-slate-300 focus:border-emerald-400 focus:ring-emerald-400" >
        {options.map(o=> <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}
