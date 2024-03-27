function CtaComponent() {
  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <div className="cta">
          <div className="cta-content">
            <h2 className="heading-secondary">Get your first meal for free!</h2>
            <p className="cta-content-text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
            <form className="cta-form">
              <div>
                <label className="cta-form-label" htmlFor="full-name">
                  Full Name
                </label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="John Doe"
                  required={true}
                ></input>
              </div>

              <div>
                <label className="cta-form-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  required={true}
                ></input>
              </div>

              <div>
                <label className="cta-form-label" htmlFor="reference">
                  Where did you hear from us?
                </label>
                <select id="reference" required={true}>
                  <option>Please choose 🎉</option>
                  <option value="friends">Friends and Family</option>
                  <option value="youtube">Youtube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="facebook-ads">Facebook Ads</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <button className="btn-cta btn-cta-form">Sign up now</button>
            </form>
          </div>
          <div
            className="cta-figure"
            role="img"
            aria-label="Woman enjoying food"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default CtaComponent;
