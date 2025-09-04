import { useEffect } from "react";
import Header from "./components/Header";
import About from "./sections/About";
import Service from "./sections/Service";
import Skill from "./sections/Skill";
import History from "./sections/History";
import Contact from "./sections/Contact";
import heroImage from "./assets/hero.jpg";

export default function App() {
  useEffect(() => {
    // CSS変数に背景画像を設定
    document.documentElement.style.setProperty('--hero-bg-image', `url(${heroImage})`);
  }, []);

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
      <footer className="site-footer">© {new Date().getFullYear()} Riku Shibasaki</footer>
    </>
  );
}
