import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Профиль</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Сообщения</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/users" activeClassName={s.activeLink}>Пользователи</NavLink>
            </div>

            {/* <div className={s.item}>
                <a href=''>Новости</a>
            </div>
            <div className={s.item}>
                <a href=''>Музыка</a>
            </div>
            <div className={s.item}>
                <a href=''>Настройки</a>
            </div> */}
        </nav>
    )
}

export default Navbar;