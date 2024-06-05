import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>{props.massage}</div>
    )
}


export default Message;