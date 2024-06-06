import {authAPI} from "../API/Api";
import {stopSubmit} from "redux-form";

const TOGGLE_IS_FETCHING = "auth/TOGGLE_IS_FETCHING";
const SET_USER_DATA = "auth/SET_USER_DATA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
}

///ActionCreator
export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})

///ThunkCreator
export const authMe = () => {
    return (dispatch) => {
       return authAPI.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setUserData(id, email, login, true));
                }});
            }
    }
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                   dispatch(authMe())
                } else {
                    let message = data.messages.length > 0 ? data.messages[0] : "Some Error";
                    dispatch(stopSubmit("login", {_error: message}))
                }
            });
    }
}
export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false));
                }});
    }
}

export default authReducer;