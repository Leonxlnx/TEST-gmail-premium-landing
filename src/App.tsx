import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CinematicReveal } from "./components/CinematicReveal";

function App() {
  return (
    <CinematicReveal>
      <div className="min-h-screen bg-dark-base text-white font-sans selection:bg-google-blue/30 overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>
    </CinematicReveal>
  );
}

export default App;
