import React from 'react';
import styled from "styled-components";

const StyledPageTitle = styled.h3`
  font-size: 23px;
  color: ${({theme}) => theme.$gainsboro};
  margin-bottom: 15px;
`

export const PageTitle = ({children}) => {
    return (
        <StyledPageTitle>
            {children}
        </StyledPageTitle>
    );
}
