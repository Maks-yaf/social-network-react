import {profileAPI, usersAPI} from "../API/Api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profilePage/ADD_POST';
const SET_USER_PROFILE = 'profilePage/SET_USER_PROFILE';
const SET_USER_STATUS='profilePage/SET_USER_STATUS';
const SET_USER_PHOTO='profilePage/SET_USER_PHOTO';
const DELETE_POST='DELETE_POST';

let initialState = {
    posts: [
        {id: 1, message: "Hi, How are you", like: 15},
        {id: 2, message: "Hi, it's my first post", like: 10},
        {id: 3, message: "go go go", like: 123},
        {id: 4, message: "All be good", like: 1123},
    ],
    profile: null,
    photos: null,
    status: "Условная пустота",

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.postTextArea,
                like: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId),
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        case SET_USER_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.file }
            };
        }
        default:
            return state;
    }
}

///ActionCreator
export const addPostActionCreator = (postTextArea) => ({type: ADD_POST, postTextArea})
const  setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
const setUserPhoto = (file) => ({type: SET_USER_PHOTO, file})
export const deletePost = (postId) => ({type: DELETE_POST, postId})


///ThunkCreator
export const profileInfo = (userID) => async (dispatch) => {
        let data = await usersAPI.getProfileInfo(userID)
                dispatch(setUserProfile(data))
    }
export const getStatus = (userId) => async (dispatch) => {
       let data = await profileAPI.getStatus(userId)
                dispatch(setUserStatus(data))
    }
export const updateStatus = (status) => async (dispatch) => {
       try {
           let data = await profileAPI.updateStatus(status)
           if (data.resultCode === 0) {
               dispatch(setUserStatus(status))
           }
       } catch (error) {
           alert(error.message)
       }
    }
export const updatePhoto = (file) => async (dispatch) => {
    let data = await profileAPI.updatePhoto(file)
    if (data.resultCode === 0) {
        dispatch(setUserPhoto(data.photos))
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userID = getState().auth.id
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
        dispatch(profileInfo(userID))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}

export default profileReducer;
