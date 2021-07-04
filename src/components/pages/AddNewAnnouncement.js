import React from "react";
import {TemplateClassicPage} from "../templates/TemplateClassicPage";
import {AddForm} from "../organism/AddForm";
import styled from "styled-components";

const addNewAnSt = styled.div`
  align-items: center;
  background-color: #000;
  display: flex;
  justify-content: center;
  height: 100vh;

`

export const AddNewAnnouncement = () => {
    return (
        <div>
            <TemplateClassicPage/>
            AddNewAnnouncementPage
                <AddForm/>
        </div>
    )
}