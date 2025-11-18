export default function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-40 opacity-40 bg-[radial-gradient(ellipse_at_top_right,theme(colors.emerald.500/30),transparent_50%),radial-gradient(ellipse_at_bottom_left,theme(colors.sky.500/25),transparent_50%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 rounded-full px-3 py-1 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Moderne Energiebeschaffung
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Strategische Energieeinkäufe für Strom & Gas
            </h1>
            <p className="mt-5 text-lg text-slate-200/90 leading-relaxed">
              Wir kaufen Energie intelligent ein – datengetrieben, transparent und unabhängig vom Regulierungsmarkt. So sichern wir unseren Kunden planbare Kosten, Versorgungssicherheit und echte Wettbewerbsvorteile.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#kontakt" className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-6 py-3 rounded-xl transition-colors">
                Kostenfreie Erstberatung
              </a>
              <a href="#leistungen" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 rounded-xl transition-colors border border-white/10">
                Leistungen entdecken
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-white">-15%</div>
                <div className="text-slate-300/70 text-sm">Ø Energiekosten</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-slate-300/70 text-sm">Marktmonitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-slate-300/70 text-sm">Transparenz</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">+10</div>
                <div className="text-slate-300/70 text-sm">Jahre Erfahrung</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full" />
            <div className="relative bg-slate-800/60 border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="grid gap-4">
                {["Lastprofilanalyse","Beschaffungsstrategien","Risikomanagement","Portfoliosteuerung"].map((item) => (
                  <div key={item} className="flex items-center justify-between bg-white/5 rounded-xl p-4 border border-white/10">
                    <span className="text-slate-200">{item}</span>
                    <span className="text-emerald-300 text-sm">aktiv</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-sky-500/10 border border-white/10 text-slate-100">
                Unser Algorithmus bewertet täglich die Marktpreise und empfiehlt optimale Einkaufszeitpunkte.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
