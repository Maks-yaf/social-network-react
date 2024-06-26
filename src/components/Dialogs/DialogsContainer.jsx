import React from 'react';
import {addMessageActionCreator} from "../../Redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
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
)(Dialogs);
