import React, {useContext, useEffect, useState} from 'react'
import {AnnounceList} from "../molecules/AnnounceList";
import {Search} from "../molecules/Search";
import {GlobalContext} from "../../context/GlobalState";

export const MainPage = () => {
    const {searchString, searchResult} = useContext(GlobalContext)
    const [searchedAnnouncements, setSearchedAnnouncements] = useState([]);
    useEffect(() => {
        if(searchString === ''){
            setSearchedAnnouncements([])
            return;
        }
        setSearchedAnnouncements(searchResult)
    }, [searchString])

    return(
        <>
            <Search/>
            <AnnounceList searchedAnnouncements={searchedAnnouncements}/>
        </>
    )
}
