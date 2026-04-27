import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Techstack from "./pages/Techstack";
import SplashCursor from "./shared/Splashcursor";

export default function Layout() {
  return (
    <>
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#A855F7"
      />
      <Header />

      <section id="home">
        <Home />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="techstack">
        <Techstack />
      </section>
    </>
  );
}