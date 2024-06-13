import {authAPI, securityAPI} from "../API/Api";
import {stopSubmit} from "redux-form";

const TOGGLE_IS_FETCHING = "auth/TOGGLE_IS_FETCHING";
const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
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
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            }
        }
        default:
            return state;
    }
}

///ActionCreator
export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl})

///ThunkCreator
export const authMe = () => async (dispatch) => {
    let response = await authAPI.getAuthMe()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setUserData(id, email, login, true));
    }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(authMe())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error";
            dispatch(stopSubmit("login", {_error: message}))
        }

    }
}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}
export const getCaptchaUrl= () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer;