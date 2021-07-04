import React from "react"
import {Header} from "../organism/Header";
import {Search} from "../organism/Search";
import {Navbar} from "../organism/Navbar";


export const TemplateClassicPage = () => {
    return(
        <div>
            <Header/>
            <Navbar/>
            <Search/>
            <div>
                template
            </div>


        </div>
    )
}