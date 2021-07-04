import React, {useContext, useState} from 'react'
import {GlobalContext} from '../../context/GlobalState';
import {Link, useHistory, useParams} from 'react-router-dom'


export const EditForm = () => {
    const history = useHistory();

    const {announces} = useContext(GlobalContext);
    const params = useParams()
    let oldAnnounce = {}
    for(let key of announces){
        console.log(key.id)

        if(key.id === params.id){

            oldAnnounce.id = key.id
            oldAnnounce.title = key.title
            oldAnnounce.text = key.text
        }
    }
    console.log(oldAnnounce)
    debugger

    const [title, setTitle] = useState(oldAnnounce.title);
    const [text, setText] = useState(oldAnnounce.text);



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
        history.push(`/`)

    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor='title'
                    >Title</label>
                    <input type='title' value={title} onChange={(e) => setTitle(e.target.value)}
                           placeholder=' '/>
                </div>

                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input type='text' value={text} onChange={(e) => setText(e.target.value)}
                           placeholder=' '/>
                </div>
                <button className='btn'>Edit announce</button>

            </form>
            <Link to={'/'}>
                <button>back</button>
            </Link>
        </div>

    )
}