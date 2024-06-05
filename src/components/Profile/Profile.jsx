import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <h1>AHHAHAHAH</h1>
            <ProfileInfo profile={props.profile}
                         fullName={props.fullName}
                         description={props.description}
                         status={props.status}

                         updateStatus={props.updateStatus}


            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;

