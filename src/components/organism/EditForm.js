import React, {useContext, useState} from 'react'
import {GlobalContext} from '../../context/GlobalState';
import {useHistory, useParams} from 'react-router-dom'
import {Input} from "../atoms/Input";
import {Textarea} from "../atoms/Textarea";
import {Button} from "../atoms/Button";
import styled from "styled-components";
import {ButtonBox} from "../atoms/ButtonBox";

const StyledForm = styled.form`
  height: 100%;
  padding: 15px;
  background-color: ${({theme}) => theme.$darkslategray};
  border-radius: 6px;
  
  & > :not(:last-child) {
    margin-bottom: 20px;
  }
`

export const EditForm = () => {
    const {announces} = useContext(GlobalContext);
    const {editAnnounce} = useContext(GlobalContext);
    const params = useParams();
    const history = useHistory();

    let oldAnnounce = {}
    announces.forEach(announce => {
        if (announce.id === params.id) {
            oldAnnounce = {...announce};
        }
    })
    const [title, setTitle] = useState(oldAnnounce.title);
    const [text, setText] = useState(oldAnnounce.text);

    const onCancelClick = () => {
        history.push("/")
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const date = Date.now()

        const eAnnouncement = {
            id: params.id,
            title,
            text,
            date,
        }

        editAnnounce(eAnnouncement);
        setTitle('');
        setText('');
        history.push('/')
    }

    return (
        <StyledForm onSubmit={onSubmit}>
            <Input
                type="title"
                id="title"
                name="title"
                maxlength="30"
                required
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
                type="text"
                id="text"
                name="text"
                maxlength="500"
                rows={8}
                required
                value={text}
                placeholder="Description"
                onChange={(e) => setText(e.target.value)}
            />
            <ButtonBox>
                <Button type="submit" onClick={onSubmit}>Save</Button>
                <Button type="reset" redColor onClick={onCancelClick}>Cancel</Button>
            </ButtonBox>
        </StyledForm>

    )
}
