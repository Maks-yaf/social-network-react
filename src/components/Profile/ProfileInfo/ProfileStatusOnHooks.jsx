import React, {useEffect, useState} from 'react';
import s from './ProfileStatus.module.css';
import {updateStatus} from "../../../Redax/Profile-reducer";


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
            <div>Мой статус</div>
            {!editMode &&
                <div className={s.haha}>
                    <span onDoubleClick={activateEditMode}>{status || "No status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true}
                           onChange={onStatusChange}
                           onBlur={deactivateEditMode}
                           value={status}
                           />
                </div>
            }
        </>
    )
}


export default ProfileStatusOnHooks;

// const ProfileStatus = (props) => {
//     //локальный стейт компоненты
//     const [localState, setLocalState] = React.useState({
//         editMode: false,
//         status: props.status,
//     });
//     const activateEditMode = () => {
//         setLocalState({ ...localState, editMode: true });
//     };
//
//     const deactivateEditMode = () => {
//         setLocalState({ ...localState, editMode: false });
//         props.updateStatus(localState.status);
//     };
//
//     const onStatusChange = (event) => {
//         setLocalState({ ...localState, status: event.currentTarget.value });
//         console.log(event.currentTarget.value);
//         props.changeUserStatus(localState.status);
//     };
//
//     return (
//         <div className={s.status}>
//             {!localState.editMode && (
//                 <div>
//                     <span onDoubleClick={activateEditMode}>{props.status}</span>
//                 </div>
//             )}
//             {localState.editMode && (
//                 <div>
//                     <input
//                         autoFocus={true}
//                         onBlur={deactivateEditMode}
//                         value={localState.status}
//                         onChange={onStatusChange}
//                     />
//                 </div>
//             )}
//         </div>
//     );
// };
// export default ProfileStatus;