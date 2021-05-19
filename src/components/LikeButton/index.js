import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeartIcon from './HeartIcon';

const HiddenCheckbox = styled.input`
  clear: both;
  display: none;

  + label {
    overflow: hidden;
    display: block;
    text-align: center;
    cursor: pointer;
    -webkit-transition: all 100ms ease;
    transition: all 100ms ease;
  }
`;

const StyledHeartIcon = styled(HeartIcon)`
  vertical-align: middle;
  width: 35px;
  -webkit-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
  fill: ${props => (props.isFilled ? 'rgb(220, 72, 127)' : 'rgb(167, 167, 167)')};
`;

const LikeButton = ({ activated, onLikeButtonClicked, ...props }) => (
  <div {...props}>
    <HiddenCheckbox type="checkbox" checked={activated} />
    <label onClick={onLikeButtonClicked}>
      <StyledHeartIcon isFilled={activated} />
    </label>
  </div>
);

LikeButton.propTypes = {
  activated: PropTypes.bool,
  onLikeButtonClicked: PropTypes.func,
};

export default LikeButton;
