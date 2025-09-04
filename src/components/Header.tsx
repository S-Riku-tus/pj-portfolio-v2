import { useEffect, useRef, useState } from "react";

const SECTIONS = ["about", "service", "skill", "history", "contact"] as const;
type SectionId = (typeof SECTIONS)[number];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("about");
  const scrollingRef = useRef<SectionId | null>(null); // ← スクロール中ロック

  // スクロール監視（現在位置ハイライト）
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
        if (!visible) return;

        const id = visible.target.id as SectionId;

        // ★ クリックで目的地に向かっている間は中間セクションで更新しない
        if (scrollingRef.current && id !== scrollingRef.current) return;

        setActive(id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ハッシュ遷移時（外部から #xxx で来た場合も同期）
  useEffect(() => {
    const syncFromHash = () => {
      const id = (location.hash.replace("#", "") || "about") as SectionId;
      if (SECTIONS.includes(id)) setActive(id);
    };
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  // ★ クリック時：ピルは即時移動し、スクロール中はIOをロック
  const handleClick = (e: React.MouseEvent, id: SectionId) => {
    e.preventDefault();

    const target = document.getElementById(id);
    if (!target) return;

    // 1) 先に視覚反映
    setActive(id);
    setOpen(false);

    // 2) IOロックして途中の切替を抑止
    scrollingRef.current = id;

    // 3) スムーススクロール（アンカーのデフォルト動作は無効化済み）
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    // 4) 到着検知してロック解除（最大1.6sの保険）
    const start = performance.now();
    const settle = () => {
      const rect = target.getBoundingClientRect();
      const arrived = Math.abs(rect.top) < 24; // scroll-margin-top考慮したざっくり判定
      const timeout = performance.now() - start > 1600;
      if (arrived || timeout) {
        scrollingRef.current = null;
        // URLのハッシュは維持したい場合は次行を有効化
        history.replaceState(null, "", `#${id}`);
        return;
      }
      requestAnimationFrame(settle);
    };
    requestAnimationFrame(settle);
  };

  return (
    <header className="site-header">
      <a
        className="brand"
        href="#about"
        aria-label="Top"
        onClick={(e) => handleClick(e, "about")}
      >
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
            onClick={(e) => handleClick(e, id)}  // ← event を渡す
            className={active === id ? "is-active" : ""}
          >
            {id[0].toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
}
