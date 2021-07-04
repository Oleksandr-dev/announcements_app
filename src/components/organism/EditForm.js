import React, {useContext, useState} from "react"
import {GlobalContext} from "../../context/GlobalState";
import styled from "styled-components";
import {ShortList} from "../molecules/ShortList";
import {WatchAllBtn} from "../molecules/WatchAllBtn";
import {useParams, useHistory, Link} from "react-router-dom"
import {MainPage} from "../pages/HomePage";


export const EditForm = () => {
    const history = useHistory();
    const editOldAnnounce = () => {
        history.push(`/`)
    }
    const {announces} = useContext(GlobalContext);
    const params = useParams()
    console.log(params)
    let oldAnnounce = {}
    for(let key of announces){
        console.log(key.id)
        debugger
        if(key.id == params.id){
            debugger
            oldAnnounce.id = key.id
            oldAnnounce.title = key.title
            oldAnnounce.text = key.text

            /*for(let lkey in key){
                oldAnnounce.lkey = key.lkey
            }*/
        }
    }
    console.log(oldAnnounce)
    debugger

    const [title, setTitle] = useState(oldAnnounce.title);
    const [text, setText] = useState(oldAnnounce.text);

    /*const [date, setDate] = useState(0);*/


    const {editAnnounce} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        let date = Date.now()

        const eAnnouncement = {
            id: params.id,
            title: title,
            text: text,
            date: date,

        }


        editAnnounce(eAnnouncement);
        setTitle('');
        setText('');
        /*setDate('');*/
        history.push(`/`)

    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="title"
                    >Theme</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                           placeholder="Enter title..."/>
                </div>

                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                           placeholder="Enter text..."/>
                </div>
                <button className="btn">Add transaction</button>
                {/* <div>
                enter theme
                <div>
                <textarea ref={newMessageElement}
                          value={props.dialogsData.newMessageText}
                          onChange={onMessageChange}/>
                </div>
            </div>
            <div>
                enter text
                <div>

                <textarea ref={newMessageElement}
                          value={props.dialogsData.newMessageText}
                          onChange={onMessageChange}/>
                </div>
                <div>
                    <button onClick={sendMessage}>Send message</button>

                </div>
            </div>*/}
            </form>
            <Link to={"/"}>
                <button>back</button>
            </Link>
        </div>

    )
}


/*
const onMessageChange = () => {
    let text = newMessageElement.current.value
    const action = {
        type: 'CHANGE-NEW-MESSAGE-TEXT',
        newText: text,
    }
    props.dispatch(action)
    console.log(text)
}*/
