import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusOnHooks from "./ProfileStatusOnHooks";
import userPhoto from "../../../asets/images/defoltAvatar.png";
import ProfileStatus from "./ProfileStatus";
import ProfileChangeForm from "./ProfileChangeForm";


const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.updatePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
         // console.log(formData)
    }


    return (
        <div>
            <div>
                <img className={s.mainImg}
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRieAeypWa5G63Ggeofo-8B4TzCjSJd-nyH8UDV3nwK-g&s'/>
            </div>
            <div className={s.avatar}>
                <img src={props.profile.photos.large || userPhoto} alt='profile'/>
                <div>
                    {props.isOwnerID === props.userPageId ?
                        <input type={"file"} onChange={onMainPhotoSelected}/> : null}
                </div>
                {editMode
                    ? <ProfileChangeForm initialValues={props.profile}
                                         profile={props.profile}
                                         onSubmit={onSubmit}
                    />
                    : <ProfileDescription profile={props.profile}
                                          isOwnerID={props.isOwnerID}
                                          userPageId={props.userPageId}
                                          goToEditMode={ () => {setEditMode(true)}}
                    />}
                <ProfileStatusOnHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

const ProfileDescription = (props) => {
    return (
        <div className={s.discriptionBlock}>
            <div>
                <h4><b><u>My profile info:</u></b></h4>
            </div>
            <div>
                <b>My nickname: </b>{props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            <div>
                {props.profile.lookingForAJob &&
                    <div>
                        <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
                    </div>
                }
            </div>
            <div>
                {props.profile.aboutMe &&
                    <div>
                        <b>About Me:</b> {props.profile.aboutMe}
                    </div>
                }
            </div>
            <div>
                {
                    props.profile.contacts &&
                    <div>
                        <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                        return <Contacts key={key}
                                         contactTitle={key}
                                         contactValue={props.profile.contacts[key]}/>
                    })}
                    </div>
                }
            </div>
            {props.isOwnerID === props.userPageId
                ? <div> <button onClick={props.goToEditMode}> Edit Description </button> </div>
                : null
            }
        </div>
    )
}

const Contacts = (props) => {
    return (
        props.contactValue &&
        <div className={s.contacts}>
            <b>{props.contactTitle}</b>: {props.contactValue}
        </div>
    )
}


export default ProfileInfo;
