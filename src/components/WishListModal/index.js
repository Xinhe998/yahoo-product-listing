import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CloseIcon from './CloseIcon';

const WithListModalContainer = styled.div`
  width: 600px;
  min-height: 400px;
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

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
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
    <div>
      {wishList.map(({ name }) => (
        <ProductItem>{name}</ProductItem>
      ))}
    </div>
  </WithListModalContainer>
);

WithListModal.propTypes = {
  wishList: PropTypes.array,
  onClose: PropTypes.func,
};

export default WithListModal;
