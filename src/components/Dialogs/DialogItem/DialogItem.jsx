import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialogname}>
            <NavLink to={path} className={s.navlink}>
                <p>{props.name}</p>
            </NavLink>
        </div>
    )
}

export default DialogItem;