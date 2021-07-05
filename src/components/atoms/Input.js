import React from 'react';
import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  min-width: 150px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 6px;
  height: 36px;
  background-color: ${({theme}) => theme.$gray};
  border-radius: 6px;
  font-size: 15px;
  color: ${({theme}) => theme.$gainsboro};
  font-family: ${({theme}) => theme.$secondaryFont};
  border: none;
  
  
  &:hover {
        border-color: ${({ theme }) => theme.$textGray};
        cursor: auto;
    }

    &:focus-within {
        outline: none;
        border-color: ${({ theme }) => theme.$textGray};
    }
    
    &::placeholder {
            color: ${({ theme }) => theme.$textGray};
            font-weight: normal;
            opacity: 1;
        }
`;

export const Input = (props) => {
    return (
        <StyledInput {...props} />
    );
}
