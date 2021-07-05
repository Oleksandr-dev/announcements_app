import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


const initialState = {
    announces: [
        {id:1, title: 'test task', text: 'this is test task', date: 1625235894394},
        {id:2, title: 'test', text: 'task', date: 1625236895394},
        {id:3, title: 'task', text: 'test', date: 1625237896394},
    ],
    searchString: '',
    searchResult: []
}


export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteAnnounce(id) {
        dispatch({
            type: 'DELETE_ANNOUNCE',
            payload: id
        });
    }
    function editAnnounce(announce) {
        dispatch({
            type: 'EDIT_ANNOUNCE',
            payload: announce
        });
    }

    function addAnnounce(announce) {
        dispatch({
            type: 'ADD_ANNOUNCE',
            payload: announce
        });

    }
    function searchAnnounces(search){
        dispatch({
            type: 'SEARCH',
            payload: search
        })
    }
    function cleanSearchResult(){
        dispatch({
            type: 'CLEAR_SEARCH'
        })
    }



    return (<GlobalContext.Provider value={{
        announces: state.announces,
        searchResult: state.searchResult,
        searchString: state.searchString,
        deleteAnnounce,
        searchAnnounces,
        cleanSearchResult,
        addAnnounce,
        editAnnounce
    }}>
        {children}
    </GlobalContext.Provider>);
}