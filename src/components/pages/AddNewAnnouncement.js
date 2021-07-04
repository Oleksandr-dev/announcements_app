import React from 'react';
import {AddForm} from '../organism/AddForm';
import {PageTitle} from "../atoms/PageTitle";

export const AddNewAnnouncement = () => {
    return (
        <>
            <PageTitle>Add new announcement</PageTitle>
            <AddForm/>
        </>
    )
}