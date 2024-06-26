import React from 'react';
import {addPostActionCreator, profileInfo} from "../../../Redux/Profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postTextArea) => {
            dispatch(addPostActionCreator(postTextArea))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

