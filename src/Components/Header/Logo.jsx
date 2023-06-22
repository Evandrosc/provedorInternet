import logo from '../../assets/images/logo.webp';
import styled from "styled-components";
import { Link, scroller as scroll } from 'react-scroll';

const StyledLink = styled(Link)`
  cursor: pointer;
`;

const Logo = ({ to, width, height }) => {

  const handleScroll = () => {
    const scrollOptions = {
      duration: 1000,
      smooth: 'easeInOutQuart',
    };
  
    scroll.scrollTo(to, scrollOptions);
  };

  return (
    <StyledLink to={to} onClick={handleScroll}>
      <img 
        src={logo} 
        alt="Logo"
        rel='nofollow'
        title='Logo' 
        width={`${width}px`} 
        height={`${height}px`} 
      />
    </StyledLink>
  );
}

export default Logo;