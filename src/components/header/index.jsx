import "./style.css";
import img from "../header/web-house.png";

import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
      <div>
        <Link to="/">
          <img
            title="Ir para a página principal"
            className="img-home"
            src={img}
            alt=""
          />
        </Link>
      </div>
      <div className="header">
        <span>Bem vindo ao Hemocentro!</span>
      </div>
    </div>
  );
}

export default Header;
