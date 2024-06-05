import {profileAPI, usersAPI} from "../API/Api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_FULLNAME='SET_USER_FULLNAME';
const SET_USER_DESCRIPTION='SET_USER_DESCRIPTION';
const SET_USER_STATUS='SET_USER_STATUS';
const SET_USER_PHOTO='SET_USER_PHOTO';
const DELETE_POST='DELETE_POST';

let initialState = {
    posts: [
        {id: 1, message: "Hi, How are you", like: 15},
        {id: 2, message: "Hi, it's my first post", like: 10},
        {id: 3, message: "412412", like: 123},
        {id: 4, message: "ohohohooh", like: 1123},
    ],
    profile: null,
    fullName: "FullName",
    description: "Description",
    status: "Условная пустота",
    photo: "Заглушка фото",

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
        case SET_USER_FULLNAME: {
            return {
                ...state,
                fullName: action.fullName,
            };
        }
        case SET_USER_DESCRIPTION: {
            return {
                ...state,
                description: action.description,
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
                photo: action.photo,
            };
        }
        default:
            return state;
    }
}

///ActionCreator
export const addPostActionCreator = (postTextArea) => ({type: ADD_POST, postTextArea})
const  setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const  setUserFullName = (fullName) => ({type: SET_USER_FULLNAME, fullName})
const setUserDescription = (description) => ({type: SET_USER_DESCRIPTION, description})
const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
const setUserPhoto = (photo) => ({type: SET_USER_PHOTO, photo})
export const deletePost = (postId) => ({type: DELETE_POST, postId})


///ThunkCreator
export const profileInfo = (userID) => {
    return (dispatch) => {
        usersAPI.getProfileInfo(userID)
            .then(data => {
                dispatch(setUserProfile(data))
                dispatch(setUserFullName(data.fullName))
                dispatch(setUserDescription(data.aboutMe))
            });
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setUserStatus(data))
            });
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            });
    }
}
export const updatePhoto = (photo) => {
    return (dispatch) => {
        profileAPI.updatePhoto(photo)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserPhoto(photo))
                }
            });
    }
}



export default profileReducer;

/// useEffect(() => {
//     axios
//         .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
//         .then((response) => {
//             props.setUserProfile(response.data)
//             props.setUserFullName(response.data.fullName)
//             props.setUserDescription(response.data.aboutMe)
//         });
// }, [userId]);