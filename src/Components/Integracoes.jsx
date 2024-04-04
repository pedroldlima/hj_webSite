import React from 'react';
import '../Styles/Integracoes.css'; // Estilos CSS separados


//img
import caixa from '../assets/svg/caixa.png'
import money from '../assets/svg/money.png'
import cart from '../assets/svg/cart.png'
import mapa from '../assets/svg/mapa.png'
import erp from '../assets/svg/erp.png'
import franquia from '../assets/svg/franquia.png'

const cardsData = [
  {
    title: 'Gerenciador Financeiro',
    image: money,
    text: 'Controle de caixa, Conciliação de cartões, Conciliação bancária,  DRE.'
  },
  {
    title: 'Ponto de Venda -PDV',
    image: caixa,
    text: 'Vendas expressas, Emissão de cupons e notas, Gerencia de estoque.'
  },
  {
    title: 'Venda Direta',
    image: cart,
    text: 'Pedidos, Conferências, Controle de Volume.'
  },
  {
    title: 'Rota de entrega',
    image: mapa,
    text: 'Gerenciamento de rota, Confirmação de entregas, controle de recebimento.'
  },
  {
    title: 'Sistema Integrado - ERP',
    image: erp,
    text: 'Gerenciador multinegócios.'
  },
  {
    title: 'Gerenciador de Franquias',
    image: franquia,
    text: 'Controle de franquias, Gestão estratégica, Fluxo de caixa.'
  }
];

const Card = ({ title, image, text }) => (
  <div className="cardes">
    <h2>{title}</h2>
    <img src={image} alt={title} />
    <p>{text}</p>
  </div>
);

const Integracoes = () => (
  <div className='conty'>
    <h1>Integracoes</h1>
    <div className='container-int'>
      <div className="container">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  </div>
);

export default Integracoes;
