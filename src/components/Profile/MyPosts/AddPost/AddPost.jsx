import React from 'react';
import s from './AddPost.module.css';

const AddPost = (props) => {
    return (
        <div className={s.item}>
            <img src="https://img.freepik.com/premium-photo/cute-asian-girl-kawaii-anime-avatar-ai-generative-art_225753-9233.jpg" ></img>
            {props.message}
            <div className={s.like}>
                like {props.like}
            </div>
        </div>
    )
}

export default AddPost;