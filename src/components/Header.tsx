import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Header.scss";

const links = [
  { to: "#music", isNewPage: false, name: "Музыка" },
  { to: "#about", isNewPage: false, name: "О проекте" },
  { to: "#final", isNewPage: false, name: "Контакты" },
  { to: "#final", isNewPage: false, name: "Видео" },
  { to: "/lyrics", isNewPage: true, name: "Тексты" },
];

const Header = () => {
  const [checked, setChecked] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const closeMenuOnClickOutside = (e: MouseEvent) => {
      const classList = (e.target as Element).classList;
      const id = (e.target as Element).id;
      const parent = (e.target as Element).parentElement;

      if (!checked && parent?.classList.contains("menu-button-container")) {
        setChecked(true);
        return;
      }

      if (!classList.contains("header-content") && id !== "menu-checkbox")
        setChecked(false);
    };

    document.addEventListener("click", closeMenuOnClickOutside);

    return () => document.removeEventListener("click", closeMenuOnClickOutside);
  }, [checked]);

  return (
    <div className="header-container">
      <a href="/#main" className="logo">
        ПАПАРАЦЬ
      </a>
      <div className="menu-button-container">
        <input
          onChange={(e) => setChecked(e.target.checked)}
          checked={checked}
          type="checkbox"
          id="menu_checkbox"
        />
        <label id="menu-icon" htmlFor="menu_checkbox">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </div>
      <div className={`header-content ${checked ? "checked" : ""}`}>
        <div className="header-content-subcontainer">
          <div className="header-links">
            {links.map((link) =>
              link.isNewPage ? (
                <Link
                  className={location.pathname === link.to ? "selected" : ""}
                  to={link.to}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  className={location.pathname === link.to ? "selected" : ""}
                  href={link.to}
                >
                  {link.name}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
