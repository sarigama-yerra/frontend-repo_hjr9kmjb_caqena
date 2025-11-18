export default function Benefits() {
  const items = [
    { title: "Nachweisbare Einsparungen", text: "Transparente Erfolgskennzahlen, Benchmarks und Reporting." },
    { title: "Unabhängige Beratung", text: "Wir agieren ausschließlich in Ihrem Interesse – ohne Kickbacks." },
    { title: "Schnelle Umsetzung", text: "Von Analyse bis Einkauf in wenigen Wochen startklar." },
    { title: "Compliance & Sicherheit", text: "Saubere Dokumentation und geprüfte Prozesse." },
  ];

  return (
    <section id="vorteile" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center">
          Ihre Vorteile
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.title} className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400/30 to-sky-400/30 mb-4" />
              <h3 className="text-white font-semibold">{i.title}</h3>
              <p className="text-slate-300/70 text-sm mt-1">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
