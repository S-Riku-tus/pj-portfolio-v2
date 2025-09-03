import { useEffect, useState } from "react";

const SECTIONS = ["about", "service", "skill", "history", "contact"] as const;
type SectionId = (typeof SECTIONS)[number];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("about");

  // スクロール監視を after-paint に安全にセットアップ
  useEffect(() => {
    const els = SECTIONS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as SectionId);
      },
      // ビューポート中央付近に来た要素をアクティブ扱い
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ハッシュ遷移時（アンカー直飛び）にも同期
  useEffect(() => {
    const syncFromHash = () => {
      const id = (location.hash.replace("#", "") || "about") as SectionId;
      if (SECTIONS.includes(id)) setActive(id);
    };
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const handleClick = (id: SectionId) => {
    // クリック直後に視覚的に反映（体感を良くする）
    setActive(id);
    setOpen(false);
  };

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
            onClick={() => handleClick(id)}
            className={active === id ? "is-active" : ""}
          >
            {id[0].toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
}
