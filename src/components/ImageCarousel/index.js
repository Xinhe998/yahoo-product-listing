import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageCarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  button {
    visibility: hidden;
  }

  &:hover button {
    visibility: visible;
  }
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: ${props => `translateX(-${props.xPosition}px)`};
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.1);

  img {
    min-width: 100%;
    width: 100%;
    margin: 0;
    position: relative !important;
  }
`;

const PrevButton = styled.button`
  position: absolute;
  top: calc((100% - 40px) / 2);
  left: 0;
  border: 0;
  height: 40px;
  width: 30px;
  cursor: pointer;
  z-index: 100;
`;

const NextButton = styled.button`
  position: absolute;
  top: calc((100% - 40px) / 2);
  right: 0;
  cursor: pointer;
  border: 0;
  height: 40px;
  width: 30px;
  z-index: 100;
`;

const useCarouselWidth = (elRef) => {
  const [width, setWidth] = useState(
    (elRef.current && elRef.current.getBoundingClientRect().width) || 0,
  );

  const setCarouselWidth = () => {
    setWidth(
      (elRef.current && elRef.current.getBoundingClientRect().width) || 0,
    );
  };

  return [width, setCarouselWidth];
};

const ImageCarousel = ({ imgSources }) => {
  const slidesCount = imgSources.length;
  const [currentSlide, setCurrentSlide] = useState(1);
  const imgWrapperRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useCarouselWidth(imgWrapperRef);

  useEffect(() => {
    setCarouselWidth(imgWrapperRef);
    window.addEventListener('resize', () => setCarouselWidth(imgWrapperRef));

    return () => {
      window.removeEventListener('resize', () => setCarouselWidth(imgWrapperRef));
    };
  }, []);

  const xPosition = carouselWidth * (currentSlide - 1);

  /**
   * Event Handler
   */
  const handlePrevBtnClick = () => {
    setCurrentSlide(currentSlide > 1 ? currentSlide - 1 : slidesCount);
  };

  const handleNextBtnClick = () => {
    setCurrentSlide(currentSlide < slidesCount ? currentSlide + 1 : 1);
  };

  return (
    <ImageCarouselContainer ref={imgWrapperRef}>
      <PrevButton onClick={handlePrevBtnClick}>{'<'}</PrevButton>
      <NextButton onClick={handleNextBtnClick}>{'>'}</NextButton>
      <ImagesWrapper xPosition={xPosition}>
        {imgSources.map(imgSrc => (
          <img src={imgSrc} alt="" />
        ))}
      </ImagesWrapper>
    </ImageCarouselContainer>
  );
};

ImageCarousel.propTypes = {
  imgSources: PropTypes.array,
};

export default ImageCarousel;
