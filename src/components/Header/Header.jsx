import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {

  return (
    
    <header className={s.header}>
      <div className={s.loginBlock}>
        
        { props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
    </div>
    <div>
    <button><img src='https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19757.png' alt='No logo'></img></button>
        Facelook
        
    </div>
    
    </header>


  )
}
export default Header;