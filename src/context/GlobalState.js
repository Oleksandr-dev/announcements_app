import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    announces: [
        {id:1, title: "test task", text: "this is test task", date: 1625235894394}
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
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

    return (<GlobalContext.Provider value={{
        announces: state.announces,
        deleteAnnounce,
        addAnnounce,
        editAnnounce
    }}>
        {children}
    </GlobalContext.Provider>);
}