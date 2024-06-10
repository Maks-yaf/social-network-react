import {usersAPI} from "../API/Api";

const FOLLOW = "usersPage/FOLLOW";
const UNFOLLOW = "usersPage/UNFOLLOW";
const SET_USERS = "usersPage/SET_USERS";
const SET_CURRENT_PAGE = "usersPage/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "usersPage/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "usersPage/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "usersPage/TOGGLE_IS_FOLLOWING_IN_PROGRESS";

///DefaultState
let initialState = {
    users: [
        // {
        //     id: 1,
        //     followed: true,
        //     photoURL: 'https://static.vecteezy.com/system/resources/thumbnails/002/227/847/small/programmer-computer-expert-black-linear-icon-vector.jpg',
        //     fullName: 'Maxim Yafimchyk',
        //     status: "Junior programmer",
        //     location:
        //         {
        //             city: 'Wroclaw',
        //             country: 'Poland',
        //
        //         },
        // },
        // {
        //     id: 2,
        //     followed: true,
        //     photoURL:'https://thumbs.dreamstime.com/b/facial-expression-redhead-woman-smiling-female-emotions-attractive-cartoon-character-vector-illustration-white-background-105899768.jpg',
        //     fullName: 'Angelika Lema',
        //     status: "Redhead girl",
        //     location:
        //         {
        //             city: 'Wroclaw',
        //             country: 'Poland',
        //
        //         },
        // },
        // {
        //     id: 3,
        //     followed: false,
        //     photoURL:'https://i.pinimg.com/originals/eb/42/b3/eb42b30af8dbbee64166eed52e37c87c.png',
        //     fullName: 'Aneta Snihur',
        //     status: "Manchester City Fan №1",
        //     location:
        //         {
        //             city: 'Wroclaw',
        //             country: 'Poland',
        //
        //         },
        // },
    ],
    pageSize: 100,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    fake: 10,
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
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
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
const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
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
        dispatch(setTotalUsersCount(data.totalCount))
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