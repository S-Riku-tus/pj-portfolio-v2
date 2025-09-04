import pythonLogo from '../assets/python-logo-only.svg';
import cImage from '../assets/c.jpg';
import typescriptLogo from '../assets/typescript.svg';
import sqlLogo from '../assets/sql.svg';
import htmlLogo from '../assets/html.webp';
import cssLogo from '../assets/css.webp';
import javascriptLogo from '../assets/javascript.webp';
import atcoderLogo from '../assets/atcoder.png';

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
          <SkillCard image={pythonLogo} title="Python：1年半">
            #AI  #機械学習  #生成AI  #Django  #Flask  #FastAPI  #OpenCV  #NumPy  #Pandas  #PyTorch
          </SkillCard>
          <SkillCard image={cImage} title="C：1年">
            #大学の講義
          </SkillCard>
          <SkillCard image={typescriptLogo} title="TypeScript：3カ月">
            #React  #Next.js  #Vite  #Node.js  #TailwindCSS
          </SkillCard>
          <SkillCard image={sqlLogo} title="SQL：3カ月">
            #SQLite  #PostgreSQL  #MySQL
          </SkillCard>
          <SkillCard image={htmlLogo} title="HTML：2カ月">
            #何が入るかわからない
          </SkillCard>
          <SkillCard image={cssLogo} title="CSS：2カ月">
            #何が入るかわからない
          </SkillCard>
          <SkillCard image={javascriptLogo} title="JavaScript：2カ月">
            #何が入るかわからない
          </SkillCard>
          <SkillCard image={atcoderLogo} title="AtCoder：7カ月">
            #茶色  #
            <a
            href="https://atcoder.jp/users/rsraki"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            AtCoder Link
          </a>
          </SkillCard>
        </div>
      </section>
    );
  }
  