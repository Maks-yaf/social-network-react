import React from 'react';
import {addPostActionCreator} from "../../../Redax/Profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postTextArea) => {
            dispatch(addPostActionCreator(postTextArea))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

