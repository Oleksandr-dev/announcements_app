import React, {useContext, useState} from 'react'
import {GlobalContext} from '../../context/GlobalState';
import {uuid} from 'uuidv4';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const AddNewAnSt = styled.form`
  background-color: #15172b;
  border-radius: 20px;
  box-sizing: border-box;
  height: 500px;
  padding: 20px;
  width: 320px;
  /*background: url(http://www.timurtek.com/wp-content/uploads/2014/10/form-bg.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family:'HelveticaNeue','Arial', sans-serif;*/
  /*align-items: center;
  background-color: #000;
  display: flex;
  justify-content: center;
  height: 100vh;*/

`
const InpCtSt = styled.div`
  
    height: 50px;
    position: relative;
    width: 100%;
  `

const InpSt = styled.input`
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
`


export const AddForm = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    /*const [date, setDate] = useState(0);*/


    const {addAnnounce} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        let date = Date.now()
        //let id = uuid()

        const newAnnouncement = {
            id: uuid()/*Math.floor(Math.random() * 100000000)*/,
            title: title,
            text: text,
            date: date,

        }

        addAnnounce(newAnnouncement);
        setTitle('');
        setText('');
        /*setDate('');*/
    }

    return (
        <div>
            <AddNewAnSt onSubmit={onSubmit}>
            <InpCtSt className='form-control'>
                <Placeholder htmlFor='title'>Title</Placeholder>
                <InpSt type='title' value={title} onChange={(e) => setTitle(e.target.value)}
                       placeholder=' ' />
                <Cut className='cut'></Cut>
            </InpCtSt>

            <InpCtSt className='form-control'>
                <Placeholder htmlFor='text'>Text</Placeholder>
                <InpSt type='text' value={text} onChange={(e) => setText(e.target.value)}
                       placeholder=' ' />
            </InpCtSt>
                <button className='btn'>Add transaction</button>
            </AddNewAnSt>
            <Link to={'/'}>
                <button>back</button>
            </Link>
        </div>

    )
}

const Cut = styled.div`
  background-color: #15172b;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 76px;`


 const Placeholder  = styled.label`
    color: #65657b;
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
`