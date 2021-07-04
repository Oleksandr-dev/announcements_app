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

const Menu = styled.div`
  grid-area: h;
  background-color: green;
`


export const Header = () => {
    return(
        <Menu>
            <div>
                <div>
                    <img src={"https://www.cleanpng.com/png-logo-portable-network-graphics-brand-image-owl-ann-6703441/preview.html"} width="60" height="60px"/>
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