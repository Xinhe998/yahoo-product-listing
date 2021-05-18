import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RatingBox = styled.div`
  color: #a7a7a7;
  display: flex;
  margin-left: 8px;
`;

const Star = styled.span`
  font-size: 18px;
  width: 22px;
  height: 22px;
  padding: 0 2px;
  position: relative;
`;

const FullStar = styled(Star)`
  &::before {
    content: "★";
    color: #f5bd3f;
    position: absolute;
    left: 0;
    overflow: hidden;
  }
`;

const HalfStar = styled(Star)`
  &::before {
    content: "★";
    color: #f5bd3f;
    width: 35%;
    position: absolute;
    left: 0;
    overflow: hidden;
  }

  &::after {
    content: "★";
    position: absolute;
    left: 0;
    width: 50%;
    text-indent: 100%;
    overflow: hidden;
  }
`;

const EmptyStar = styled(Star)`
  &::before {
    content: "★";
    position: absolute;
    left: 0;
    overflow: hidden;
  }
`;

const StarRating = ({ starCount, rating }) => {
  const fullStarsCount = parseInt(rating, 0);
  const halfStarsCount = rating - fullStarsCount > 0 ? 1 : 0;
  const emptyStarsCount = starCount - fullStarsCount - halfStarsCount;

  return (
    <RatingBox>
      {[...Array(fullStarsCount)].map(n => (
        <FullStar key={`fullStar-${n}`} />
      ))}
      {[...Array(halfStarsCount)].map(n => (
        <HalfStar key={`halfStar-${n}`} />
      ))}
      {[...Array(emptyStarsCount)].map(n => (
        <EmptyStar key={`emptyStar-${n}`} />
      ))}
    </RatingBox>
  );
};

StarRating.propTypes = {
  starCount: PropTypes.number,
  rating: PropTypes.number,
};

export default StarRating;
