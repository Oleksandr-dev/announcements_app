import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";
import {useHistory} from "react-router-dom"
/*import {GlobalContext} from '../context/GlobalState';*/


export const Announce = ({announce}) => {

    const history = useHistory();
    const {deleteAnnounce} = useContext(GlobalContext);

    const editAnnounce = (id) => {
        history.push(`/editAnnouncement/${id}`)
    }

    const dateStr = (timestmp) => {
        let time = new Date(+timestmp)
        console.log(time.getMonth())
        let Year, Month, Day, Hour, Minutes;
        Year = time.getFullYear();
        /*Month = (() => {*/
        switch (time.getMonth()) {
            case 0 :
                Month = "Jan"
                break
            case 1 :
                Month = "Feb"
                break
            case 2 :
                Month = "Mar"
                break
            case 3 :
                Month = "Apr"
                break
            case 4 :
                Month = "May"
                break
            case 5 :
                Month = "Jun"
                break
            case 6 :
                Month = "Jul"
                break
            case 7 :
                Month = "Aug"
                break
            case 8 :
                Month = "Sept"
                break
            case 9 :
                Month = "Oct"
                break
            case 10 :
                Month = "Nov"
                break
            case 11 :
                Month = "Dec"
        }

        Day = time.getDate()
        if(Day < 10 ){
            Day = "0" + Day
        }
        Hour = time.getHours()
        if(Hour < 10 ){
            Hour = "0" + Hour
        }
        Minutes = time.getMinutes()
        if(Minutes < 10 ){
            Minutes = "0" + Minutes
        }
        return `${Hour}:${Minutes}  ${Day} ${Month} ${Year}`
    }
    let b = "b"/*`${announce.date}`*/
    return (
        <li /*className={transaction.amount < 0 ? 'minus' : 'plus'}*/>
            <div>
                <div className="mainInfoContainer">
                    <span>Announce: {announce.title}</span>
                </div>
                <div className="mainInfoContainer">
                    <span>Text: {announce.text}</span>
                </div>
                <div className="mainInfoContainer">
                    <span>Create date: {dateStr(announce.date)}</span>
                </div>
            </div>
            <button onClick={() => editAnnounce(announce.id)} className="delete-btn">Edit</button>
            <button onClick={() => deleteAnnounce(announce.id)} className="delete-btn">Delete</button>
        </li>
    )
}
