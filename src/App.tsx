import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CinematicReveal } from "./components/CinematicReveal";

function App() {
  return (
    <CinematicReveal>
      <div className="min-h-screen text-white font-sans overflow-x-hidden" style={{ backgroundColor: '#050505' }}>
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>
    </CinematicReveal>
  );
}

export default App;
