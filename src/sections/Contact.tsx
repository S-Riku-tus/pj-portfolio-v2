/**
 * 連絡先: X（Twitter）プロフィールへのリンクを表示。
 * 自分のXのURLに書き換えてください: https://x.com/あなたのユーザー名
 */
const X_PROFILE_URL = "https://x.com/normal_tus_rs";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <div className="container">
        <div className="contact-block">
          <p className="contact-lead">
            お仕事のご依頼・ご質問は、XのDMまでお気軽にどうぞ。
          </p>
          <a
            href={X_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-x-link"
            aria-label="Xのプロフィールを開く"
          >
            <span className="contact-x-icon" aria-hidden>X</span>
            <span>Xでメッセージを送る</span>
          </a>
        </div>
      </div>
    </section>
  );
}
