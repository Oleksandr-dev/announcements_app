import React from 'react';
import styled from "styled-components";

export const StyledButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  
  & > :first-child {
      margin-right: 15px;
  }

  @media (max-width:445px) {
    flex-direction: column;
    margin: 0 0 0 0;
    
    & > * {
    width: 100%;
    }
  & > :first-child {
        margin-bottom: 15px;
    }
  }
`;

export const ButtonBox = ({children}) => {
    return (
        <StyledButtonBox>
            {children}
        </StyledButtonBox>
    );
}
