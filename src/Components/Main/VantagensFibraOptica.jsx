import styled from "styled-components";
import imgFundoFibraOptica from '../../assets/images/imgFundofibraOptica.webp';
import { corTexto, corFundoQuatro } from "../UI/Variaveis";

import { BiServer, BiRocket } from 'react-icons/bi';
import { BsCloudLightningRain } from 'react-icons/bs';


const SectionVantagensFibraOptica = styled.section`
  height: 400px;
  width: 100%;
  position: relative;
  display: flex;

  &::before {
    content: '';
    background-image: url(${imgFundoFibraOptica});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    filter: brightness(0.4);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media screen and (max-width: 758px) {
    height: 630px;
  }

  @media screen and (max-width: 518px) {
    height: 800px;
  }

`;

const ContainerFibra = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3%;
  position: absolute;
  top: 50%;
  left: 5vw;
  right: 5vw;
  transform: translateY(-50%);

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ContainerVantagensFibraTitulo = styled.div`

  width: 48%;

  @media screen and (max-width: 1024px) {
    text-align: center;
    margin-bottom: 1rem;
    width: 100%;
  }
`

const VantagensFibraTitulo = styled.h1`
  color: ${corTexto};
  font-size: clamp(20px, 1.9vw, 32px);
  font-weight: 300;
  line-height: clamp(33px, 3.1vw, 48px);

  > strong {
    font-size: clamp(25px, 2.6vw, 44px);
    font-weight: 700;
  }
`;

const VantagensFibraSubTitulo = styled.h2`
  color: ${corTexto};
  font-weight: 300;
  font-size: 1rem;
`;

const ContainerFibraVantagens = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const ContainerVantagensFibra = styled.div`
  width: 30%;
  min-width: 217px;
  padding: 1.5rem 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  

  > div {
    width: 54px;
    height: 54px;
    
    > svg {
      width: 100%;
      height: 100%;
      color: ${corTexto};
    }
  }

  > h2 {
    color: ${corTexto};
    font-weight: 700;
    font-size: clamp(15px, 1.5vw, 23px);
  }

  > p {
    color: ${corTexto};
    font-size: .84rem;
    line-height: 1.5rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${corFundoQuatro};
    opacity: .6;
    border-radius: 15px;
    z-index: -1;
  }

  @media screen and (max-width: 518px) {
    width: 90%;
  }
`;


const VantagensFibraOptica = () => {
  return (
    <SectionVantagensFibraOptica>

        <ContainerFibra>

          <ContainerVantagensFibraTitulo>
            <VantagensFibraTitulo>
              Vantagens da internet <br />
              <strong>
                100% fibra óptica
              </strong>
            </VantagensFibraTitulo>
            
            <VantagensFibraSubTitulo>
              A <strong>nome da sua empresa</strong> leva a melhor tecnologia até sua porta.
            </VantagensFibraSubTitulo>
          </ContainerVantagensFibraTitulo>

          <ContainerFibraVantagens>
            <ContainerVantagensFibra>
              <div>
                <BiServer />
              </div>

              <h2>Tecnologia de ponta</h2>

              <p>A fibra sai diretamente dos nossos <wbr /> servidores para dentro do seu imóvel</p>
            </ContainerVantagensFibra>

            <ContainerVantagensFibra>
              <div>
                <BiRocket />
              </div>

              <h2>Ultravelocidade</h2>

              <p>A velocidade de transmissão de dados é <wbr /> maior que de outras tecnologias</p>
            </ContainerVantagensFibra>

            <ContainerVantagensFibra>
              <div>
                <BsCloudLightningRain />
              </div>

              <h2>Não sofre interferências</h2>

              <p>Mesmo em tempestades e situações <wbr /> adversas, o sinal se mantém estável</p>
            </ContainerVantagensFibra>

          </ContainerFibraVantagens>


        </ContainerFibra>

    </SectionVantagensFibraOptica>
  );
};

export default VantagensFibraOptica;