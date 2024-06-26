import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";

function FooterComponent() {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="logo-col">
          <div className="footer-item-heading">
            <img
              className="logo"
              src="./img/omnifood-logo.webp"
              alt="logo"
            ></img>
          </div>

          <div className="footer-social">
            <IoLogoInstagram
              size="2.4rem"
              className="svg-footer-social"
            ></IoLogoInstagram>
            <IoLogoFacebook
              size="2.4rem"
              className="svg-footer-social"
            ></IoLogoFacebook>
            <IoLogoTwitter
              size="2.4rem"
              className="svg-footer-social"
            ></IoLogoTwitter>
          </div>
          <p className="footer-copyright">
            Copyright © 2024 developed by Sael Khlouf in ReactJS, cloned from
            Jonas Schmedtmann design.
          </p>
        </div>

        <div className="contact-col">
          <div className="footer-item-heading">
            <p>Contact us</p>
          </div>

          <div>
            <p className="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a href="#">415-201-6370 </a>
              <a href="#">hello@omnifood.com</a>
            </p>
          </div>
        </div>

        <nav className="account-col">
          <div className="footer-item-heading">
            <p>Account</p>
          </div>

          <ul className="footer-nav-list">
            <li>
              <a href="#">Create account</a>
            </li>
            <li>
              <a href="#">Sign in</a>
            </li>
            <li>
              <a href="#">iOS app</a>
            </li>
            <li>
              <a href="#">Android app</a>
            </li>
          </ul>
        </nav>

        <nav className="company-col">
          <div className="footer-item-heading">
            <p>Company</p>
          </div>

          <ul className="footer-nav-list">
            <li>
              <a href="#">About Omnifood</a>
            </li>
            <li>
              <a href="#">For Business</a>
            </li>
            <li>
              <a href="#">Cooking partners</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </nav>

        <nav className="resources-col">
          <div className="footer-item-heading">
            <p>Resources</p>
          </div>

          <ul className="footer-nav-list">
            <li>
              <a href="#">Recipe directory</a>
            </li>
            <li>
              <a href="#">Help center</a>
            </li>
            <li>
              <a href="#">Privacy & terms</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default FooterComponent;
