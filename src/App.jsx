import "./App.css";
import Experience from "./views/experience/experience";
import Footer from "./views/footer/footer";
import Hero from "./views/hero/hero";
import MyHistory from "./views/my-history/my-history";
import Projects from "./views/projects/projects";
import Skills from "./views/skills/skills";

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <MyHistory />
      <Footer />
    </>
  );
}

export default App;
