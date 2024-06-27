import React from 'react';
import s from './AddPost.module.css';
import userPhoto from "../../../../assets/images/defoltAvatar.png";
import MyPhoto from "../../../../assets/images/MyPhoto.jpg";


const AddPost = (props) => {
    return (
        <div className={s.item}>
            <div className={s.message}>
                <div className={s.main}>I would like to say that:</div>
                {props.message}</div>
            <div className={s.photo}>
                <img src={MyPhoto} alt='profile'/>
            </div>

            <div className={s.like}>
                <h7>like:</h7> {props.like}
            </div>
        </div>
    )
}

export default AddPost;