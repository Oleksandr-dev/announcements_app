import React from 'react';
import styled from "styled-components";

export const StyledButton = styled.div`
  width: max-content;
  min-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  background-color: ${({theme, redColor}) => redColor ? theme.$red : theme.$gray};
  border-radius: 6px;
  cursor: pointer;
  user-select: none;

  text-transform: uppercase;
  font-size: 12px;
  color: ${({theme}) => theme.$gainsboro};
  font-family: ${({theme}) => theme.$secondaryFont};

  &:hover {
    background-color: ${({theme, redColor}) => redColor ? theme.$darkRed : theme.$darkpurple};
  }
`;

export const Button = ({children, onClick, redColor}) => {
    return (
        <StyledButton onClick={onClick} redColor={redColor}>
            {children}
        </StyledButton>
    );
}
