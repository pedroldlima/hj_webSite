// Header.js
import React, { useState, useEffect } from "react";
import "../Styles/Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header-main">
      <div className={`header ${scrolled ? "scrolled" : ""}`}>
        <ul className="menu-links">
          <li onClick={() => scrollToSection("home-section")}>Home</li>
          <li onClick={() => scrollToSection("sistemas-section")}>Sistemas</li>
          <li onClick={() => scrollToSection("segmentos")}>Segmentos</li>
          <li onClick={() => scrollToSection("integracoes")}>Integracoes</li>
          <li onClick={() => scrollToSection("contato-section")}>Contato</li>
          <li onClick={() => scrollToSection("recursos-section")}>Recursos</li>
          <li onClick={() => scrollToSection("duvidas-section")}>Duvidas</li>

          <li className="active" onClick={() => scrollToSection("duvidas-section")}>
            <p>HJ Systems</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
