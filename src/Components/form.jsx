import React from "react";
import '../Styles/Form.css'

export default function Form() {
    return (
        <div className="formula">
            <div className="cont">
                {/* Formulário */}
                <form className="login" action="https://formsubmit.co/atendimento@hjsystems.com.br" method="POST" target="_blank">
                    <input className="inputs" type="name" placeholder="Nome" />
                    <input className="inputs" type="email" placeholder="Email" />
                    <input className="inputs" type="number" placeholder="Numero" />
                    <textarea className="textarea" placeholder="Digite aqui seu texto"></textarea>

                    <div type="submit" className="btn">
                        <button>Enviar</button>
                    </div>
                </form>

                <div className="infos">
                    <div className="title">
                        <h1>Entre em Contato</h1>
                    </div>

                    <div className="infos-text">
                        <p>Numero</p>
                        <h2>+55 62 3941 8898</h2>
                        <h2>+55 62 98141 7759 </h2>
                        <p>Email</p>
                        <h2>atendimento@hjsystems.com.br</h2>
                        <p>Endereco</p>
                        <h2>Rua 72, nº48,  salas 603 e 604, Ed. QS Tower,
                            Jd. Goiás, Goiânia - GO.   74805-480</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
