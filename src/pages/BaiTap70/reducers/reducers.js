import { SET_QUERY, SET_ID } from "../actions/actions";

const searchInitialState = {
    query: '',
};

const clapsInitialState = {
    id: '',
};

export const searchReducer = (state = searchInitialState, action) => {
    switch (action.type) {
        case SET_QUERY:
            return { ...state, query: action.payload };
        default:
            return state;
    }
};

export const ClapsReducer = (state = clapsInitialState, action) => {
    switch (action.type) {
        case SET_ID:
            return { ...state, id: action.payload };
        default:
            return state;
    } 
};