import React from 'react'
import styled from 'styled-components'

const Menu = styled.div`
  grid-area: h;
  background-color: green;
`


export const Header = () => {
    return(
        <Menu>
            <div>
                <div>
                    <img src={'https://www.cleanpng.com/png-logo-portable-network-graphics-brand-image-owl-ann-6703441/preview.html'} width='60' height='60px'/>
                    logo
                </div>
                <div>
                    Search
                </div>
                <div>
                    other
                </div>

            </div>

        </Menu>

    )
}