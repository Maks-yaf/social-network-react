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
export const authMe = () => async (dispatch) => {
    let response = await authAPI.getAuthMe()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setUserData(id, email, login, true));
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(authMe())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error";
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}

export default authReducer;