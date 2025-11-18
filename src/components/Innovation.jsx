export default function Innovation() {
  return (
    <section id="innovation" className="py-16 md:py-24 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Innovation jenseits des Regulärmarkts
            </h2>
            <p className="mt-3 text-slate-300/80">
              Wir kombinieren Marktdaten, Wetterprognosen und Netzlast, um alternative Beschaffungswege zu erschließen – von Direktabnahmen über Energiekooperationen bis zu dynamischen Modellen.
            </p>
            <ul className="mt-6 grid gap-3 text-slate-200/90">
              <li className="flex items-start gap-3"><span className="w-1.5 h-6 bg-emerald-400 rounded-full mt-0.5"/> Algorithmen-gestützte Einkaufssignale</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-6 bg-emerald-400 rounded-full mt-0.5"/> PPAs & Direktvermarktung</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-6 bg-emerald-400 rounded-full mt-0.5"/> Transparente Risiko- und Performance-Kennzahlen</li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-sky-500/20 blur-3xl rounded-full" />
              <div className="relative aspect-[4/3] bg-slate-900/60 border border-white/10 rounded-2xl p-6 grid place-items-center text-center text-slate-200">
                <div>
                  <div className="text-5xl font-extrabold text-white">AI + Energy</div>
                  <div className="mt-2 text-slate-300/70">Daten, die handeln. Strategien, die wirken.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
