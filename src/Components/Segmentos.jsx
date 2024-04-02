import React from "react";
import '../Styles/Segmentos.css';

// img
import Pet from '../assets/pet.jpg'
import Bar from '../assets/bare.jpg'
import Confec from '../assets/confec.png'
import Mecanica from '../assets/vrum.jpg'
import Otica from '../assets/otica.jpg'
import Roupas from '../assets/rpcalcalg.jpg'
import Mercado from '../assets/mercado.jpg'
import Restaurante from '../assets/restautante.jpg'
import Ferra from '../assets/ferra.webp'
import cosmetico from '../assets/cos.jpg'
import logistica from '../assets/logistica.jpg'
import Industria from '../assets/industria.png'

export default function Segmentos() {
    return (
        <div className="segment-center">
            <div className="segmentos-container">
                <div className="card">
                    <img src={Pet} alt="" />
                    <p>Agropecuária e Pet Shops</p>
                </div>

                <div className="card">
                    <img src={Bar} alt="" />
                    <p>Bares e Lanchonetes</p>
                </div>

                <div className="card">
                    <img src={Confec} alt="" />
                    Confecção
                </div>

                <div className="card">
                    <img src={Mecanica} alt="" />
                    Mecanica
                </div>

                <div className="card">
                    <img src={Otica} alt="" />
                    Otica
                </div>

                <div className="card">
                    <img src={Roupas} alt="" />
                    Roupas e Calcados
                </div>

                <div className="card">
                    <img src={Mercado} alt="" />
                    Mercado
                </div>

                <div className="card">
                    <img src={Restaurante} alt="" />
                    Restaurantes
                </div>

                <div className="card">
                    <img src={Ferra} alt="" />
                    Ferragista
                </div>
              
                <div className="card">
                    <img src={cosmetico} alt="" />
                    <p>Cosmetico</p>
                </div>

                <div className="card">
                    <img src={  logistica} alt="" />
                    <p>Logistica</p>
                </div>

                <div className="card">
                    <img src={ Industria} alt="" />
                    <p>Logistica</p>
                </div>





            </div>
        </div>
    );
}
