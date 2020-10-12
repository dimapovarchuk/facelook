import {connect} from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingInProgress} from '../../redux/users-reducer';
import Users from './Users'
import React from 'react';
import Preloader from '../Preloader/Preloader';
import {usersAPI} from '../../api/api';
import { getUsers } from '../../redux/users-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    
    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);

        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
       
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    render() {
        return <>
        
            { this.props.isFetching ? <Preloader /> : null }
            <Users
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            // toggleFollowingInProgress={this.props.toggleFollowingInProgress}
            followingInProgress={this.props.followingInProgress}
            /></>
            }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}



    export default compose(
        withAuthRedirect,
        connect(mapStateToProps, {
            follow,
            unfollow,
            setUsers,
            setCurrentPage,
            setTotalUsersCount,
            toggleIsFetching,
            toggleFollowingInProgress,
            getUsers: getUsers
            })
        
      )(UsersContainer);




