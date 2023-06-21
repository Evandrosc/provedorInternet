import styled from 'styled-components';
import Logo from '../Header/Logo';
import seloAnatel from '../../assets/images/seloAnatel.png';
import { corFundoPrimeiro, corFundoSegundo, corTexto, corTextoTerceiro } from '../UI/Variaveis';
import { ContainerContato, ContainerContatoImg, MarginDisplay } from '../UI';
import { BsFillTelephoneFill, BsWhatsapp, BsFacebook, BsInstagram } from 'react-icons/bs';


const StyledFooter = styled.footer`
  background-color: ${corFundoPrimeiro};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }

  > div {
    display: flex;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`;

const Endereco = styled.address`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > p {
    color: ${corTexto};
    font-style: normal;
  }
`;

const ContainerContatos = styled(ContainerContato)`

  gap: .3rem;

  > a {
    color: ${corTexto};
    font-size: .85rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;


const ContainerContatosImg = styled(ContainerContatoImg)`
  width: 1rem;
  height: 1rem;
  background-color: ${corTexto};
  color: ${corFundoPrimeiro};
`;

const ContainerCopyRightRedeSociais = styled.div`
  border-top: 1px solid ${corFundoSegundo};
  padding: 2rem 0;
`;

const CopyRightRedeSociais = styled.div`

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  > p {
    color: ${corTexto};
    text-align: center;
  }
`;

const RedesSociais = styled.div`
  display: flex;
  gap: 2rem;

  > a {

    width: 20px;
    height: 20px;

    > svg {
      color: ${corTexto};
      width: 100%;
      height: 100%;

      &:hover {
        color: ${corTextoTerceiro};
      }
    }
  }
`;

const ano = (new Date()).getFullYear();

const Footer = () => {

  return (
    <StyledFooter>
      <MarginDisplay>
        <Container>
          <div>
            <SubContainer>
              <Logo to='inicio' width={70} height={70} />

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
            </SubContainer>
          </div>

          <div>
            <Endereco>
              <p>Rua</p>
              <p>Bairro</p>
              <p>Número</p>
            </Endereco>
          </div>

          <div>
            <img src={seloAnatel} alt='Logo Anatel' width='200px' height='85px' />
          </div>
        </Container>

      </MarginDisplay>
      <ContainerCopyRightRedeSociais>
        <MarginDisplay>
          <CopyRightRedeSociais>
            <p>
              © {ano} Provedor de Internet. Todos os direitos reservados
            </p>

            <RedesSociais>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer external'
                title='Whatsapp'
              >
                <BsWhatsapp />
              </a>

              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer external'
                title='Facebook'
              >
                <BsFacebook />
              </a>

              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer external'
                title='Instagram'
              >
                <BsInstagram />
              </a>
            </RedesSociais>
          </CopyRightRedeSociais>
        </MarginDisplay>
      </ContainerCopyRightRedeSociais>
    </StyledFooter>
  );
};

export default Footer;