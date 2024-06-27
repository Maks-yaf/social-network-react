import {usersAPI} from "../API/Api";

const FOLLOW = "usersPage/FOLLOW";
const UNFOLLOW = "usersPage/UNFOLLOW";
const SET_USERS = "usersPage/SET_USERS";
const SET_CURRENT_PAGE = "usersPage/SET_CURRENT_PAGE";
const SET_TOTAL_ITEMS_COUNT = "usersPage/SET_TOTAL_ITEMS_COUNT";
const TOGGLE_IS_FETCHING = "usersPage/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "usersPage/TOGGLE_IS_FOLLOWING_IN_PROGRESS";

///DefaultState
let initialState = {
    users: [ ],
    pageSize: 15,
    totalItemsCount: 1,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    portionSize: 25,
}


const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_ITEMS_COUNT: {
            return {
                ...state,
                totalItemsCount: action.totalItemsCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        }
        default:
            return state;
    }
}

///ActionCreator
const followSeccess = (userID) => ({type: FOLLOW, userID});
const unfollowSeccess = (userID) => ({type: UNFOLLOW, userID})
const setUsers = (users) => ({type: SET_USERS, users})
const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
const setTotalItemsCount = (totalItemsCount) => ({type: SET_TOTAL_ITEMS_COUNT, totalItemsCount})
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
const toggleFollowingProgress = (isFetching, userID) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFetching,
    userID
})

///ThunkCreator
export const getUsersData = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalItemsCount(data.totalCount))
    }
}
export const unfollow = (userID) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userID));
        let data = await usersAPI.getUnFollow(userID)
        if (data.resultCode === 0) {
            dispatch(unfollowSeccess(userID));
        }
        dispatch(toggleFollowingProgress(false, userID));
    }
}
export const follow = (userID) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userID));
        let data = await usersAPI.getFollow(userID)
        if (data.resultCode === 0) {
            dispatch(followSeccess(userID));
        }
        dispatch(toggleFollowingProgress(false, userID));
    }
}

export default UsersReducer;