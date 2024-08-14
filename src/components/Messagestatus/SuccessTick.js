import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { keyframes } from '@emotion/react';
import { css } from '@emotion/react';

const successAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const successStyle = css`
  color: green;
  font-size: 48px;
  animation: ${successAnimation} 0.5s ease-out;
`;

const SuccessTick = () => (
  <CheckCircleIcon css={successStyle} />
);

export default SuccessTick;
