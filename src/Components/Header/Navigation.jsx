import styled from 'styled-components';
import { MarginDisplay } from '../UI';

const StyledNavigation = styled.nav`
  padding: ${(props) => (props.isDesktop ? '.5rem 0' : '')};
  display: ${(props) => (props.isDesktop || props.isActiveMobile ? 'flex' : 'none')};
  justify-content: ${(props) => (props.isDesktop ? 'space-between' : 'center')};
  align-items: center;
`;

const Navigation = ({ children, isDesktop, isActiveMobile }) => {
  return (
    <>
      <MarginDisplay>
        <StyledNavigation isDesktop={isDesktop} isActiveMobile={isActiveMobile}>
        {children}
        </StyledNavigation>
      </MarginDisplay>
    </>
  );
};

export default Navigation;
