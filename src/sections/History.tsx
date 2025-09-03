// src/sections/History.tsx
const ITEMS = [
    { year: "2025", text: "React / TypeScript を中心にフロントエンドを強化中。就活ポートフォリオを構築。" },
    { year: "2024", text: "学習を継続し、複数の小規模プロジェクトを公開。" },
    { year: "2023", text: "HTML/CSS/JavaScript の基礎を固める。UI/UX・アクセシビリティも学習。" },
    { year: "2022", text: "プログラミング学習を開始。" },
  ];
  
  export default function History() {
    return (
      <section id="history" className="section">
        <h2 className="section-title">History</h2>
        <div className="container">
          <div className="timeline">
            {ITEMS.map((it) => (
              <div className="timeline-item" key={it.year}>
                <div className="timeline-year">{it.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-text">{it.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  