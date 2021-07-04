import React from 'react'
import styled from 'styled-components'


const Navb = styled.div`
  grid-area: n;
  background-color: burlywood;
  padding: 20px;
`


export const Navbar = () => {
    return(
        <Navb>
            <div>
                <div>
                    Navbar
                </div>
                <div>
                    Search
                </div>
                <div>
                    other
                </div>

            </div>

        </Navb>

    )
}