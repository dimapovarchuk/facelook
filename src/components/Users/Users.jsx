import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink, Redirect } from 'react-router-dom';



let Users = (props) => {

    if (props.isAuth === false ) return < Redirect to={"/login"} />

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    

    return (
        <div>
            <div className={s.pages}>
                {
                    pages.map(p => {
                        return <div className={props.currentPage === p && s.selectedPage}
                            onClick={(e) => { props.onPageChanged(p) }}>{p}</div>
                    })
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div >
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="empty" className={s.photo} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress
                                .some(id => id === u.id)} onClick={() => {props.unfollow(u.id)}}>
                                        Unfollow</button>
                                : <button disabled={props.followingInProgress
                                .some(id => id === u.id)} onClick={() => {props.follow(u.id)}}>
                                        Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;