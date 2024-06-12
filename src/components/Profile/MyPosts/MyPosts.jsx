import React from 'react';
import s from './MyPosts.module.css';
import AddPost from "./AddPost/AddPost";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/Validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const MyPosts =props => {
    let postsElement = [...props.posts]
        .reverse()
        .map((p) => <AddPost key={p.id} message={p.message} like={p.like} key={p.id}/>)

    let onAddPost = (values) => {
        props.addPost(values.postTextArea);
    };

    return (

        <div className={s.postBlock}>
            <h3> My post </h3>
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
                       validate={[required, maxLengthCreator(10)]}/>
            </div>
            <div>
                <button type='submit'>Add post</button>
                <button type='submit'>Remove</button>
            </div>
        </form>
    )
}


const PostFormRedux = reduxForm({form: "post"})(PostForm)

export default MyPosts;

// Старый и новый код для форм
// <h3> My post </h3>
// <div>
//     <div>
//                     <textarea onChange={onPostChange}
//                               ref={newPostElement}
//                               value={props.newPostText}/>
//     </div>
//     <div>
//         <button onClick={onAddPost}>Add post</button>
//         <button>Remove</button>
//     </div>
// </div>
//
// <PostForm onAddPost={onAddPost}
//       onPostChange={onPostChange}
//       newPostText={props.newPostText}
//       newPostElement={newPostElement}
// />
