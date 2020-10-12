import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    //console.log(props.message);
    //debugger;
    return (
        <div className={s.item}>
            <img src='https://st2.depositphotos.com/1007566/12301/v/950/depositphotos_123013242-stock-illustration-avatar-man-cartoon.jpg' alt='user'>
            </img>
                { props.message }
            <div>
                { props.like }
            <span>Like</span>    
                { props.dislike }
            <span>Dislike</span>
            </div>
        </div>
    )
}
export default Post;