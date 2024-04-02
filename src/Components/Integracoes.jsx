import React from 'react';
import '../Styles/Integracoes.css'; // Estilos CSS separados

const cardsData = [
  {
    title: 'Card 1',
    image: 'https://via.placeholder.com/150',
    text: 'Texto do Card 1'
  },
  {
    title: 'Card 2',
    image: 'https://via.placeholder.com/150',
    text: 'Texto do Card 2'
  },
  {
    title: 'Card 3',
    image: 'https://via.placeholder.com/150',
    text: 'Texto do Card 3'
  },
  {
    title: 'Card 4',
    image: 'https://via.placeholder.com/150',
    text: 'Texto do Card 4'
  },
  {
    title: 'Card 5',
    image: 'https://via.placeholder.com/150',
    text: 'Texto do Card 5'
  },
  {
    title: 'Card 6',
    image: 'https://via.placeholder.com/150',
    text: 'Texto do Card 6'
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
  <div className="container">
    {cardsData.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
);

export default Integracoes;
