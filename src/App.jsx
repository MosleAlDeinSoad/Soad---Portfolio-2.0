import Nav from "./components/Nav";
import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="grid-backdrop" />
      <Nav />
      <main>
        <Hero />
        <StatsStrip />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
