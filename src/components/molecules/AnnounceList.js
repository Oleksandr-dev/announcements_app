import React, {useContext} from 'react'
import {GlobalContext} from '../../context/GlobalState';
import {Announce} from '../atoms/Announce';
import {PageTitle} from "../atoms/PageTitle";

export const AnnounceList = () => {
    const {announces} = useContext(GlobalContext);

    const announcesList = announces.map(announce => (
        <Announce key={announce.id} announce={announce}/>));

    return (
        <>
            <PageTitle>History</PageTitle>
            <ul>{announcesList}</ul>
        </>
    )
}
