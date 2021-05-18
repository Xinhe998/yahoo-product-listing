import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  -webkit-box-align: start;
  -webkit-align-items: start;
  -ms-flex-align: start;
  align-items: start;
  justify-items: center;
  grid-gap: 20px 30px;
  margin-bottom: 80px;
`;

const TemplateGrid = ({ children }) => <Grid>{children}</Grid>;

TemplateGrid.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TemplateGrid;
