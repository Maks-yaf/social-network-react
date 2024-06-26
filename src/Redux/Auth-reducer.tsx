import {authAPI, securityAPI} from "../API/Api";
import {stopSubmit} from "redux-form";

const TOGGLE_IS_FETCHING = "auth/TOGGLE_IS_FETCHING";
const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

export type initialStateType = {
    id: number | null,
    email: string| null,
    login: string | null,
    isFetching: boolean,
    isAuth: boolean,
    captchaUrl: string | null
}

let initialState : initialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action: any): initialStateType => {
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
type SetUserDataActionPayloadType = {
    id: number | null,
    email: string| null,
    login: string | null,
    isAuth: boolean
}
type SetUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetUserDataActionPayloadType
}
export const setUserData = (id: number | null , email: string | null , login: string | null , isAuth: boolean ):SetUserDataActionType => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})

type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    captchaUrl: string | null
}
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl})

///ThunkCreator
export const authMe = () => async (dispatch: any) => {
    let response = await authAPI.getAuthMe()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setUserData(id, email, login, true));
    }
}
export const login = (email: string , password: string , rememberMe: boolean, captcha: any) => async (dispatch: any) => {
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
export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}
export const getCaptchaUrl= () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer;