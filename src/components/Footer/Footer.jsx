import "./Footer.styles.css";

import github from "../../assets/icons/github.png";
import whatsApp from "../../assets/icons/whatsApp.png";
import instagram from "../../assets/icons/instagram.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <a href="https://github.com/GabrielDario" target="_blank" aria-label="GitHub">
          <img src={github} alt="GitHub" />
        </a>

        <a href="https://wa.me/5548991911269" target="_blank" aria-label="WhatsApp">
          <img src={whatsApp} alt="WhatsApp" />
        </a>

        <a href="https://www.instagram.com/gabrieldario55/" target="_blank" aria-label="Instagram">
          <img src={instagram} alt="Instagram" />
        </a>

      </div>

      <p>Developed by Gabriel Dario</p>
    </footer>
  );
}
