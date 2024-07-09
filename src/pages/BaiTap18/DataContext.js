import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { setCookie, deleteCookie, getCookie } from './ConfigCookie';

const DataContext = createContext();

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const initialState = { checkLogin: false };

const loginReducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            setCookie('auth', 'true', { expires: 7 });
            return { ...state, checkLogin: true };
        case LOGOUT:
            deleteCookie('auth');
            return { ...state, checkLogin: false };
        default:
            return state;
    }
};

const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(loginReducer, initialState);

    useEffect(() => {
        const auth = getCookie('auth');
        if (auth === 'true') {
            dispatch({ type: LOGIN });
        }
    }, []);

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    );
};

const useLogin = () => useContext(DataContext);

export { DataProvider, useLogin };