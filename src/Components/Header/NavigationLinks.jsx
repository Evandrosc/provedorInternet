import styled from 'styled-components';

const StyledNavigationLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.isDesktop ? 'row' : 'column')};
  align-items: center;
  width: 40%;

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isDesktop ? 'none' : 'flex')};
  }
`;

const NavigationLinks = ({ children, isDesktop }) => {
  return (
    <StyledNavigationLinks isDesktop={isDesktop}>
      {children}
    </StyledNavigationLinks>
  );
};

export default NavigationLinks;
