/*
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, How are you", like: 15},
                {id: 2, message: "Hi, it's my first post", like: 10},
                {id: 3, message: "412412", like: 123},
                {id: 4, message: "ohohohooh", like: 1123},
            ],
            newPostText: "Hi, How are you",
        },
        dialogsPage: {
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
            newMessageText: "",
        },
        sidebar: {},
    },
    _rerenderEntireTreePererisovka() {
        console.log("ebobo")
    },

    getState() {
        return this._state;
    },
    subscribe(observer)  {
        this._rerenderEntireTreePererisovka = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._rerenderEntireTreePererisovka(this._state);
    },
}

export default store;

// window.store = store;*/
