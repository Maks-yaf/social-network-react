import React from 'react';
import s from './Dialogs.module.css';
import {Field, reduxForm} from "redux-form";

const MyDialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'dialogTextArea'}
                       component={'textarea'}
                       placeholder={"Enter your message"}
                       />
            </div>
            <div>
                <button type='submit' >Add Message</button>
                <button type='submit'>Remove</button>
            </div>
        </form>
    )
}

const ReduxDialogForm = reduxForm({form: 'dialog'})(MyDialogForm)


const DialogsForm = (props) => {
    let addNewMessage = (values) => {
        props.onAddMessage(values.dialogTextArea)
    }
    return (
        <div className={s.dialogBlock}>
            <h5> Enter Message </h5>
            <ReduxDialogForm onSubmit={addNewMessage}
                             onAddMessage={props.onAddMessage}
                             onMassageChange={props.onMassageChange}/>
        </div>
    )
}

export default DialogsForm;

// <div>
//     <textarea placeholder={"Enter your message"}
//               onChange={onMassageChange}
//               value={props.newMessageText}/>
// </div>
// <div>
//     <button onClick={onAddMessage}>Add Message</button>
//     <button>Remove</button>
// </div>
