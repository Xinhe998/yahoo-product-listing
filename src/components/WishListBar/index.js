import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WithListBarContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 30px;
  bottom: 0;
  left: 0;
  padding: 10px 20px;
  background: #ffeca9;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-content: center;
  line-height: 30px;
  cursor: pointer;
`;

const WithListBar = ({ wishList, onClick }) => {
  const count = wishList.length;

  return (
    <WithListBarContainer onClick={onClick}>
      {`${count} products in Wishlist`}
    </WithListBarContainer>
  );
};

WithListBar.propTypes = {
  wishList: PropTypes.array,
  onClick: PropTypes.func,
};

export default WithListBar;
