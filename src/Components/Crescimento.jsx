import React from "react";
import '../Styles/Crescimento.css'

const Crescimento = () => {
    return (
        <div className="containere">
            <h1>Título</h1>
            <p>Um pequeno parágrafo abaixo do título.</p>
            <hr className="divider" />
            <p>Outro pequeno parágrafo após a linha divisória.</p>
            <div className="car">
                <div className="cartao">Card 1</div>
                <div className="cartao">Card 2</div>
                <div className="cartao">Card 3</div>
                <div className="cartao">Card 4</div>
            </div>
        </div>
    );
};

export default Crescimento;
