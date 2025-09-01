import Header from "./components/Header";
import About from "./sections/About";
import Service from "./sections/Service";
import Skill from "./sections/Skill";
import History from "./sections/History";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Service />
        <Skill />
        <History />
        <Contact />
      </main>
      <footer className="site-footer">© {new Date().getFullYear()} Your Name</footer>
    </>
  );
}
