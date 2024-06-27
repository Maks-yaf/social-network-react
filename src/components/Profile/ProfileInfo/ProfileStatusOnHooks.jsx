import React, {useEffect, useState} from 'react';
import s from './ProfileStatus.module.css';
import {Input} from "@mui/material";

const ProfileStatusOnHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode =() => {
        setEditMode(true)
    }

    const deactivateEditMode =() => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = e => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            <div className={s.status}>
            <div className={s.main}><b><h3>Status:</h3></b></div>
            {!editMode &&
                <div >
                    <span onDoubleClick={activateEditMode}>{status || "No status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <Input
                        className={s.inputarea}
                        autoFocus={true}
                           onChange={onStatusChange}
                           onBlur={deactivateEditMode}
                           value={status}
                    />
                </div>
            }
            </div>
        </>
    )
}

export default ProfileStatusOnHooks;
