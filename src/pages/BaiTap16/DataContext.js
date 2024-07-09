import React, { createContext, useContext, useReducer } from 'react';

const DataContext = createContext();

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const loginReducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, checkLogin: true };
        case LOGOUT:
            return { ...state, checkLogin: false }; 
        default:
            return state;
    }
};

const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(loginReducer, { checkLogin: false });
    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    );
};

const useLogin = () => useContext(DataContext);

export { DataProvider, useLogin };