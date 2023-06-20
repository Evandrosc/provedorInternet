import internet1 from '../../assets/images/internet1.png';
import internet2 from '../../assets/images/internet2.png';
import { Carousel } from 'antd';
import { scroller as scroll } from 'react-scroll';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 5.5rem;
  margin-bottom: 2rem;
`;

const ContainerCarousel = styled.div`
  cursor: pointer;
  outline: none;
`;

const slides = [
  {
    id: 1,
    img: internet1
  },
  {
    id: 2,
    img: internet2
  }
];

const MyCarousel = () => {
  const handleScroll = () => {
    const scrollOptions = {
      duration: 1000,
      smooth: 'easeInOutQuart',
      offset: -100,
    };

    scroll.scrollTo('planos', scrollOptions);
  };

  return (
    <Container id="inicio">
      <Carousel autoplay>
        {slides.map((slide) => (
          <ContainerCarousel key={slide.id} onClick={handleScroll}>
            <img src={slide.img} alt={`Image ${slide.id}`} width="100%" />
          </ContainerCarousel>
        ))}
      </Carousel>
    </Container>
  );
};

export default MyCarousel;