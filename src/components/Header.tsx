import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Header.scss";

const links = [
  { to: "/concerts", name: "Концерты" },
  { to: "/music", name: "Музыка" },
  { to: "/contacts", name: "Контакты" },
  { to: "/news", name: "Новости" },
  { to: "/lyrics", name: "Тексты" },
];
const langs = ["RU", "BY", "EN", "PL"];

const Header = () => {
  const [checked, setChecked] = useState(false);

  const location = useLocation();

  return (
    <div className="header-container">
      <Link to="/" className="logo">
        ПАПАРАЦЬ
      </Link>
      <div className="menu-button-container">
        <input
          onChange={() => setChecked(!checked)}
          type="checkbox"
          id="menu_checkbox"
        />
        <label htmlFor="menu_checkbox">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </div>
      <div className={`header-content ${checked ? "checked" : ""}`}>
        <div className="header-content-subcontainer">
          <div className="header-links">
            {links.map((link) => (
              <Link
                className={location.pathname === link.to ? "selected" : ""}
                to={link.to}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="header-langs">
            {langs.map((lang) => (
              <button>{lang}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
