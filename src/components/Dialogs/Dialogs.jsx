import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../Utils/Validators/validators";
import {Button} from "@mui/material";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messageElements = props.messages.map((m) => <Message massage={m.message} key={m.id}/>)

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
                <b className={s.dialogItems}> Enter Message </b>
                <DialogsFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};

const dialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    className={s.dialogTextarea}
                    name={'dialogTextArea'}
                       component={Textarea}
                       validate={[required, maxLengthCreator(30)]}
                       placeholder={"Enter your message"}
                />
            </div>
            <div>
                <Button
                    type='submit'
                    variant="contained"
                    size="small"
                >Send Message
                </Button>
            </div>
        </form>
    )
}

const DialogsFormRedux = reduxForm({form: "dialog"})(dialogsForm)

export default Dialogs;






