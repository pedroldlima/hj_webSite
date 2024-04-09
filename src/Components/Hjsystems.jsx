import React, { useEffect, useState } from 'react';
import '../Styles/Hjsystems.css'
import Carrousel from './Carrousel';
import Form from './form';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// imagem
import Sala_1 from '../assets/hjsystems/sala_1.png'
import Sala_2 from '../assets/hjsystems/sala_2.jpg'
import Sala_3 from '../assets/hjsystems/sala_3.jpg'

// Mapa
import Mapa from '../assets/hjsystems/mapa_grade.png'


export default function HjSystemsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [Sala_1, Sala_2, Sala_3];
  const totalSlides = slides.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [totalSlides]);

  return (
    <div>
      <div className="about">
        <div className="voltar">
          <Link to={'/'}>
          <FaArrowLeft /> Voltar
          </Link>
        </div>

        <div className="about-text">
          <h1>Sobre nos</h1>
          <p>Sobre a Hj Systems</p>
        </div>

        <div className="about-us">
          <div className="slider-img">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Slide ${index}`}
                style={{ opacity: index === currentIndex ? 1 : 0 }}
              />
            ))}
          </div>

          <div className="text-hj">
            <p>A HJ SYSTEMS é uma empresa sediada na cidade de Goiânia – GO especializada no desenvolvimento de soluções integradas para gestão de empresas. Atuando no mercado de tecnologia da informação desde 1990, a empresa vem acumulando experiência, credibilidade e qualificação técnica, permitindo assim um correto gerenciamento, direção e rapidez nos negócios de sua empresa, é uma ferramenta prática, simples e eficiente que se adapta as particularidades e necessidades da sua empresa para o crescimento no mercado atual.</p>
          </div>
        </div>
        <div className="about-team">
          <h1>Equipe</h1>
          <p>A HJ Systems conta com uma equipe especializada de consultores e desenvolvedores com mais de 10 anos de experiência na área de gestão de negócios e vem atuando nas maiores redes de franqueados do Brasil. O nosso objetivo é lhe ajudar a ter um negócio de sucesso, sempre atendo a todas a novidades a atualizações disponíveis no mercado atual.</p>

          <br />

          <h1>Atuação</h1>
          <p>Focamos nosso campo de atuação em soluções para Gestão Financeira, Comercial e no aprimoramento da relação da empresa com seus clientes, agregando qualidade e diferencial através das experiências em desenvolvimento de softwares. Atendemos empresas de pequeno, médio ou grande porte buscando sempre solucionar as necessidades de comunicação de seus clientes. Acompanhamos as fases de planejamento, implantação e treinamento, buscando oferecer um produto final condizente com a qualidade do projeto inicialmente apresentado.</p>
        </div>

        <Carrousel />

        <div className="about-team">
          <h1>Responsabilidade</h1>
          <p>Partindo da realidade que a prestação de serviço com qualidade está sendo cada dia mais requisitada pelos consumidores, as empresas precisam não só oferecer esse serviço com técnicos qualificados, mas também garantir a eficácia, rapidez e segurança na prestação de serviços.</p>
        </div>

        <div className="mapa-services">
          <div className="mapa">
            <img src={Mapa} alt="" />
          </div>

          <div className="text-mapa">
            <h1>Atuação</h1>
            <p>A HJ Systems hoje atende empresas em seis estados em mais de 40 cidades. </p>

            <br />

            <p className='strong'>Goiás</p>
            <p>Goiânia,  Aparecida de Goiânia, Caldas Novas, Campos Belos, Catalão, Formosa, Inhumas, Iporá, Itaberaí, Itapuranga, Itumbiara, Jataí, Jussara, Mineiros, Mozarlânida, Piracanjuba, Posse,  Quirinópolis, Rio Verde, Santa Helena, Senador Canedo, Trindade e Uruana. </p>
            <br />
            <p className='strong'>São Paulo</p>
            <p>São Paulo, Aparecida, Caçapava, Cruzeiro, Guaratinguetá, Lorena, Piquete e Queluz.</p>
            <br />
            <p className='strong'>Distrito Federal</p>
            <p>Brasília.</p>
            <br />
            <p className='strong'>Ceará</p>
            <p>Juazeiro do Norte.</p>
            <br />
            <p className='strong'>Tocantins</p>
            <p>JPalmas, Arraias, Dianópolis, Gurupi, Natividade, Porto Nacional, Taguatinga.</p>
            <br />
            <p className='strong'>Bahia</p>
            <p>Correntina.</p>
          </div>
        </div>

        <Form />
        <Footer />
      </div>
    </div>
  );
}
