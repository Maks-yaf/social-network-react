import React from 'react';
import s from './AddPost.module.css';
import userPhoto from "../../../../assets/images/defoltAvatar.png";

const AddPost = (props) => {
    return (
        <div className={s.item}>
            <img
                src={
                // props.profile.photos.large ||
                    userPhoto} alt='profile'></img>
            <div>{props.message}</div>
            <div className={s.like}>
                like {props.like}
            </div>
        </div>
    )
}

export default AddPost;