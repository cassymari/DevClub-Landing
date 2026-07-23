import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { useLenis } from "./hooks/useLenis";
import { Formations } from "./sections/Formations";
import { ExtraContents } from "./sections/ExtraContents";
import { Companies } from "./sections/Companies"
import { Mentoria } from "./sections/Mentoria"
import { FinalCta } from "./sections/FinalCta"
import { Footer } from "./sections/Footer"

function App() {

  useLenis();
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Mentoria />
        <Formations />
        <Companies />
        <ExtraContents />
        <FinalCta />
        
        < Footer />

      </main>
    </>
  );
}

export default App;