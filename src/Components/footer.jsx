import React from "react";
import '../Styles/Footer.css'

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";



export default function Footer() {
    return (
        <div className="footer">
            <div className="section-links">
            
                <p>atendimento@hjsystems.com.br</p>
            </div>
            <div className="icons">
                <div className="icn">
                    <FaInstagram className="instagram" />
                </div>

                <div className="icn">
                    <FaFacebook  className="facebook"/>
                </div>
            </div>

            <div className="botao">
                <button onClick={() => scrollToSection("home-section")}>Voltar para o Topo</button>
                <p>Todos Direitos reservados a Hj Systems</p>
            </div>
        </div>
    )
}