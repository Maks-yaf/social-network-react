import {authMe} from "./Auth-reducer";


const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

export type initialStateType = {
    initialized: boolean,
}

let initialState: initialStateType = {
    initialized: false,
}

const appReducer = (state = initialState, action: any ) : initialStateType => {
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

type initializedSuccessActionType ={
    type: typeof INITIALIZED_SUCCESS
}

///ActionCreator
export const initializedSuccess = ():initializedSuccessActionType  => ({type: INITIALIZED_SUCCESS,})

///ThunkCreator
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(authMe())
    Promise.all([promise])
        .then( () => {
            dispatch(initializedSuccess())
    })
}


export default appReducer;