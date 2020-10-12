import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if(!props.profile) {
        // debugger  
        return <Preloader/> 
    }  
    debugger;
    return ( 
        <div className={s.profile}>
            <div>
                <img src='https://rosnf.org/wp-content/uploads/2017/02/cropped-cropped-rosnf-web-1.jpg' alt='no logo'></img>
            </div>
            <div >
                <div className={s.item}>
                <img src={props.profile.photos.large} alt='Here should be someone face!'/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
         </div>
    )
}
export default ProfileInfo;