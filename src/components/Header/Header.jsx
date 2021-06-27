import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://png.pngtree.com/template/20190316/ourmid/pngtree-natural-flower-logo-image_79362.jpg"/>

            <div className={s.loginBlock}>
                { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }

            </div>
        </header>
    )
}

export default Header;