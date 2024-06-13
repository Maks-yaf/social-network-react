import React from 'react';
import s from './ProfileStatus.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = e => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                <div>Мой статус</div>
                {!this.state.editMode &&
                    <div className={s.haha}>
                        <span onDoubleClick={this.activateEditMode}>{this.state.status || "No status"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div >
                        <input onChange={this.onStatusChange}  autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;

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