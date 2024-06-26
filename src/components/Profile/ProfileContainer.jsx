import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, profileInfo, saveProfile, updatePhoto, updateStatus} from "../../Redux/Profile-reducer";
import {useParams} from 'react-router-dom'
import {compose} from "redux";

function ProfileContainer(props) {
    let {userId} = useParams();
    if (!userId) {
        userId = props.authUserId;
        if (!userId) {
            userId = 31300 ;
        }
    }

    useEffect(() => {
        props.profileInfo(userId)
    }, [userId]);
    props.getStatus(userId);

    return (
        <>
            <div>
                <Profile profile={props.profile}
                         status={props.status}
                         isOwnerID={props.authUserId}
                         userPageId={userId}

                         updateStatus={props.updateStatus}
                         updatePhoto={props.updatePhoto}
                         saveProfile={props.saveProfile}

                />
            </div>
        </>
    );
}

let mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    })

}

export default compose(
    connect(mapStateToProps,
        {profileInfo, getStatus, updateStatus, updatePhoto, saveProfile}
    ),
)(ProfileContainer)

