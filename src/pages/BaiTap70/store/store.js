import { createStore, combineReducers } from "redux";

import { searchReducer, ClapsReducer } from '../reducers/reducers';

const rootReducer = combineReducers({
    search: searchReducer,
    id_blog: ClapsReducer, 
})

const store = createStore(rootReducer);

export default store;