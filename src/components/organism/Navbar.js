import React from "react"
import styled from "styled-components"
import {NavLink} from "react-router-dom";


/*const Menu = styled.p`
    text-align: justify;
    letter-spacing: 1px;
    height: 8em;
    padding: 2em 10%;
    background: #2c3e50;
    color: #fff;
    :after {
    content: '';
    display: inline-block;
    width: 100%;
    }
`
const Items = styled.nav`
  display: inline-block;

`*/

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