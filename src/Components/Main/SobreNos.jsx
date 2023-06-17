import styled from "styled-components";
import { corFundoSegundo, corTextoSegundo } from "../UI/Variaveis";

import { FaCrown } from 'react-icons/fa';
import { AiFillChrome } from 'react-icons/ai';
import { IoIosSpeedometer } from 'react-icons/io';
import { FaHandHoldingHeart } from 'react-icons/fa';

const SectionSobreNos = styled.section`
  background-color: ${corFundoSegundo};
  margin: 1rem 0;
  padding: 2rem 1rem;
  border-radius: 20px;
`;

const SobreNosTitulo = styled.h1`
    text-align: center;
    font-size: clamp(22px, 3vw, 30px);
    font-weight: 600;
`;

const SobreNosTituloSpan = styled.span`
  color: ${corTextoSegundo};
`;

const SobreNosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SobreNosStyled = styled.div`
  margin-top: 1rem;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const StyledIcon = styled.div`
  width: 50px;
  height: 50px;
  color: ${corTextoSegundo};

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

const SobreNosSubTitulo = styled.h2`
  font-size: 1.2rem;
`;

const SobreNosParagrafo = styled.p`
  text-align: center;
  width: 90%;
`;

const ArraySobreNosVantagens = [
  { id: 1, img: <FaCrown />, titulo: '100% fibra óptica', paragrafo: 'Muito mais eficaz que as conexões a cabo comuns' },

  { id: 2, img: <AiFillChrome />, titulo: 'Sem franquia de dados', paragrafo: 'Para navegar até onde o seu equipamento precisar' },

  { id: 3, img: <IoIosSpeedometer />, titulo: 'Instalação rápida', paragrafo: 'Você não precisa esperar semanas para ter internet' },

  { id: 4, img: <FaHandHoldingHeart />, titulo: 'Mensalidade fixa', paragrafo: 'Você paga um valor fixo, sem surpresas no final de mês' }
]

const SobreNos = () => {
  return (
    <SectionSobreNos id='sobre-nos'>

      <SobreNosTitulo>
        Por que a <SobreNosTituloSpan>nome da sua empresa</SobreNosTituloSpan> é a melhor opção para você?
      </SobreNosTitulo>
      <SobreNosContainer>
        {ArraySobreNosVantagens.map((vantagens) => (
          <SobreNosStyled key={vantagens.id}>
            <StyledIcon>
              {vantagens.img}
            </StyledIcon>
            <SobreNosSubTitulo>{vantagens.titulo}</SobreNosSubTitulo>
            <SobreNosParagrafo>
              {vantagens.paragrafo}
            </SobreNosParagrafo>
          </SobreNosStyled>
        ))}
      </SobreNosContainer>
    </SectionSobreNos>
  );
};

export default SobreNos;