// src/sections/History.tsx
const ITEMS = [
    { year: "2025 / 4", text: "GIFTech 2025 春が終了（1カ月）。賞はもらえなかったが、ソフトウェアエンジニアの面白さを知る" },
    { year: "2025 / 4", text: "GIFTech 2025 春が終了（1カ月）。賞はもらえなかったが、ソフトウェアエンジニアの面白さを知る" },
    { year: "2025 / 4", text: "GIFTech 2025 春が終了（1カ月）。賞はもらえなかったが、ソフトウェアエンジニアの面白さを知る" },
    { year: "2025 / 3", text: "GIFTech 2025 春という生成AI系ハッカソンに参加。ここで初めてTypeScript（Next.js）を触る。" },
    { year: "2025 / 1", text: "就活開始" },
    { year: "2024 / 11", text: "株式会社neoAIに長期インターンシップとして入社し、ある会社と画像生成、LLMにまつわる共同研究プロジェクトにAIエンジニアとして従事。現在も働いている。" },
    { year: "2024 / 10", text: "Onplanetz株式会社を退社。" },
    { year: "2024 / 8", text: "Onplanetz株式会社に長期インターンシップとして入社し、画像認識系のプロジェクトに従事。" },
    { year: "2024 / 4", text: "研究室に所属し、本格的にPythonを勉強し始める。TensorFlow, PyTorchを使用して機械学習について学び始めた。現在も同様の研究を行っている。" },
    { year: "2021 / 4", text: "東京理科大学 先進工学部 電子システム工学科入学。大学講義で初めてプログラミング（C言語）をする" },
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
  