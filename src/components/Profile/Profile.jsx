import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
    
    return (
            <div className={s.profile}>
                <ProfileInfo  profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                {/* <MyPostsContainer store={props.store} /> */}
                <MyPostsContainer />
            </div>
    )
}
export default Profile;