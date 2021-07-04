import React from "react"
import styled from "styled-components";
import {ShortList} from "../molecules/ShortList";
import {WatchAllBtn} from "../molecules/WatchAllBtn";


export const RecentUpload = () => {
    return (
        <div>
            <ShortList/>
            <WatchAllBtn/>
        </div>
    )
}