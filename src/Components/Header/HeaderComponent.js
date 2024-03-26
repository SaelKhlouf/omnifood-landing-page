import { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

function HeaderComponent() {
  const [overlayNavOpened, setOverlayNavOpened] = useState(false);

  return (
    <header className="header">
      <img className="logo" src="./img/omnifood-logo.png"></img>
      <nav
        className={`header-nav ${
          overlayNavOpened === true ? "header-nav-open" : ""
        }`}
      >
        <a
          href="#how"
          className="header-nav-links"
          onClick={() => {
            setOverlayNavOpened(() => false);
          }}
        >
          How it works
        </a>
        <a
          href="#meals"
          className="header-nav-links"
          onClick={() => {
            setOverlayNavOpened(() => false);
          }}
        >
          Meals
        </a>
        <a
          href="#testimonials"
          className="header-nav-links"
          onClick={() => {
            setOverlayNavOpened(() => false);
          }}
        >
          Testimonials
        </a>
        <a
          href="#pricing"
          className="header-nav-links"
          onClick={() => {
            setOverlayNavOpened(() => false);
          }}
        >
          Pricing
        </a>
        {/* nav-cta means if this is pressed it will lead to cta section in the page */}
        <a
          href="#cta"
          className="btn btn-primary btn-padding-100"
          onClick={() => {
            setOverlayNavOpened(() => false);
          }}
        >
          Try for free
        </a>
      </nav>

      <button
        className="mobile-btn-nav"
        onClick={() => {
          setOverlayNavOpened((currState) => !currState);
        }}
      >
        {overlayNavOpened === true ? (
          <IoCloseOutline size="3.8rem" className="mobile-nav-close-icon" />
        ) : (
          <IoMenuOutline size="3.8rem" className="mobile-nav-menu-icon" />
        )}
      </button>
    </header>
  );
}

export default HeaderComponent;
