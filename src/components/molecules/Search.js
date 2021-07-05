import React, {useContext, useState} from 'react'
import {useHistory} from "react-router-dom";
import {GlobalContext} from "../../context/GlobalState";
import {StyledButtonBox} from "../atoms/ButtonBox";
import {Button, StyledButton} from "../atoms/Button";
import styled from "styled-components";
import {Input, StyledInput} from "../atoms/Input";


const SearchBar = styled.div`
  position: relative;
  //margin-bottom: 20px;
  justify-content: space-between;
`

const SearchB = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const AddBtn = styled(StyledButtonBox)`
  justify-content: flex-start;
  //padding-left: 20px;
`

const ButtonClear = styled(StyledButton)`
  margin-left: 15px;
  //padding-right: 20px;
`

const SearchStyle = styled(StyledInput)`
  width: 50%;
`

export const Search = () => {
    const [search, setSearch] = useState('')
    const {searchAnnounces, cleanSearchResult} = useContext(GlobalContext)
    const history = useHistory()

    const addAnnounce = () => {
        history.push(`/newAnnouncement`)
    }

    const onSearchChange = ({target}) => {
        const {value} = target
        setSearch(value)
        if (!value) {
            cleanSearchResult()
            return
        }
        searchAnnounces(value)
    }

    const clearSearch = () => {
        setSearch('')
        cleanSearchResult()
    }

    return (
        <SearchBar>
            <AddBtn>
                {/*<ButtonBox>*/}
                <Button onClick={() => addAnnounce()}>+ New message</Button>
                {/*</ButtonBox>*/}
                <SearchB>
                    {/*<SearchStyle>*/}
                    <Input type="search" value={search} onChange={onSearchChange}/>
                    {/*</SearchStyle>*/}
                    <ButtonClear onClick={clearSearch}>Clear</ButtonClear>
                </SearchB>
            </AddBtn>


        </SearchBar>
    )
}