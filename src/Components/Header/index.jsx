import { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from './MenuIcon';
import Logo from './Logo';
import NavigationLinks from './NavigationLinks';
import MenuLink from '../Header/MenuLink';
import Navigation from './Navigation';

import { corFundoPrimeiro } from '../UI/Variaveis';

const StyledHeader = styled.header`
  background-color: ${corFundoPrimeiro};
  position: fixed;
  width: 100%;
  z-index: 16;
`;

const Cabecalho = () => {
  const [isActiveMobile, setIsActiveMobile] = useState(false);

  const closeNavbar = () => {
    setIsActiveMobile(false);
  };

  return (
    <StyledHeader>
      <Navigation isDesktop isActiveMobile={isActiveMobile}>
        <Logo to='inicio' width={80} height={80} />
        <NavigationLinks isDesktop>
          <MenuLink to='inicio'>Início</MenuLink>
          <MenuLink to='planos'>Planos</MenuLink>
          <MenuLink to='sobre-nos'>Sobre Nós</MenuLink>
          <MenuLink to='fale-conosco'>Fale Conosco</MenuLink>
        </NavigationLinks>
        <MenuIcon setIsActiveMobile={setIsActiveMobile} isActiveMobile={isActiveMobile} />
      </Navigation>
      <Navigation isMobile isActiveMobile={isActiveMobile}>
        <NavigationLinks>
          <MenuLink to='inicio' mobile='true' closeNavbar={closeNavbar}>Início</MenuLink>
          <MenuLink to='planos' mobile='true' closeNavbar={closeNavbar}>Planos</MenuLink>
          <MenuLink to='sobre-nos' mobile='true' closeNavbar={closeNavbar}>Sobre Nós</MenuLink>
          <MenuLink to='fale-conosco' mobile='true' closeNavbar={closeNavbar}>Fale Conosco</MenuLink>
        </NavigationLinks>
      </Navigation>
    </StyledHeader>
  );
};

export default Cabecalho;