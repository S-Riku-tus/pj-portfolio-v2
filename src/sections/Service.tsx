function WorkRow({
    title,
    desc,
    image,
    reverse = false,
  }: {
    title: string;
    desc: string;
    image: string;
    reverse?: boolean;
  }) {
    return (
      <div className={`work-row ${reverse ? "reverse" : ""}`}>
        <div className="work-text">
          <h3 className="work-title">{title}</h3>
          <p className="work-desc">{desc}</p>
        </div>
        <div className="work-image">
          <img src={image} alt={title} loading="lazy" />
        </div>
      </div>
    );
  }
  
  export default function Service() {
    return (
      <section id="service" className="section">
        <h2 className="section-title">Service</h2>
        <div className="container">
          <WorkRow
            title="Sample Web Site 1"
            desc="HTML/CSS を活用したレスポンシブ Web サイト。Grid Layout により情報量が多くても見やすいレイアウトを実現。"
            image="/assets/work1.jpg"
          />
          <WorkRow
            title="Sample Web Site 2"
            desc="React + Vite を用いた SPA。軽快なナビゲーションとアクセシビリティに配慮した設計。"
            image="/assets/work2.jpg"
            reverse
          />
        </div>
      </section>
    );
  }
  