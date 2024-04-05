// Header.js
import React, { useState, useEffect } from "react";
import "../Styles/Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      setMenuOpen(false); // Fecha o menu após clicar em um item
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-main">
      <div className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`menu-icon ${menuOpen ? "open" : ""}`} />
        </div>
        <ul className={`menu-links ${menuOpen ? "open" : ""}`}>
          <li onClick={() => scrollToSection("home-section")}>Home</li>
          <li onClick={() => scrollToSection("sistemas-section")}>Sistemas</li>
          <li onClick={() => scrollToSection("segmentos")}>Segmentos</li>
          <li onClick={() => scrollToSection("integracoes")}>Integrações</li>
          <li onClick={() => scrollToSection("contato-section")}>Contato</li>

          <li onClick={() => scrollToSection("duvidas-section")}>Dúvidas</li>
          <li className="active" onClick={() => scrollToSection("duvidas-section")}>
            <p>HJ Systems</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
