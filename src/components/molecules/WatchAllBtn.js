import React from "react"
import styled from "styled-components";
import {Link} from "react-router-dom";


export const WatchAllBtn = () => {
    return (
        <Link className="link" to={'/allAnnounce'}>
            <button className="btn">Watch all announce</button>
        </Link>
    )
}