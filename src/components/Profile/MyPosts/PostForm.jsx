import React from 'react';
import s from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'postTextArea'}
                       component={'textarea'}/>
            </div>
            <div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </form>
    )
}

const ReduxPostForm = reduxForm({form: 'post'})(MyPostForm)

const PostForm = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div className={s.postBlock}>
            <h3> My post </h3>
            <ReduxPostForm onSubmit={onSubmit}/>
        </div>
    )
}

export default PostForm;
