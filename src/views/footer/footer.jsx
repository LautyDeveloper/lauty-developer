import React from "react";
import "./footer.css";
import Buttons from "../../components/button/buttons";
export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-header">
          <ul>
            <li>
              <a href="">Inicio</a>
            </li>

            <li>
              <a href="">Proyectos</a>
            </li>

            <li>
              <a href="">Mi Historia</a>
            </li>

            <li>
              <a href="">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="footer-footer">
          <div className="work-together">
            <h6>¡Trabajemos Juntos!</h6>
            <Buttons />
          </div>
          <div className="copyright">
            <p>&copy; Todos los Derechos Reservados.</p>
            <p>Hecho con 💓 por Lauty Aquino.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
