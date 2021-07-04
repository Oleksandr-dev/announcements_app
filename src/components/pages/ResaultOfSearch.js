import React from 'react'
import {SearchedAnnounces} from "../organism/SearchedAnnounces";
import {Search} from "../molecules/Search";


export const ResOfSearch = () => {
    return(
        <div>
            <Search/>
            <SearchedAnnounces/>
        </div>
    )
}