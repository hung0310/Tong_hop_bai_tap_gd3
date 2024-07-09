import React, { createContext, useContext, useReducer } from 'react';

const CountContext = createContext();

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const countReducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 }
        case DECREMENT:
            return { count: state.count - 1 }
        default:
            return state;
    }
};

const CountProvider = ({ children }) => {
    const [state, dispatch] = useReducer(countReducer, { count: 0});
    return (
        <CountContext.Provider value ={{state, dispatch}}>
            {children}
        </CountContext.Provider>
    );
};

const useCount = () => useContext(CountContext);

export { CountProvider, useCount };