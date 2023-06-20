import logo from '../../assets/images/logo.png';
import styled from "styled-components";
import { Link, scroller as scroll } from 'react-scroll';

const StyledLink = styled(Link)`
  cursor: pointer;
`;

const Logo = ({ to, width, height }) => {

  const style = {
    width: `${width}px`,
    height: `${height}px`,
  };

  const handleScroll = () => {
    const scrollOptions = {
      duration: 1000,
      smooth: 'easeInOutQuart',
    };
  
    scroll.scrollTo(to, scrollOptions);
  };

  return (
    <StyledLink to={to} onClick={handleScroll}>
      <img src={logo} alt="Logo" title="Logo" style={style} />
    </StyledLink>
  );
}

export default Logo;