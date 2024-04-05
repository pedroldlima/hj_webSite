import React, { useState } from "react";
import '../Styles/Accordion.css';

export default function Accordion() {

    return (
        <div className="accordion">
            <h1>Perguntas Frequentes</h1>
            <div className="accordion-dtls">
                <details open>
                    <summary>
                        Oque e necessario para utilizar o sistema?
                    </summary>
                    <div>
                        Para inicio recomendamos computador para instalação do sistema;
                        Internet e certificado digital para validação das notas fiscais, e uma impressora para imprimir relatórios e Notas fiscais.
                    </div>
                </details>
                <details>
                    <summary>
                        Precisa internet?
                    </summary>
                    <div>
                        Não, caso tenha alguma interrupção no sinal o sistema funcionara. Porém, as notas fiscais serão emitidas quando o sinal de internet estiver restabelecido
                    </div>
                </details>
                <details>
                    <summary>
                        A instalacao e treinamento e feito online ou presencialmente?
                    </summary>
                    <div>
                        A instalação e treinamento podem ser feitos tanto online como presencial, a critério do cliente.
                    </div>
                </details>
                <details>
                    <summary>
                        Alem de emitir as notas fiscais, quais as principais funcionalidades do sistema?
                    </summary>
                    <div>
                        Controle de Financeiro, Orçamento, Ordem de serviço, Comanda eletrônica, Relatorios, cadastro de produtos, Controle de Estoque, recibo avulso entre outros.
                    </div>
                </details>
                <details>
                    <summary>
                        Quais as vantagens de contratar o sistema da HJ Systems?
                    </summary>
                    <div>
                        O sistema HJ Systems traz como um dos principais benefícios a otimização de todos os processos e o controle total das operações da sua empresa, contando com uma equipe de especialistas para dar todo suporte necessário para utilização do sistema.
                    </div>
                </details>
            </div>
        </div>
    );
}
