import React, {useState, useContext} from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {GlobalContext} from "../../context/GlobalState";

/*const Searchb = styled.div`
  display: block;
  text-align: left;
  width: 100%;
  color: rgb(66, 66, 66);
  font-size: 2.33333rem;
  font-weight: bold;
  font-family: 'Avenir Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

`*/

export const Search = () => {
    const [search, setSearch] = useState('')

    const {searchAnnounces} = useContext(GlobalContext)


    const onSearchChange = ({target}) => {
        if(target){
            setSearch(target.value)
            console.log(target.value)

            searchAnnounces(target.value)

        }


    }

    const clearSearch = () => {
        setSearch('')
    }

    return (
        <div>
            <div>
            <input type="search" value={search} onChange={onSearchChange} />
            </div>
            <button onClick={clearSearch}>Clear</button>
        </div>
    )
}