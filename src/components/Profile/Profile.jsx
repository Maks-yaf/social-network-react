import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         isOwnerID={props.isOwnerID}
                         userPageId={props.userPageId}

                         updateStatus={props.updateStatus}
                         updatePhoto={props.updatePhoto}
                         saveProfile={props.saveProfile}


            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;

