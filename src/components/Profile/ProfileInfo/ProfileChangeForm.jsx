import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import {createField, Inputarea, Textarea} from "../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from '../../Common/FormsControls/FormsControls.module.css';
import {Button} from "@mui/material";

const ProfileChangeFrom = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            {props.error && <div className={style.formSummaryError}>
            {props.error}
        </div>}
            <div>
                <u>Change Profile:</u>
            </div>
            <div>
                <b>My nickname:</b> {createField("My nickname", "fullName", [], Inputarea)}
            </div>
            <div>
                <b>Looking for a job</b>
                {createField("", "lookingForAJob", [], Inputarea, {type: "checkbox"})}
            </div>
            <div>
                <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
                {createField("My professional skills", "lookingForAJobDescription", [], Textarea,)}
            </div>
            <div>
                <b>About Me:</b> {props.profile.aboutMe}
                {createField("About Me", "aboutMe", [], Textarea,)}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                return (
                    <div key={key} className={s.contacts}>
                        <b>{key}:</b> {createField(key, "contacts." + key, [], Inputarea)}
                    </div>
                )
            })}
            </div>
            <div className={s.button}>
                <Button
                    onClick={ () => {}}
                    color="primary"
                    size="small"
                    variant="contained"
                    type='submit'
                >
                    Save
                </Button>
            </div>
        </form>
    )
}



const ProfileChangeFromReduxForm = reduxForm({form: 'edit-profile', destroyOnUnmount: false})(ProfileChangeFrom)

export default ProfileChangeFromReduxForm;
