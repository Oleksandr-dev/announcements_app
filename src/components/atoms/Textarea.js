import React from 'react';
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  height: max-content;
  min-width: 150px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 6px;
  background-color: ${({theme}) => theme.$gray};
  border-radius: 6px;
  font-size: 15px;
  color: ${({theme}) => theme.$gainsboro};
  font-family: ${({theme}) => theme.$secondaryFont};
  border: none;
  resize: none;
  
  
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

export const Textarea = (props) => {
    return (
        <StyledTextarea {...props} />
    );
}
