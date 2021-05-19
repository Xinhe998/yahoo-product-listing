import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRating from '../StarRating';
import LikeButton from '../LikeButton';

const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  position: relative;
  width: 100%;
  height: 100%;
  transition: all ease 0.05s;
  border: 2px solid rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow: hidden;
  margin-bottom: 8px;
  padding-top: 100%; */
  display: flex;
  flex-direction: column;
  opacity: 0.99;
  position: relative;
  padding-top: calc(60% + 48px);
  height: 100%;
  overflow: hidden;
`;

const ProductName = styled.div`
  margin: 0;
  max-height: 36px;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
  overflow: hidden;
  line-height: 20px;
  padding: 8px;
  color: rgba(0, 0, 0, 0.7);
`;

const ProductPrice = styled.p`
  margin: 0;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  padding: 0 8px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
`;

const StyledLikeButton = styled(LikeButton)`
  display: flex;
  justify-content: flex-end;
  padding: 0 8px;
`;

const DiscountedBadge = styled.span`
  position: absolute;
  background: #64899c;
  border-radius: 4px;
  padding: 2px;
  right: 10px;
  top: 10px;
  font-size: 12px;
`;

const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 60%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 0;
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;
  }
`;

const ProductItem = ({
  name,
  price,
  rating,
  imgSrc,
  discountedPrice,
  onLikeButtonClicked,
  isLiked,
}) => (
  <ProductItemContainer>
    <InnerWrapper>
      <ImgWrapper>
        <img src={imgSrc} alt="" />
      </ImgWrapper>
      {discountedPrice && (
        <DiscountedBadge>{`${discountedPrice}% Off`}</DiscountedBadge>
      )}
      <ProductName>{name}</ProductName>
      <ProductPrice>{`$${price}`}</ProductPrice>
      <StarRating starCount={5} rating={rating} />
      <StyledLikeButton
        activated={isLiked}
        onLikeButtonClicked={onLikeButtonClicked}
      />
    </InnerWrapper>
  </ProductItemContainer>
);

ProductItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  discountedPrice: PropTypes.number,
  rating: PropTypes.number,
  imgSrc: PropTypes.string,
  isLiked: PropTypes.bool,
  onLikeButtonClicked: PropTypes.func,
};

export default ProductItem;
