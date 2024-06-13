import {authMe} from "./Auth-reducer";


const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state;
    }
}

///ActionCreator
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS,})

///ThunkCreator
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe())
    Promise.all([promise])
        .then( () => {
            dispatch(initializedSuccess())
    })
}


export default appReducer;