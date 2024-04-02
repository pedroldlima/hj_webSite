import React, { useState, useEffect } from "react";
import "../Styles/Carrousel.scss";


import Anacapri from '../assets/anacabri.svg'
import Arrezo from '../assets/arrezo.svg'
import China from '../assets/chinal.svg'
import cmoc from '../assets/cmoc.svg'
import csa from '../assets/anacabri.svg'
import griffe from '../assets/griffe.svg'
import nutri from '../assets/nutri.jpg'
import love from '../assets/love.svg'
import obticario from '../assets/obtica.svg'
import cifer from '../assets/cifer.svg'


export default function Carrousel({ companies }) {

    return (
        <div className="container-slider">
            <h1>Empresas que trabalham conosco</h1>
            <div class="slider">
                <div class="slide-track">
                    <div class="slide">
                        <img src={Anacapri} height="100" width="250" alt="" />
                    </div>
                    <div class="slide">
                        <img src={Arrezo} height="100" width="250" alt="" />
                    </div>
                    <div class="slide">
                        <img src={China} height="100" width="250" alt="" />
                    </div>
                    <div class="slide">
                        <img src={cmoc} height="100" width="250" alt="" />
                    </div>
                    <div class="slide">
                        <img src={csa} height="100" width="250" alt="" />
                    </div>
                    <div class="slide">
                        <img src={griffe} height="100" width="250" alt="" />
                    </div>
                    <div class="slide">
                        <img src={nutri} height="100" width="200" alt="" />
                    </div>
                    <div class="slide">
                        <img src={love} height="100" width="250" alt="" />
                    </div>
                    <div class="slide">
                        <img src={obticario} height="100" width="250" alt="" />
                    </div>
                    <div class="slide">
                        <img src={cifer} height="100" width="250" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
}
