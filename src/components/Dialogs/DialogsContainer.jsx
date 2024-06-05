import React from 'react';
import {addMessageActionCreator} from "../../Redax/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (dialogTextArea) => {
            dispatch(addMessageActionCreator(dialogTextArea))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthNavigate,
)(Dialogs);
