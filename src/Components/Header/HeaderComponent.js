function HeaderComponent() {
  return (
    <header className="header">
      <img className="logo" src="./img/omnifood-logo.png"></img>
      <nav className="header-nav">
        <a href="#" className="header-nav-links">
          How it works
        </a>
        <a href="#" className="header-nav-links">
          Meals
        </a>
        <a href="#" className="header-nav-links">
          Testimonials
        </a>
        <a href="#" className="header-nav-links">
          Pricing
        </a>
        {/* nav-cta means if this is pressed it will lead to cta section in the page */}
        <a href="#" className="btn btn-primary btn-padding-100">
          Try for free
        </a>
      </nav>
    </header>
  );
}

export default HeaderComponent;
