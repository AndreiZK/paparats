import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Header.scss";

const links = [
  { to: "#music", name: "Музыка" },
  { to: "#about", name: "О проекте" },
  { to: "#final", name: "Контакты" },
  { to: "#final", name: "Видео" },
  // { to: "/concerts", name: "Концерты" },
  { to: "/lyrics", name: "Тексты" },
];
const langs = ["RU", "BY", "EN", "PL"];

const Header = () => {
  const [checked, setChecked] = useState(false);

  const location = useLocation();

  return (
    <div className="header-container">
      <a href="/#main" className="logo">
        ПАПАРАЦЬ
      </a>
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
              <a
                className={location.pathname === link.to ? "selected" : ""}
                href={link.to}
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* <div className="header-langs">
            {langs.map((lang) => (
              <button>{lang}</button>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
