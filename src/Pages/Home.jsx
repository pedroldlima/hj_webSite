import React, { useEffect } from "react";
import Header from "../Components/Header";
import Services from "../Components/Services";
import "../Styles/Home.css";
import { gsap } from "gsap";
import Segmentos from "../Components/Segmentos";
import Carrousel from "../Components/Carrousel";
import Integracoes from "../Components/Integracoes";
import Crescimento from "../Components/Crescimento";
import Falar from "../Components/Falar";
import Form from "../Components/form";
import Maps from "../Components/Maps";
import Accordion from "../Components/Accordion";
import Footer from "../Components/footer";


import Hand from '../assets/hand.png'

export default function HomePage() {
    
    const handleWhatsAppRedirect = () => {
        const phoneNumber = "5562981417759";
        const message = encodeURIComponent("Olá, vim através do site da HJ, gostaria saber mais sobre os serviços de vocês.");
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div id="home-section" >
            <div id="large-header" className="home-section">
                <Header />
                <div className="section-home">
                    <div className="main-title">
                        <h1>
                            <span className="thin">HJ Systems </span> transformação em primeiro lugar
                        </h1>
                        <p>
                            A <span className="color">HJ SYSTEMS</span> é uma empresa sediada na cidade de Goiânia – GO
                            especializada no desenvolvimento de soluções integradas para gestão
                            de empresas. Atuando no mercado de tecnologia da informação desde
                            1990, a empresa vem acumulando experiência, credibilidade e
                            qualificação técnica, permitindo assim um correto gerenciamento,
                            direção e rapidez nos negócios de sua empresa, é uma ferramenta
                            prática, simples e eficiente que se adapta as particularidades e
                            necessidades da <span className="color">sua empresa</span> para o crescimento no mercado atual.
                        </p>
                        <div className="butto">
                            <button className="bt1" onClick={handleWhatsAppRedirect}>Quero conhecer a Hj Systems</button>
                            <button className="bt2">Entrar em Contato</button>
                        </div>
                    </div>
                    <div className="imga">
                        <img src={Hand} alt="" />
                    </div>
                </div>
            </div>
            <section id="sistemas-section">
                <Services />
            </section>
            <section id="segmentos">
                <Segmentos />
            </section>
            <Carrousel />
            <section id="integracoes">
                <Integracoes />
            </section>
            <Crescimento />
            <section id="contato-section">
                <Form />
            </section>
            <Falar />
            <Maps />
            <section id="duvidas-section">
                <Accordion />
            </section>
            <Footer />
        </div>
    );
}
