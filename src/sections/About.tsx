export default function About() {
    return (
      <section id="about" className="section">
        <h2 className="section-title">About</h2>
  
        <div className="container grid-2">
          <div className="about-photo">
            {/* 画像は public/assets/ に置く */}
            <img src="/assets/profile.jpg" alt="profile" />
          </div>
  
          <div className="about-text">
            <h3 className="about-name">
              柴崎 陸<span className="roman">(shibasaki riku)</span>
            </h3>
            <p className="lead">
              東京理科大学 先進工学研究科 電子システム工学専攻 1年。「CNNアンサンブル学習に基づく音響識別によるプール沸騰の発生検知」といったテーマで研究をしている。株式会社neoAIにて、<span className="u">LLM</span>、<span className="u">画像生成</span>周りの研究開発を行っている。
            </p>
          </div>
        </div>
      </section>
    );
  }
  