import React, { useState } from "react";
import '../Styles/Accordion.css'; // Importe estilos CSS para o Accordion

export default function Accordion() {

    return (
        <div className="accordion">
            <div className="accordion-dtls">
                <details open>
                    <summary>
                        Oque e necessario para utilizar o sistema?
                    </summary>
                    <div>
                        Easy! As long as you don't have to support IE11 or older browsers you could use <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> natively.
                    </div>
                </details>
                <details>
                    <summary>
                        Precisa internet?
                    </summary>
                    <div>
                        No worries. The fallback for these elements is quite good. They will display as open. You won't get the open/close mechanism, but you won't lose any content either.
                    </div>
                </details>
                <details>
                    <summary>
                        A instalacao e treinamento e feito online ou presencialmente?
                    </summary>
                    <div>
                        Almost anything you'd like. The <code>&lt;details&gt;</code> element allows all <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#flow_content" target="_blank">flow content</a>, which is basically everything.
                    </div>
                </details>
                <details>
                    <summary>
                        Alem de emitir as notas fiscais, quais as principais funcionalidades do sistema?
                    </summary>
                    <div>
                        The <code>&lt;details&gt;</code> element encapsulates the <code>&lt;summary&gt;</code> element. The <code>&lt;summary&gt;</code> becomes the 'label' for the <code>&lt;details&gt;</code> and acts like a button. When clicked, the attribute <code>open</code> is added to the <code>&lt;details&gt;</code> element, making it display. You can therefore style the open and closed states seperately if you'd like.
                    </div>
                </details>
                <details>
                    <summary>
                        Quais as vantagens de contratar o sistema da HJ Systems?
                    </summary>
                    <div>
                        The <code>&lt;details&gt;</code> element encapsulates the <code>&lt;summary&gt;</code> element. The <code>&lt;summary&gt;</code> becomes the 'label' for the <code>&lt;details&gt;</code> and acts like a button. When clicked, the attribute <code>open</code> is added to the <code>&lt;details&gt;</code> element, making it display. You can therefore style the open and closed states seperately if you'd like.
                    </div>
                </details>
            </div>
        </div>
    );
}
