import React from 'react'
import {Link} from 'react-router-dom';


export const WatchAllBtn = () => {
    return (
        <Link className='link' to={'/allAnnounce'}>
            <button className='btn'>Watch all announce</button>
        </Link>
    )
}