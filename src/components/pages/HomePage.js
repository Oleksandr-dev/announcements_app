import React from 'react'
import {TemplateClassicPage} from '../templates/TemplateClassicPage';
import {RecentUpload} from '../organism/RecentUpload';
import styled from 'styled-components';

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
            </ContentWrapper>
        </div>
    )
}
