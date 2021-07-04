import React from 'react'
import styled from 'styled-components'
import {SearchedAnnounces} from "./SearchedAnnounces";
import {Search} from "../molecules/Search";


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
                    <Search/>
                    <SearchedAnnounces/>
                </div>
                <div>
                    other
                </div>

            </div>

        </Navb>

    )
}