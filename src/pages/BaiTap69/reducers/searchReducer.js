import { SET_QUERY, SET_RESULTS } from "../actions/searchAction";

const initialState = {
    query: '',
    results: []
};

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUERY:
            return { ...state, query: action.payload};
        case SET_RESULTS:
            return { ...state, results: action.payload};
        default:
            return state;
    }
};