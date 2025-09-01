export default function Contact() {
    return (
      <section id="contact" className="section">
        <h2 className="section-title">Contact</h2>
        <div className="container">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="row-2">
              <label className="field">
                <span className="label">NAME</span>
                <input type="text" name="name" placeholder="山田 太郎" />
              </label>
              <label className="field">
                <span className="label">EMAIL</span>
                <input type="email" name="email" placeholder="you@example.com" />
              </label>
            </div>
            <label className="field">
              <span className="label">MESSAGE</span>
              <textarea name="message" rows={8} placeholder="ご用件をどうぞ…" />
            </label>
            <button className="primary-btn" type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </section>
    );
  }
  