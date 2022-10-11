import { createStore } from "redux";
import { rootReducer } from "./rootReducer"

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //this is required to make redux dev tool to work
    )