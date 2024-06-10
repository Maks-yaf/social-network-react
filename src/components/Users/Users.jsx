import React from 'react';

import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    return (
        <div>
            <div>
                <Paginator totalItemsCount={props.totalItemsCount}
                           pageSize={props.pageSize}
                           currentPage={props.currentPage}
                           onPageChanged={props.onPageChanged}
                           portionSize={props.portionSize}/>
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