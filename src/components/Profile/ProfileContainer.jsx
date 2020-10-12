import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
// import { getStatus, getUserProfile, updateStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
// import { compose } from 'redux';
// import { usersAPI } from '../../api/api';
import { setUserProfile} from '../../redux/profile-reducer';
import axios from 'axios';

 
class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                debugger;
                this.props.setUserProfile(response.data);
            });

        // let userId = this.props.match.params.userId;
        // if (!userId) {
        //     userId  = 1049;
        // }
        // this.props.getUserProfile(userId);
        // setTimeout(() => {
        //     this.props.getStatus(userId);
        // }, 1000);

    }

    render() { 
        
        return (
            <Profile  {...this.props} profile={this.props.profile}
            // status={this.props.status} updateStatus={this.props.updateStatus}
            />
        )
         
    }

}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    // status: state.profilePage.status
});
 

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);


    // export default compose(
    //     connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    //     withRouter,
    //     withAuthRedirect)
    //     (ProfileContainer);