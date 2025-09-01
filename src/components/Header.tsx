import { useEffect, useMemo, useState } from "react";

const SECTIONS = ["about", "service", "skill", "history", "contact"] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<(typeof SECTIONS)[number]>("about");

  const sectionEls = useMemo(
    () => SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[],
    []
  );

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as (typeof SECTIONS)[number]);
      },
      // ビューポート中央付近に来たらアクティブ扱い
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sectionEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sectionEls]);

  const onClickNav = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#about" aria-label="Top">
        <span className="brand-accent">Pro</span>file
      </a>

      <button
        className="hamburger"
        aria-expanded={open}
        aria-controls="globalNav"
        onClick={() => setOpen((v) => !v)}
      >
        Menu
      </button>

      <nav id="globalNav" className={`nav ${open ? "is-open" : ""}`}>
        {SECTIONS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={onClickNav}
            className={active === id ? "is-active" : ""}
          >
            {id[0].toUpperCase() + id.slice(1)}
          </a>
        ))}
        <a className="ghost-btn" href="#contact" onClick={onClickNav}>
          Info
        </a>
      </nav>
    </header>
  );
}
