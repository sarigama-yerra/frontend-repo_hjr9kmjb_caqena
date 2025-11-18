export default function Features() {
  const features = [
    {
      title: "Strategischer Energieeinkauf",
      desc: "Wir definieren mit Ihnen Zielpreise und beschaffen in Tranchen entlang einer klaren Strategie.",
    },
    {
      title: "Alternative Beschaffungsmethoden",
      desc: "Direktverträge, PPAs und flexible Modelle jenseits des regulären Marktes – transparent und skalierbar.",
    },
    {
      title: "Risikomanagement & Hedging",
      desc: "Absicherung gegen Preisschwankungen durch intelligente Termin- und Spotmarkt-Kombinationen.",
    },
    {
      title: "Datengetriebenes Monitoring",
      desc: "24/7 Marktbeobachtung, automatisierte Signale und klare Handlungsempfehlungen.",
    },
  ];

  return (
    <section id="leistungen" className="py-16 md:py-24 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center">
          Unsere Leistungen
        </h2>
        <p className="mt-3 text-slate-300/80 text-center max-w-2xl mx-auto">
          Einkauf, Steuerung und Optimierung Ihrer Energiekosten aus einer Hand – unabhängig, transparent und messbar.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400/30 to-sky-400/30 mb-4" />
              <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              <p className="text-slate-300/70 mt-2 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
