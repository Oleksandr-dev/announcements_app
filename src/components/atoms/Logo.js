import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledLink = styled(Link)`
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  
  &:hover {
      background-color: ${({theme}) => theme.$darkslategray};
  }
`;

const StyledLogo = styled.img`
  height: 50px;
`;

export const Logo = () => {
    return (
        <StyledLink to="/">
            <StyledLogo src="header-logo.png"/>
        </StyledLink>
    );
}
