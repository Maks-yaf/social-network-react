import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}
                         fullName={props.fullName}
                         description={props.description}
                         status={props.status}
                         isOwnerID={props.isOwnerID}
                         userPageId={props.userPageId}

                         updateStatus={props.updateStatus}
                         updatePhoto={props.updatePhoto}


            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;

