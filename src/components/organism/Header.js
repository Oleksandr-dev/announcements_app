import React from 'react'
import styled from 'styled-components'
import {Logo} from '../atoms/Logo';

const Menu = styled.div`
  display: flex;
  padding: 10px 50px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.$darkpurple};
`


export const Header = () => {
    return(
        <Menu>
            <Logo />
        </Menu>
    )
}
