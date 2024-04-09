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
                    <a href="https://www.instagram.com/hj_systems/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="instagram" />
                    </a>
                </div>

                <div className="icn">
                    <a href="https://www.facebook.com/hjsystems" target="_blank" rel="noopener noreferrer">
                        <FaFacebook  className="facebook"/>
                    </a>
                </div>
            </div>

            <div className="botao">
                <p>Todos Direitos reservados a Hj Systems</p>
            </div>
        </div>
    )
}
