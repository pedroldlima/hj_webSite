import React from "react";
import '../Styles/Services.css';

import Sinapse from '../assets/sinapse.svg'
import Gestao2 from '../assets/gestao-icon-cinza_1.svg';
import Sysweb from '../assets/sysweb.svg';

export default function Services() {
    return (
        <div className="services-section">
            <div className="services">
                <div className="text-services">
                    <h1>Nossos Sistemas</h1>
                    <p>Soluções completas para gerenciar o seu negócio</p>
                </div>

                <div className="services-grid">
                    <div className="cards sinapse">
                        <h1>Sinapse</h1>
                        <img src={Sinapse} alt="Gestão" />
                        <p>O Sinapse é um software integrado que conta com controle de gestão, executa de maneira fácil e intuitiva funcionalidades simples e entrega relatórios avançados como rentabilidade de produtos, curva ABC e estatísticas de vendas, além de comunicação integrada com os clientes.</p>
                    </div>

                    <div className="cards gestao">
                        <h1>Gestão</h1>
                        <img src={Gestao2} alt="Gestão" />
                        <p>O Sinapse é um software integrado que conta com controle de gestão, executa de maneira fácil e intuitiva funcionalidades simples e entrega relatórios avançados como rentabilidade de produtos, curva ABC e estatísticas de vendas, além de comunicação integrada com os clientes.</p>
                    </div>

                    <div className="cards sysweb">
                        <h1>Sysweb</h1>
                        <img src={Sysweb} alt="Gestão" />
                        <p>O Sinapse é um software integrado que conta com controle de gestão, executa de maneira fácil e intuitiva funcionalidades simples e entrega relatórios avançados como rentabilidade de produtos, curva ABC e estatísticas de vendas, além de comunicação integrada com os clientes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
