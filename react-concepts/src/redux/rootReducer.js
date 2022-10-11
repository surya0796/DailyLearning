import { combineReducers } from "redux";
import counterReducer from './reducers/counter.reducer';

export const rootReducer = combineReducers({
    counterReducer
})