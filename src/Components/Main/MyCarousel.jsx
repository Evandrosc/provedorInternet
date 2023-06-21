import internet1 from '../../assets/images/internet1.png';
import internet1media from '../../assets/images/internet1media.jpg';
import internet1pequena from '../../assets/images/internet1pequena.jpg';
import internet2 from '../../assets/images/internet2.png';
import internet2media from '../../assets/images/internet2media.jpg';
import internet2pequena from '../../assets/images/internet2pequena.jpg';
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

  > picture {
    > img {
      width: 100%;
      height: auto;
    }
  }
`;

const slides = [
  {
    id: 1,
    img: internet1,
    imgMedia: internet1media,
    img3Pequena: internet1pequena
  },
  {
    id: 2,
    img: internet2,
    imgMedia: internet2media,
    imgPequena: internet2pequena
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
            <picture>
              <source 
                media='(max-width: 620px)'
                srcSet={slide.imgPequena} 
                alt='imagem de planos' 
                width='600px' 
                height='600px'
              />
              <source 
                media='(max-width: 850px)'
                srcSet={slide.imgMedia} 
                alt='imagem de planos' 
                width='800px' 
                height='800px'
              />
              <img src={slide.img} alt={`Image ${slide.id}`} width='1419px' height='319px' />
            </picture>
          </ContainerCarousel>
        ))}
      </Carousel>
    </Container>
  );
};

export default MyCarousel;