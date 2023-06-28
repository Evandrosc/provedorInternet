import { useState } from "react";
import styled from "styled-components";
import { corFundoPrimeiro, corFundoSegundo, corTexto, corTextoSegundo, corActive } from "../UI/Variaveis";
import { BiWifi, BiInfinite } from 'react-icons/bi';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';



const TituloPlanos = styled.h1`
  text-align: center;
  font-size: 2.1rem;
  font-weight: 600;
  margin: 2rem 0;
`;

const EscolherCidade = styled.h2`
  text-align: center;
  font-weight: 400;
`

const Select = styled.select`
  background-color: ${corFundoSegundo};
  width: 80%;
  max-width: 240px;
  height: 2rem;
  margin: 1rem auto;
  border-radius: 5px;
  font-size: 1.1rem;
  outline: none;
`;

const BoxPlanos = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 2%;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    gap: 0;
  };

  > div {
    background-color: ${corFundoSegundo};
    width: 32%;
    min-width: 82.6656px;
    margin-bottom: 1rem;
    padding: 2rem 0;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (max-width: 1024px) {
      width: 48%;
    };

    @media screen and (max-width: 768px) {
      width: 100%;
    };

    > h2 {
      text-align: center;
      font-size: 1.8rem;
      font-weight: 500;
    }
  }
`;

const VelocidadePlano = styled.p`
  color: ${corTextoSegundo};
  text-align: center;
  font-size: 2.6rem;
  font-weight: 700;
`;

const PrecoPlano = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
`;

const ListasVantagensPlano = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > li {
    width: 80%;
    font-size: 1.1rem;
    font-weight: 500;
    padding-bottom: 1rem;
    border-bottom: 2px solid black;
    display: flex;
    justify-content: center;
    gap: 4%;
    align-items: center;
  }
`;

const BtnPlano = styled.a`
  background-color: ${corFundoPrimeiro};
  color: ${corTexto};
  font-size: 1.3rem;
  text-align: center;
  margin: 0 auto;
  width: 80%;
  padding: 1rem 0;
  border-radius: 10px;
  cursor: pointer;

  &:active {
    background-color: ${corActive};
  }
`;

const EnfasePlanos = styled.em`
  text-align: center;
  font-size: clamp(12px, 1vw, 16px);
`;

const Planos = () => {

  const [verificarCidade, setVerificarCidade] = useState(0);

  const cidadeSelecionada = (event) => {
    const cidade = event.target.value;

    setVerificarCidade(cidade);
  };

  const cidades = [
    {
      id: 0,
      cidade: 'Cidade 1',
      velocidade: ['20', '250', '500'],
      preco: ['60,00', '70,00', '95,00'],
    },

    {
      id: 1,
      cidade: 'Cidade 2',
      velocidade: ['10', '50', '150'],
      preco: ['40,00', '60,00', '90,00'],
    }
  ];

  const planos = [
    {
      id: 1,
      titulo: 'Plano Start',
      velocidade: `${cidades[verificarCidade].velocidade[0]}`,
      preco: `${cidades[verificarCidade].preco[0]}`,
      cidade: `${cidades[verificarCidade].cidade}`
    },

    {
      id: 2,
      titulo: 'Plano Avançado',
      velocidade: `${cidades[verificarCidade].velocidade[1]}`,
      preco: `${cidades[verificarCidade].preco[1]}`,
      cidade: `${cidades[verificarCidade].cidade}`
    },

    {
      id: 3,
      titulo: 'Plano Master',
      velocidade: `${cidades[verificarCidade].velocidade[2]}`,
      preco: `${cidades[verificarCidade].preco[2]}`,
      cidade: `${cidades[verificarCidade].cidade}`
    }
  ];


  return (
    <>
      <TituloPlanos id='planos'>Conheça Nossos planos!</TituloPlanos>

      <EscolherCidade>Selecione sua cidade</EscolherCidade>

      <Select onChange={cidadeSelecionada}>
        {cidades.map(cidade =>
          <option key={cidade.id} value={cidade.id} onChange={cidadeSelecionada}>{cidade.cidade}</option>
        )}
      </Select>
      <BoxPlanos>
        {planos.map(plano => (
          <div key={plano.id}>
            <h2>{plano.titulo}</h2>
            <VelocidadePlano>{plano.velocidade} Mb</VelocidadePlano>
            <PrecoPlano>R${plano.preco} por mês</PrecoPlano>
            <ListasVantagensPlano>
              <li> <AiOutlineDown />100% de download</li>
              <li> <AiOutlineUp /> 50% de upload</li>
              <li> <BiInfinite /> Franquia Ilimitada</li>
              <li> <BiWifi /> Instalação Gratuita</li>
            </ListasVantagensPlano>
            <BtnPlano
              href={`https://wa.me//5586998200728?text=Olá,%20gostaria%20de%20contratar%20o%20plano%20*${plano.titulo}*%20no%20valor%20de%20*${plano.preco}*%20na%20cidade%20*${plano.cidade}*.`}
              target='_blank'
              rel='noopener noreferrer external'
            >
              Assinar
            </BtnPlano>
          </div>
        ))}
      </BoxPlanos>
      <EnfasePlanos>
        * Roteador incluso em regime de comodato. Planos válidos com fidelidade de 12 meses. Ativação gratuita mediante viabilidade técnica e análise interna.
      </EnfasePlanos>
    </>
  );
};

export default Planos;