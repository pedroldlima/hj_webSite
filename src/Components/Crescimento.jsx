import React from "react";
import '../Styles/Crescimento.css'


import nf from '../assets/NF/nf.png'
import mdf from '../assets/NF/mdf.png'
import nfc from '../assets/NF/nfc.png'
import nfs from '../assets/NF/nfs.png'

const Crescimento = () => {
    return (
        <div className="containere">
            <h1>Destrave o crescimento do seu negocio!</h1>
            <br />
            <p>Hj Systems trabalhando com a gestao deis de 1990 com solucoes integradas para sua empresa</p>
            <hr className="divider" />
            <p>Recursos de emissão e transmissão dos sistemas HJ Systems</p>
            <div className="car">
                <div className="cartao">
                    <img src={nf} alt="" />
                    <p>NOTA FISCAL
                        ELETRÔNICA </p>
                </div>

                <div className="cartao">
                    <img src={mdf} alt="" />
                    <p>MANIFESTO ELETRÔNICO</p>
                </div>

                <div className="cartao">
                    <img src={nfc} alt="" />
                    <p>NOTA FISCAL CONSUMIDOR </p>
                </div>

                <div className="cartao">
                    <img src={nfs} alt="" />
                    <p>NOTA FISCAL DE SERVIÇO </p>
                </div>
            </div>
        </div>
    );
};

export default Crescimento;
