import React, {useContext, useState} from 'react';
import {GlobalContext} from '../../context/GlobalState';
import {useHistory} from 'react-router-dom'
import styled from "styled-components";
import {ReactComponent as ArrowDown} from '../../assets/arrow-down.svg';
import {Button} from "./Button";

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
const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  & > :first-child {
    margin-right: 15px;
  }
`;

export const Announce = ({announce}) => {
    console.log('anouncement')
    const [isExpanded, setIsExpanded] = useState(false);
    const history = useHistory();
    const {deleteAnnounce} = useContext(GlobalContext);
    const editAnnounce = () => {
        console.log('edit')
        history.push(`/editAnnouncement/${announce.id}`)
    }

    const toggleIsExpanded = () => setIsExpanded(prev => !prev);

    const dateStr = (timestmp) => {
        let time = new Date(+timestmp)
        console.log(time.getMonth())
        let Year, Month, Day, Hour, Minutes;
        Year = time.getFullYear();
        switch (time.getMonth()) {
            case 0 :
                Month = 'Jan'
                break
            case 1 :
                Month = 'Feb'
                break
            case 2 :
                Month = 'Mar'
                break
            case 3 :
                Month = 'Apr'
                break
            case 4 :
                Month = 'May'
                break
            case 5 :
                Month = 'Jun'
                break
            case 6 :
                Month = 'Jul'
                break
            case 7 :
                Month = 'Aug'
                break
            case 8 :
                Month = 'Sept'
                break
            case 9 :
                Month = 'Oct'
                break
            case 10 :
                Month = 'Nov'
                break
            case 11 :
                Month = 'Dec'
        }
        Day = time.getDate()
        if(Day < 10 ){
            Day = '0' + Day
        }
        Hour = time.getHours()
        if(Hour < 10 ){
            Hour = '0' + Hour
        }
        Minutes = time.getMinutes()
        if(Minutes < 10 ){
            Minutes = '0' + Minutes
        }
        return `${Hour}:${Minutes}  ${Day} ${Month} ${Year}`
    }


    return (
        <AnnounceListItem isActive={isExpanded}>
            <AnnounceHeader onClick={toggleIsExpanded}>
                <AnnounceTitle>{announce.title}</AnnounceTitle>
                <span>{dateStr(announce.date)}</span>
                <ArrowDownIcon isActive={isExpanded}/>
            </AnnounceHeader>
            {isExpanded && (
                <AdditionalBox>
                    <span>Text: {announce.text}</span>

                    <ButtonBox>
                        <Button onClick={editAnnounce} >Edit</Button>
                        <Button onClick={() => deleteAnnounce(announce.id)} redColor >Delete</Button>
                    </ButtonBox>
                </AdditionalBox>
            )}
        </AnnounceListItem>
    )
}
