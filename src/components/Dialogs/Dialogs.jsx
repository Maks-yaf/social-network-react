import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../Utils/Validators/validators";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messageElements = props.messages.map((m, index) => <Message massage={m.message} key={m.id}/>)

    let addNewMessage = (values) => {
        props.addMessage(values.dialogTextArea)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <DialogsFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};

const dialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'dialogTextArea'}
                       component={Textarea}
                       validate={[required, maxLengthCreator(30)]}
                       placeholder={"Enter your message"}
                />
            </div>
            <div>
                <button type='submit'>Add Message</button>
                <button type='submit'>Remove</button>
            </div>
        </form>
    )
}

const DialogsFormRedux = reduxForm({form: "dialog"})(dialogsForm)

export default Dialogs;


///Старый и новый код для форм
// <div>
//     <textarea placeholder={"Enter your message"}
//               onChange={onMassageChange}
//               value={props.newMessageText}/>
// </div>
// <div>
//     <button onClick={onAddMessage}>Add Message</button>
//     <button>Remove</button>
// </div>
//     <DialogsForm
//         onAddMessage={onAddMessage}
//         onMassageChange={onMassageChange}
//         newMessageText={props.newMessageText}/>



