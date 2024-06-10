import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./Auth-reducer";
import {thunk as thunkMiddleware} from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./App-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)));


// let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ =store

export default store;
