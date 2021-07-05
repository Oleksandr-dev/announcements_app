import React, {useContext} from 'react'
import styled from 'styled-components'
import {GlobalContext} from '../../context/GlobalState';
import {Announce} from './Announce';
import {PageTitle} from "../atoms/PageTitle";
import {SimilarAnnouncements} from "../../helpers/searchHelper";

const StyledList = styled.ul`
  & > :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const AnnounceList = ({searchedAnnouncements = []}) => {
    const {announces, searchString} = useContext(GlobalContext);
    const isSearching = searchString.length > 0;
    const list = isSearching ? searchedAnnouncements : announces;

    const announcesList = list.map(announce => (
        <Announce key={announce.id} announce={announce}/>));

    const result = announcesList.length ? announcesList : 'No results'
    const similarList = SimilarAnnouncements(searchedAnnouncements, announces).map(announce => (
        <Announce key={announce.id} announce={announce}/>));

    return (
        <>
            <PageTitle>{isSearching ? 'Searched announcements' : 'History'}</PageTitle>
            <StyledList>{result}</StyledList>
            <PageTitle>{isSearching ? (announcesList.length ? 'Similar announcements' : '') : ''}</PageTitle>
            <StyledList>{similarList}</StyledList>
        </>
    )
}
