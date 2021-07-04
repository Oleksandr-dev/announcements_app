import React, {useContext} from "react"
import {GlobalContext} from "../../context/GlobalState";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Announce} from "../atoms/Announce";



export const ShortList = () => {
    const {announces} = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <div className="form-control">
                <ul className="list">
                    {announces.slice(0, 5).map(announce => (
                        <Announce key={announce.id} announce={announce}/>))}
                </ul>
            </div>

        </>
    )
}