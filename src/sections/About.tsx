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
              東京都葛飾区在住のAIエンジニア志望。生成AIの魅力に憑りつかれ、2024年より
              プログラミング学習を開始。HTML/CSS/JS/React を学びながら日々スキルアップを図っています。
            </p>
          </div>
        </div>
      </section>
    );
  }
  