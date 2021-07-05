import React from 'react';
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 50px;
    
    & > :not(:last-child) {
      margin-bottom: 15px;
    }
    
    @media (max-width:445px) {
    padding: 0 10px;
    }
  `

export const Wrapper = ({children}) => {
    return <StyledWrapper>{children}</StyledWrapper>
}
