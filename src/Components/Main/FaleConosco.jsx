import styled from "styled-components";
import { corFundoPrimeiro, corTexto, corTextoSegundo, corTextoTerceiro } from "../UI/Variaveis";
import Formulario from "./Formulario";

import { MdEmail } from 'react-icons/md';
import { BsWhatsapp, BsFillTelephoneFill } from 'react-icons/bs';
import { ContainerContato, ContainerContatoImg } from "../UI";

const FaleConoscoSection = styled.section`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FaleConoscoContainerParagrafo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FaleConoscoContainerForm = styled.div`
  width: 45%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const FaleConoscoParagrafo = styled.p`
  font-size: clamp(24px, 2.6vw, 40px);
  font-weight: 500;
`;

const FaleConoscoSubParagrafo = styled.p`
  font-size: clamp(17px, 2vw, 28px);
  font-weight: 500;
  color: ${corTextoSegundo};
`;

const SectionContato = styled.section`
  display: flex;
  justify-content: space-around;
  padding-bottom: 2rem;

  @media screen and (max-width: 678px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ContainerContatos = styled(ContainerContato)`
  gap: 1rem;
  
  > a {
    color: ${corTextoTerceiro};
    font-weight: 500;
  
    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 678px) {
    flex-direction: row;
  }
`;

const ContainerContatosImg = styled(ContainerContatoImg)`
  width: 50px;
  height: 50px;
  background-color: ${corFundoPrimeiro};
  color: ${corTexto};
`;

const FaleConosco = () => {
  return (
    <>
      <FaleConoscoSection id='fale-conosco'>
        <FaleConoscoContainerParagrafo>
          <FaleConoscoParagrafo>
            Contrate sem sair de casa
          </FaleConoscoParagrafo>
          <FaleConoscoSubParagrafo>
            - Ficou com alguma duvida?
          </FaleConoscoSubParagrafo>
          <FaleConoscoSubParagrafo>
            - Quer contratar algum plano?
          </FaleConoscoSubParagrafo>
          <FaleConoscoParagrafo>
            Nós entramos em contato com você!
          </FaleConoscoParagrafo>
        </FaleConoscoContainerParagrafo>
        <FaleConoscoContainerForm>
          <Formulario />
        </FaleConoscoContainerForm>
      </FaleConoscoSection>

      <SectionContato>
        <ContainerContatos>
          <ContainerContatosImg>
            <MdEmail />
          </ContainerContatosImg>

          <a
            href='mailto:seuemail@example.com'
            target='_blank'
            rel='noopener noreferrer external'
          >
            seuemail@suaempresa.com.br
          </a>
        </ContainerContatos>

        <ContainerContatos>
          <ContainerContatosImg>
            <BsWhatsapp />
          </ContainerContatosImg>
          <a
            href='https://wa.me/seunumerodetelefone'
            target='_blank'
            rel='noopener noreferrer external'
          >
            (XX) XXXX-XXXX
          </a>
        </ContainerContatos>

        <ContainerContatos>
          <ContainerContatosImg>
            <BsFillTelephoneFill />
          </ContainerContatosImg>
          <a
            href='tel:seunumerodetelefone'
            target='_blank'
            rel='noopener noreferrer external'
          >
            (XX) XXXX-XXXX
          </a>
        </ContainerContatos>
      </SectionContato>
    </>
  );
};

export default FaleConosco;