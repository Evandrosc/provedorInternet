import MyCarousel from "./MyCarousel";
import styled from "styled-components";
import { BsRocketTakeoffFill } from 'react-icons/bs';
import { corFundoPrimeiro, corTexto, corFundoTerceiro } from "../UI/Variaveis";
import Planos from "./Planos";
import { MarginDisplay } from "../UI";
import SobreNos from "./SobreNos";
import FaleConosco from "./FaleConosco";
import VantagensFibraOptica from "./VantagensFibraOptica";

const StyledMain = styled.main`
  background-color: ${corFundoTerceiro};
`;


const StyledParagrafo = styled.p`
  background-color: ${corTexto};
  text-align: center;
  font-size: clamp(21px, 2.3vw, 32px);
  font-weight: 500;
  border-radius: 10px;
  padding: 2rem 1rem;
`;

const StyledSpan = styled.span`
  color: ${corFundoPrimeiro};
`;

const StyledBsRocketTakeoffFill = styled(BsRocketTakeoffFill)`
  color: ${corFundoPrimeiro};
`;

const SectionPlanos = styled.section`
  display: flex;
  flex-direction: column;
`

const Main = () => {
  return (
    <StyledMain>

      <MyCarousel />

      <MarginDisplay>

        <SectionPlanos>
          <StyledParagrafo>
            Você está a um passo de levar a <StyledSpan>melhor internet</StyledSpan> para a sua casa ou empresa! <StyledBsRocketTakeoffFill />
          </StyledParagrafo>
          <Planos />
        </SectionPlanos>

        <SobreNos />

        <FaleConosco />
        
      </MarginDisplay>

        <VantagensFibraOptica />
    </StyledMain>
  );
};

export default Main;