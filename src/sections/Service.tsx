// src/sections/Service.tsx
type VideoSource = { src: string; type: string };

function WorkRow({
  title,
  desc,
  image,
  videoPoster,
  videoSources,
  githubUrl,
  demoUrl,
  reverse = false,
}: {
  title: string;
  desc: string;
  image?: string;                 // 画像で見せる場合
  videoPoster?: string;           // 動画のポスター（サムネ）
  videoSources?: VideoSource[];   // 動画で見せる場合（webm/mp4 など複数可）
  githubUrl?: string;
  demoUrl?: string;
  reverse?: boolean;
}) {
  const Media = () =>
    videoSources ? (
      <video
        className="work-video"
        controls
        preload="metadata"
        playsInline
        poster={videoPoster}
      >
        {videoSources.map((v) => (
          <source key={v.src} src={v.src} type={v.type} />
        ))}
        {/* Fallback */}
        お使いのブラウザは video タグに対応していません。
      </video>
    ) : (
      <img src={image!} alt={title} loading="lazy" />
    );

  return (
    <div className={`work-row ${reverse ? "reverse" : ""}`}>
      <div className="work-text">
        <h3 className="work-title">{title}</h3>
        <p className="work-desc">{desc}</p>

        {(githubUrl || demoUrl) && (
          <div className="work-actions">
            {demoUrl && (
              <a
                className="btn"
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                className="btn-outline"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Link
              </a>
            )}
          </div>
        )}
      </div>

      <div className="work-image">
        <Media />
      </div>
    </div>
  );
}

export default function Service() {
  return (
    <section id="service" className="section">
      <h2 className="section-title">Service</h2>
      <div className="container">
        {/* 例1：動画で見せる（webm + mp4 を両方用意すると互換性◎） */}
        <WorkRow
          title="arXiv 論文通知 Slack Bot"
          desc="arXivから生成AIに関連する最新論文を毎朝Slackに通知するBot。Python, Flaskで実装し、Github Actionsで定期実行している。"
          videoPoster="../../public/assets/arxiv_bot.png"
          videoSources={[
            { src: "/media/todo.webm", type: "video/webm" },
            { src: "../../public/assets/arxiv_bot.mp4", type: "video/mp4" }, // Safari 向け（H.264）
          ]}
          githubUrl="https://github.com/S-Riku-tus/pj-ai_arXiv_bot"
        />

        {/* 例2：画像で見せる */}
        <WorkRow
          title="Tetris"
          desc="GPT Enginnerを用いて作成。これをきっかけにプログラミングに目覚めた。JavaScript, HTML, CSSで実装。"
          videoPoster="../../public/assets/tetris.png"
          videoSources={[
            { src: "/media/todo.webm", type: "video/webm" },
            { src: "../../public/assets/tetris.mp4", type: "video/mp4" }, // Safari 向け（H.264）
          ]}
          githubUrl="https://github.com/S-Riku-tus/Tetris"
          reverse
        />
      </div>
    </section>
  );
}
