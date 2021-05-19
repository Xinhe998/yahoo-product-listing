import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto; 
  -webkit-box-align: start;
  -webkit-align-items: start;
  -ms-flex-align: start;
  align-items: start;
  justify-items: center;
  grid-gap: 20px 30px;
  margin-bottom: 80px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: auto auto;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: auto auto auto;
  }
`;

const TemplateGrid = ({ children }) => <Grid>{children}</Grid>;

TemplateGrid.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TemplateGrid;
