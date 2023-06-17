/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import internet1 from '../../assets/images/internet1.png';
import internet2 from '../../assets/images/internet2.png';
import { Carousel } from 'antd';

import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 5.5rem;
`;

const CarouselContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const StyledCarousel = styled(Carousel)`
  width: 100%;
`;

const SlideImage = styled.img`
  width: 100%;
`;

const NavWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`;

const NavIconLeft = styled(AiFillLeftCircle)`
  color: #ffffff;
  cursor: pointer;
`;

const NavIconRight = styled(AiFillRightCircle)`
  color: #ffffff;
  cursor: pointer;
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
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    carouselRef.current.next();
    const newSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const goToPrevSlide = () => {
    carouselRef.current.prev();
    const newSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <Container id='inicio'>
      <CarouselContainer>
        <StyledCarousel ref={carouselRef} autoplay>
          {slides.map((props) => (
            <div key={props.id}>
              <SlideImage src={props.img} alt={`Image ${props.id}`} />
            </div>
          ))}
        </StyledCarousel>
        <NavWrapper>
          <NavIconLeft size='32px' onClick={goToPrevSlide} />
          <NavIconRight size='32px' onClick={goToNextSlide} />
        </NavWrapper>
      </CarouselContainer>
    </Container>
  );
};

export default MyCarousel;