import preloader from '../../assets/images/preloader1.gif'
import React from 'react';
import s from './Preloader.module.css'

let Preloader = (props) => {
    return <div className={s.loader}><img src={preloader}  alt='faq' /></div>
}

export default Preloader;