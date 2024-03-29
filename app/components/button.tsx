import { FC } from 'react';
import styled from 'styled-components';
import { BREAKPTS } from '../styles';

export const BaseButton = styled.button`
  outline: none;
  background: none;
  border: none;
  transition: 200ms ease-in-out transform;
  transform: scale(1, 1);
  padding: 0;
  cursor: pointer;
  &:hover {
    transform: scale(0.98, 0.98);
  }
  @media (max-width: ${BREAKPTS.SM}px) {
    font-size: 14px;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  position: relative;
  &::after {
    content: '';
    transition: 125ms ease-in-out all;
    background: #f8f8f8;
    opacity: 0;
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  :hover {
    &::after {
      opacity: 1;
      transform: scale(1.01, 1.01);
    }
  }
  :disabled {
    cursor: not-allowed;
  }
`;

export const TertiaryButton = styled(BaseButton)`
  font-weight: bold;
  font-size: 16px;
  @media (max-width: ${BREAKPTS.SM}px) {
    font-size: 14px;
  }
`;
