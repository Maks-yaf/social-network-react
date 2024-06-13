import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    getUsersData,
} from "../../Redux/Users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getPortionSize,
    getTotalItemsCount, getUsersReSelector
} from "../../Redux/Users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersData(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (currentPage) => {
        this.props.getUsersData(currentPage, this.props.pageSize)

    }

    render() {
        return (<>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalItemsCount={this.props.totalItemsCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       followingInProgress={this.props.followingInProgress}
                       portionSize={this.props.portionSize}

                       onPageChanged={this.onPageChanged}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                />
            </>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }
const mapStateToProps = (state) => {
    return {
        users: getUsersReSelector(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalItemsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPortionSize(state)
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//
//
//     }
// }

let objOfDispatch = {
    follow,
    unfollow,
    getUsersData,
}

export default compose(
    connect(mapStateToProps, objOfDispatch),
)(UsersContainer)