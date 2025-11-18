export default function Process() {
  const steps = [
    { title: "Analyse", text: "Lastprofil, Vertragslage und Risikoneigung verstehen" },
    { title: "Strategie", text: "Ziele definieren und Beschaffungslogik aufsetzen" },
    { title: "Einkauf", text: "Tranchen, Zeitpunkte und Produkte aussteuern" },
    { title: "Monitoring", text: "Markt, Portfolio und Risiken laufend überwachen" },
  ];

  return (
    <section id="prozess" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              So arbeiten wir
            </h2>
            <p className="mt-3 text-slate-300/80">
              Klar strukturierter Prozess mit messbaren Ergebnissen. Wir begleiten Sie vom ersten Audit bis zur laufenden Portfoliosteuerung.
            </p>
          </div>
          <ol className="lg:col-span-7 grid gap-4">
            {steps.map((s, i) => (
              <li key={s.title} className="relative bg-slate-900/60 border border-white/10 rounded-2xl p-5">
                <div className="absolute -left-3 -top-3 w-8 h-8 rounded-xl bg-emerald-500 text-slate-900 font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <h3 className="text-white font-semibold">{s.title}</h3>
                <p className="text-slate-300/70 text-sm mt-1">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
