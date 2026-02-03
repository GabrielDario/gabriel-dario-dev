import "./Footer.styles.css";

import github from "../../assets/icons/github.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <a href="#" aria-label="GitHub">
          <img src={github} alt="GitHub" />
        </a>

        <a href="#" aria-label="WhatsApp">
          <img src={github} alt="WhatsApp" />
        </a>

        <a href="#" aria-label="Email">
          <img src={github} alt="Email" />
        </a>
      </div>

      <p>Developed by Gabriel Dario</p>
    </footer>
  );
}
