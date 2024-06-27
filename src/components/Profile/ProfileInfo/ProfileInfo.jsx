import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusOnHooks from "./ProfileStatusOnHooks";
import userPhoto from "../../../assets/images/defoltAvatar.png";
import ProfileChangeForm from "./ProfileChangeForm";
import {Button} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {styled} from '@mui/material/styles';


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
    }

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    return (
        <div>
            <div className={s.avatar}>
                <img src={props.profile.photos.large || userPhoto} alt='profile'/>
                <div className={s.button}> {props.isOwnerID === props.userPageId
                    ? <Button
                        size="small"
                        onChange={onMainPhotoSelected}
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon/>}
                    >
                        Upload file
                        <VisuallyHiddenInput type="file"/>
                    </Button>
                    : null}
                </div>

                {editMode
                    ? <ProfileChangeForm initialValues={props.profile}
                                         profile={props.profile}
                                         onSubmit={onSubmit}
                    />
                    : <ProfileDescription profile={props.profile}
                                          isOwnerID={props.isOwnerID}
                                          userPageId={props.userPageId}
                                          goToEditMode={() => {
                                              setEditMode(true)
                                          }}
                    />}
                <ProfileStatusOnHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

const ProfileDescription = (props) => {
    return (
        <div className={s.discriptionBlock}>
            <div className={s.main}>
                <h3><b>Profile info:</b></h3>
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
                ? <div className={s.button}>
                    <Button
                        color="primary"
                        size="small"
                        variant="contained"
                        onClick={props.goToEditMode}
                    > Edit Description
                    </Button>
                </div>
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
