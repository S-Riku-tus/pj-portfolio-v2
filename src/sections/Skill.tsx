function SkillCard({
    image,
    title,
    children,
  }: {
    image: string;
    title: string;
    children: React.ReactNode;
  }) {
    return (
      <article className="skill-card">
        <div className="skill-image">
          <img src={image} alt={title} loading="lazy" />
        </div>
        <h3 className="skill-title">{title}</h3>
        <p className="skill-body">{children}</p>
      </article>
    );
  }
  
  export default function Skill() {
    return (
      <section id="skill" className="section">
        <h2 className="section-title">Skill</h2>
        <div className="container skill-grid">
          <SkillCard image="/assets/skill-photo.jpg" title="Photo">
            カメラを購入してから3年間、独学で技術を身に着けました。ポートレート写真を好んで撮ることが多いです。
          </SkillCard>
          <SkillCard image="/assets/skill-bike.jpg" title="Bike">
            2022年1月にバイクを購入し、休日はバイク仲間とツーリングを楽しんでいます。
          </SkillCard>
          <SkillCard image="/assets/skill-work.jpg" title="Work">
            2021年4月に部内のICT推進者に任命され、各現場の技術的なサポートや部内講習の講師を受け持ちました。
          </SkillCard>
        </div>
      </section>
    );
  }
  