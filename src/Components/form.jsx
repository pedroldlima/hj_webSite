import React from "react";
import '../Styles/Form.css'

export default function Form() {
    return (
        <div className="cont">
            <form className="form">
                <div className="form-group">
                    <input type="text" id="nome" name="nome" placeholder="Nome" />
                </div>
                <div className="form-group">
                    <input type="text" id="telefone" name="telefone" placeholder="Telefone" />
                </div>
                <div className="form-group">
                    <input type="email" id="email" name="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <textarea id="mensagem" name="mensagem" placeholder="Digite aqui sua duvida ou sua mensagem"></textarea>
                </div>

                <div className="btn">
                    <button>Evniar</button>
                </div>
            </form>

            <div className="contact-info">
                <h2>Entre em contato:</h2>
                <p>+55 62 3941-8898</p>
                <p>+55 62 98141-7759</p>
                <p>atendimento@hjsystems.com.br</p>
                <p>Rua 72, nº48,  salas 603 e 604, Ed. QS Tower,
                    Jd. Goiás, Goiânia - GO.   74805-480
                </p>
            </div>
        </div>
    );
}
