import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Process from "./components/Process";
import Innovation from "./components/Innovation";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Benefits />
        <Innovation />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Energiemanagement GmbH</p>
          <div className="text-slate-400 text-sm flex gap-4">
            <a href="#kontakt" className="hover:text-white">Kontakt</a>
            <a href="#" className="hover:text-white">Datenschutz</a>
            <a href="#" className="hover:text-white">Impressum</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;