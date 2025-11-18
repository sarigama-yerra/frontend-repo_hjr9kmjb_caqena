import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = Object.fromEntries(form.entries());

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ""}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ ok: true, msg: "Vielen Dank! Wir melden uns in Kürze." });
        e.currentTarget.reset();
      } else {
        setStatus({ ok: false, msg: data?.detail || "Etwas ist schiefgelaufen." });
      }
    } catch (err) {
      setStatus({ ok: false, msg: "Netzwerkfehler. Bitte später erneut versuchen." });
    }
  }

  return (
    <section id="kontakt" className="py-16 md:py-24 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Kontakt aufnehmen</h2>
            <p className="mt-3 text-slate-300/80">Sichern Sie sich eine kostenfreie Erstberatung. Wir analysieren Ihr Lastprofil und zeigen konkrete Potenziale.</p>
            <ul className="mt-6 grid gap-3 text-slate-200/90">
              <li>• Beratung für Industrie, Immobilienwirtschaft und öffentliche Hand</li>
              <li>• Ab 1 GWh Jahresverbrauch bis Portfolios im TWh-Bereich</li>
              <li>• Deutschland, Österreich, Schweiz</li>
            </ul>
          </div>
          <form onSubmit={onSubmit} className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required name="name" placeholder="Name" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input required name="email" type="email" placeholder="E-Mail" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <input name="company" placeholder="Unternehmen (optional)" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <textarea required name="message" placeholder="Ihr Anliegen" rows={4} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <button className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-6 py-3 rounded-xl transition-colors">Absenden</button>
            {status && (
              <div className={`${status.ok ? "text-emerald-300" : "text-rose-300"} text-sm`}>
                {status.msg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
