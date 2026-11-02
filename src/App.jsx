import { useEffect } from "react";
import Hero from "./components/hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-reveal]");
    const revealVisibleSections = () => {
      sections.forEach((section) => {
        const bounds = section.getBoundingClientRect();
        if (bounds.top < window.innerHeight * 0.9 && bounds.bottom > 0) {
          section.classList.add("is-visible");
        }
      });
    };

    revealVisibleSections();
    window.addEventListener("scroll", revealVisibleSections, { passive: true });
    window.addEventListener("resize", revealVisibleSections);

    return () => {
      window.removeEventListener("scroll", revealVisibleSections);
      window.removeEventListener("resize", revealVisibleSections);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-gray-300 antialiased selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Education />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;