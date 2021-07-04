import React from "react"
import {Route, } from "react-router-dom"
import {TemplateClassicPage} from "../templates/TemplateClassicPage";
import {RecentUpload} from "../organism/RecentUpload";
import {AddForm} from "../organism/AddForm";
import styled from "styled-components";

const ContentWrapper = styled.div`
  grid-area: c;
  background-color: cornflowerblue;
`

export const MainPage = () => {
    return(
        <div>
            <TemplateClassicPage/>
            <ContentWrapper>
            <RecentUpload/>
            {/*<AddForm/>*/}
            MainPage
            </ContentWrapper>
        </div>
    )
}
