import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusOnHooks from "./ProfileStatusOnHooks";
import userPhoto from "../../../asets/images/defoltAvatar.png";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.updatePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div>
                <img className={s.mainImg}
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRieAeypWa5G63Ggeofo-8B4TzCjSJd-nyH8UDV3nwK-g&s'/>
            </div>
            <div className={s.avatar}>
                <img src={props.profile.photos.large || userPhoto}  alt='profile'/>
                <div>
                    {props.isOwnerID === props.userPageId ? <input type={"file"} onChange={onMainPhotoSelected}/> : null}
                </div>
                <div className={s.discriptionBlock}><u>{props.fullName}</u></div>
                <div className={s.discriptionBlock}>{props.description}</div>
                <ProfileStatusOnHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;