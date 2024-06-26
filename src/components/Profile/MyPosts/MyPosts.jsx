import React from 'react';
import s from './MyPosts.module.css';
import AddPost from "./AddPost/AddPost";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/Validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";
import {Button} from "@mui/material";
import userPhoto from "../../../assets/images/defoltAvatar.png";

const MyPosts =props => {
    let postsElement = [...props.posts,]
        .reverse()
        .map((p) => <AddPost key={p.id} message={p.message} like={p.like} profile={props.profile} />)

    let onAddPost = (values) => {
        props.addPost(values.postTextArea);
    };

    return (

        <div className={s.postBlock}>
            <h4> My post </h4>
            {/*<img src={props.profile.photos.large || userPhoto} alt='profile'/>*/}
            <PostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
};

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'postTextArea'}
                       component={Textarea}
                       placeholder={"Hi, how are you"}
                       validate={[required, maxLengthCreator(50)]}/>
            </div>
            <div>
                <Button
                    color="primary"
                    size="small"
                    variant="contained"
                    type='submit'
                >
                    Add post
                </Button>
            </div>
        </form>
    )
}


const PostFormRedux = reduxForm({form: "post"})(PostForm)

export default MyPosts;


