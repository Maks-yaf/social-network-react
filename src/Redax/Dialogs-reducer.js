const ADD_MESSAGE = "ADD_MESSAGE";

let initialState = {
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your day?"},
        {id: 3, message: "You"},
        {id: 4, message: "You"},
        {id: 5, message: "You"},
    ],
    dialogs: [
        {id: 1, name: "Max"},
        {id: 2, name: "Angelika"},
        {id: 3, name: "Aneta"},
        {id: 4, name: "Zoja"},
        {id: 5, name: "Andjei"},
        {id: 6, name: "Marysia"},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 7,
                message: action.dialogTextArea,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = (dialogTextArea) => ({type: ADD_MESSAGE, dialogTextArea})

export default dialogsReducer;