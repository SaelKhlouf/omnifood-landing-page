function HeroComponent() {
  return (
    <section className="hero-section">
      <div className="hero">
        <div className="hero-content">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-content-text">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <div className="hero-content-links">
            <a
              href="#cta"
              className="btn btn-primary btn-padding-200 margin-right-100"
            >
              Start eating well
            </a>
            <a href="#how" className="btn btn-outline btn-padding-200">
              Learn more &darr;
            </a>
          </div>
          <div className="delivered-meals">
            <div className="delivered-meals-customers-images">
              <img src="./img/customers/customer-1.webp" alt="customer"></img>
              <img src="./img/customers/customer-2.webp" alt="customer"></img>
              <img src="./img/customers/customer-3.webp" alt="customer"></img>
              <img src="./img/customers/customer-4.webp" alt="customer"></img>
              <img src="./img/customers/customer-5.webp" alt="customer"></img>
              <img src="./img/customers/customer-6.webp" alt="customer"></img>
            </div>
            <p className="delivered-meals-fact">
              <span className="delivered-meals-number">250,000+</span> meals
              delivered last year!
            </p>
          </div>
        </div>

        <img
          src="./img/hero.webp"
          className="hero-image"
          alt="hero image"
        ></img>
      </div>
    </section>
  );
}

export default HeroComponent;
