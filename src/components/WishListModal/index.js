import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CloseIcon from './CloseIcon';

const WithListModalContainer = styled.div`
  width: 500px;
  min-height: 400px;
  max-height: 500px;
  overflow-y: auto;
  margin: 0 auto;
  position: fixed;
  top: 10%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background: #e0e0e0;
  z-index: 100;
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  box-sizing: border-box;
`;

const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  box-sizing: border-box;
`;

const ProductItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 150px;
    min-width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: center;
    border: 1px solid #cccccc;
    margin-right: 30px;
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  padding: 8px;
  cursor: pointer;
  background: grey;
  border-radius: 50%;
`;

const WithListModal = ({ wishList, onClose }) => (
  <WithListModalContainer>
    <ModalHeader>
      WishList
      <StyledCloseIcon onClick={onClose} />
    </ModalHeader>
    <ModalContent>
      {wishList.map(({ name, imgSrc }) => (
        <ProductItem>
          <img src={imgSrc} alt="" />
          {name}
        </ProductItem>
      ))}
    </ModalContent>
  </WithListModalContainer>
);

WithListModal.propTypes = {
  wishList: PropTypes.array,
  onClose: PropTypes.func,
};

export default WithListModal;
