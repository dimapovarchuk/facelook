import React from 'react';
import { Redirect } from 'react-router-dom';


const Music = (props) => {

    if (props.isAuth === false ) return < Redirect to={"/login"} />

    return (
        <div>
            Music
        </div>
    )
}

export default Music;