import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusOnHooks from "./ProfileStatusOnHooks";
import userPhoto from "../../../asets/images/defoltAvatar.png";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <h1>AHHAHAHAH</h1>
                <h1>AHHAHAHAH</h1>
                <h1>AHHAHAHAH</h1>
                <img className={s.mainImg}
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRieAeypWa5G63Ggeofo-8B4TzCjSJd-nyH8UDV3nwK-g&s'/>
            </div>
            <div className={s.avatar}>
                <img src={props.profile.photos.small !== null ? props.profile.photos.small : userPhoto}  alt='profile'/>
                <div className={s.discriptionBlock}><u>{props.fullName}</u></div>
                <div className={s.discriptionBlock}>{props.description}</div>
                <ProfileStatusOnHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;