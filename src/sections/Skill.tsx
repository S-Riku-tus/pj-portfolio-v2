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
          <SkillCard image="public\assets\python-logo-only.svg" title="Python：1年半">
            #AI  #機械学習  #生成AI  #Django  #Flask  #FastAPI  #OpenCV  #NumPy  #Pandas  #PyTorch
          </SkillCard>
          <SkillCard image="public\assets\c.jpg" title="C：1年">
            #大学の講義
          </SkillCard>
          <SkillCard image="public\assets\typescript.svg" title="TypeScript：3カ月">
            #React  #Next.js  #Vite  #Node.js  #TailwindCSS
          </SkillCard>
          <SkillCard image="public\assets\sql.svg" title="SQL：3カ月">
            #SQLite  #PostgreSQL  #MySQL
          </SkillCard>
          <SkillCard image="public\assets\html.webp" title="HTML：2カ月">
            #何が入るかわからない
          </SkillCard>
          <SkillCard image="public\assets\css.webp" title="CSS：2カ月">
            #何が入るかわからない
          </SkillCard>
          <SkillCard image="public\assets\javascript.webp" title="JavaScript：2カ月">
            #何が入るかわからない
          </SkillCard>
        </div>
      </section>
    );
  }
  