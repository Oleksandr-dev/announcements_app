import React, {useContext, useState} from 'react';
import {GlobalContext} from '../../context/GlobalState';
import {useHistory} from 'react-router-dom'
import styled from "styled-components";
import {ReactComponent as ArrowDown} from '../../assets/arrow-down.svg';
import {Button} from "../atoms/Button";
import {ButtonBox} from "../atoms/ButtonBox";
import moment from "moment";

const AnnounceListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${({theme}) => theme.$darkslategray};
  transition: 20ms all 20ms;
  border-radius: 6px;
  fill: ${({theme}) => theme.$textGray};

  &:hover {
    color: ${({theme}) => theme.$gainsboro};
    fill: ${({theme}) => theme.$gainsboro};
    background-color: ${({theme}) => theme.$darkgray};
  }

  ${({ isActive, theme }) => isActive && `
    color: ${theme.$gainsboro};
    fill: ${theme.$gainsboro};
    background-color: ${theme.$darkgray};
  `}
`;
const AnnounceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
const AnnounceTitle = styled.span`
  font-size: 18px;
  font-family: ${({theme}) => theme.$secondaryFont};
  &:first-letter {text-transform: uppercase}
`;
const ArrowDownIcon = styled(ArrowDown)`
  height: 20px;
  width: 20px;
  fill: context-fill;
  margin-left: 15px;

  ${({isActive}) => isActive && `
    transform: rotate(180deg);
    transition: 0.50s;
  `}
`;
const AdditionalBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  & > :not(:last-child) {
    margin-bottom: 15px;
  }

  & >:last-child {
    margin: 0 auto;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Announce = ({announce}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const history = useHistory();
    const {deleteAnnounce} = useContext(GlobalContext);
    const editAnnounce = (id) => {
        history.push(`/editAnnouncement/${id}`)
    }

    const toggleIsExpanded = () => setIsExpanded(prev => !prev);

    const dateStr = (timestmp) => {
        return (moment(timestmp).format('HH:mm DD MMMM YYYY'))
    }


    return (
        <AnnounceListItem isActive={isExpanded}>
            <AnnounceHeader onClick={toggleIsExpanded}>
                <AnnounceTitle>{announce.title}</AnnounceTitle>
                <Box>
                    <span>{dateStr(announce.date)}</span>
                    <ArrowDownIcon isActive={isExpanded}/>
                </Box>
            </AnnounceHeader>
            {isExpanded && (
                <AdditionalBox>
                    <span>Text: {announce.text}</span>

                    <ButtonBox>
                        <Button onClick={() => editAnnounce(announce.id)} >Edit</Button>
                        <Button onClick={() => deleteAnnounce(announce.id)} redColor >Delete</Button>
                    </ButtonBox>
                </AdditionalBox>
            )}
        </AnnounceListItem>
    )
}
