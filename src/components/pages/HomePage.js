import React from 'react'
import {AnnounceList} from "../molecules/AnnounceList";
import {Navbar} from "../organism/Navbar";
import {ResOfSearch} from "./ResaultOfSearch";
import {Route} from "react-router-dom";

export const MainPage = () => {
    return(
        <div>
            <Navbar/>
            {/*<Route path='/resOfSearch' component={() => <ResOfSearch/>}/>*/}
            <AnnounceList/>
        </div>
    )
}
