import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#prozess", label: "Prozess" },
    { href: "#vorteile", label: "Vorteile" },
    { href: "#innovation", label: "Innovation" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-emerald-400 to-sky-500"></div>
            <span className="text-white font-semibold tracking-tight">Energiemanagement</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-200/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#kontakt" className="inline-flex items-center bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-4 py-2 rounded-lg transition-colors">
              Angebot anfragen
            </a>
          </nav>

          <button aria-label="Menü" className="md:hidden text-white" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="grid gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-200/90 hover:text-white py-2">
                  {item.label}
                </a>
              ))}
              <a href="#kontakt" onClick={() => setOpen(false)} className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-4 py-2 rounded-lg transition-colors">
                Angebot anfragen
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
