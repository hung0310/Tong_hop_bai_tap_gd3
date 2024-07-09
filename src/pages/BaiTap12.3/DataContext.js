import React, { createContext, useContext, useReducer } from 'react';

const DataContext = createContext();

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

const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(countReducer, { count: 0});
    return (
        <DataContext.Provider value ={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    );
};

const useCount = () => useContext(DataContext);

export { DataProvider, useCount };