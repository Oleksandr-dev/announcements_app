import React, {useContext, useState} from 'react'
import {GlobalContext} from '../../context/GlobalState';
import {uuid} from 'uuidv4';
import styled from 'styled-components';
import {Button} from "../atoms/Button";
import {useHistory} from "react-router-dom";
import {Input} from "../atoms/Input";
import {Textarea} from "../atoms/Textarea";
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

export const AddForm = () => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const {addAnnounce} = useContext(GlobalContext);

    const onCancelClick = () => {
        history.push("/")
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const date = Date.now()

        const newAnnouncement = {
            id: uuid(),
            title,
            text,
            date,
        }

        addAnnounce(newAnnouncement);
        setTitle('');
        setText('');

        history.push("/");
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
                <Button type="submit" onClick={onSubmit}>Add</Button>
                <Button type="reset" redColor onClick={onCancelClick}>Cancel</Button>
            </ButtonBox>
        </StyledForm>

    )
}
