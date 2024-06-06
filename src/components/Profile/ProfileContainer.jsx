import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, profileInfo, updateStatus} from "../../Redax/Profile-reducer";
import {useParams} from 'react-router-dom'
import {compose} from "redux";

function ProfileContainer(props) {
    let {userId} = useParams();
    if (!userId) {
        userId = props.authUserId;
        if (!userId) {
            window.location.href = '/login';
        }
    }

    useEffect(() => {props.profileInfo(userId)},  [userId]);
    props.getStatus(userId);


    // console.log("RENDER PROFILE")
    return (
        <>
        <div>
            <Profile profile={props.profile}
                     fullName={props.fullName}
                     description={props.description}
                     status={props.status}

                     updateStatus={props.updateStatus}
            />
        </div>
        </>
    );
}

let mapStateToProps = (state) => {
    // console.log("MapStateToPropsProfile PROFILE")
    return ( {
                 profile: state.profilePage.profile,
                 fullName: state.profilePage.fullName,
                 description: state.profilePage.description,
                 status: state.profilePage.status,
                 authUserId: state.auth.id,
                 isAuth: state.auth.isAuth,
             })

}

export default compose(
    connect(mapStateToProps, {profileInfo, getStatus, updateStatus}),
)(ProfileContainer)

