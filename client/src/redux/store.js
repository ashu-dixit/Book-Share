 
import { createStore, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
import {compose} from 'redux'
import thunk from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// () => dispatch(changeCountry("Europe")),
const store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))

export default store