import React from "react"
import styled from "styled-components";

const Searchb = styled.div`
  display: block;
  text-align: left;
  width: 100%;
  color: rgb(66, 66, 66);
  font-size: 2.33333rem;
  font-weight: bold;
  font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

`

export const Search = () => {
    return (
        <Searchb>
            <div>
                Search
            </div>
        </Searchb>
    )
}