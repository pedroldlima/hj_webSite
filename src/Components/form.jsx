import React from "react";
import '../Styles/Form.css'

export default function Form() {
    return (
        <div className="formula">
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
                        <button>Enviar</button>
                    </div>
                </form>

                <div className="contact-info">
                    <h2>Entre em contato:</h2>
                    <p className="color">Numero</p>
                    <h1>+55 62 3941-8898</h1>
                    <h1>+55 62 98141-7759</h1>
                    <p className="color">Email</p>
                    <h1>atendimento@hjsystems.com.br</h1>
                    <p className="color">Endereço</p>
                    <h1>Rua 72, nº48,  salas 603 e 604, Ed. QS Tower,
                        Jd. Goiás, Goiânia - GO.   74805-480
                    </h1>
                </div>
            </div>
        </div>
    );
}
