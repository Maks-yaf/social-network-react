import React from 'react';

import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    return (
        <div>
            <div>
                <Paginator totalUsersCount={props.totalUsersCount}
                           pageSize={props.pageSize}
                           currentPage={props.currentPage}
                           onPageChanged={props.onPageChanged}/>
            </div>
            <div>
                {props.users.map(user => <User user={user}
                                               key={user.id}
                                               followingInProgress={props.followingInProgress}
                                               unfollow={props.unfollow}
                                               follow={props.follow}/>)
                }
            </div>
        </div>
    )
}

export default Users;