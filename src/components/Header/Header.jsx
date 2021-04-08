import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import sn from '../../assets/images/sn.png'

const Header = (props) => {
    return <header className={s.header}>
        <img alt='' src={sn} />

        <div className={s.loginBlock}>
    
            { props.isAuth
                ? <div>{props.login}- <button onClick={props.logout}>Выйти</button> </div>
                : <NavLink to={'/login'}>
                Авторизоваться</NavLink> }
        </div>
    </header>
}

export default Header;