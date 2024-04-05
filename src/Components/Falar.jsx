import React from "react";
import '../Styles/Fale.css'


export default function Falar() {

    const handleWhatsAppRedirect = () => {
        const phoneNumber = "5562981417759";
        const message = encodeURIComponent("Olá, vim através do site da HJ, gostaria saber mais sobre os serviços de vocês.");
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
        window.open(whatsappUrl, "_blank");
    };
    return (
        <div className="falar-section">
            <div className="falar">
                <h1>Ainda não <span className="best">descobriu a melhor</span> solução para o seu negócio?</h1>
                <p>Nossos consultores podem ajudar.</p>

                <div className="button">
                    <button className="bt1" onClick={handleWhatsAppRedirect}>Falar com especialista</button>
                </div>
            </div>
        </div>
    )
}