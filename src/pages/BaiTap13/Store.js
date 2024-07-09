import { createStore } from 'redux';
import { countReducer } from './Reducer';

const store = createStore(countReducer);

export default store;