import React, {useContext} from 'react'
import {GlobalContext} from '../../context/GlobalState';
import {Announce} from '../atoms/Announce';


export const LongList = () => {
    const {announces} = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <div className='form-control'>
                <ul className='list'>
                    {announces.map(announce => (
                        <Announce key={announce.id} announce={announce}/>))}
                </ul>
            </div>

        </>
    )
}