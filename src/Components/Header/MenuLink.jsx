import { Link, scroller as scroll } from 'react-scroll';
import styled from 'styled-components';

import { corFundoTerceiro, corTexto } from '../UI/Variaveis';

const StyledMenuLink = styled(Link)`
  width: ${(props) => (props.mobile ? '100vw' : '')};
  text-align: center;
  color: ${corTexto};
  border-bottom: 3px solid transparent;
  transition: border-bottom-color 0.3s ease;
  font-size: ${(props) => (props.mobile ? '20px' : '')};
  border-bottom: ${(props) => (props.mobile ? `1px solid ${corFundoTerceiro}` : '')};
  padding: ${(props) => (props.mobile ? '30px 0' : '')};
  cursor: pointer;

  &:nth-child(4) {
    border-bottom: ${(props) => (props.mobile ? '0' : '')};
  }

  &:hover {
    border-bottom-color: ${(props) => (props.mobile ? '' : `${corFundoTerceiro}`)};
  }
`;

const MenuLink = ({ children, to, mobile, closeNavbar }) => {

const handleScroll = () => {
  const scrollOptions = {
    duration: 1000,
    smooth: 'easeInOutQuart',
    offset: mobile ? -110 : -110,
  };

  scroll.scrollTo(to, scrollOptions);
};
    

  const handleClick = () => {
    if (mobile) {
      closeNavbar();
    }

    handleScroll();
  };

  return (
    <StyledMenuLink to={to} mobile={mobile} onClick={handleClick} rel='nofollow'>
      {children}
    </StyledMenuLink>
  );
};

export default MenuLink;
