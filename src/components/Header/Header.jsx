import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {updateProfile} from "../../Redax/Profile-reducer";

const Header = (props) => {
    debugger;
    return <header className={s.header}>
        <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS390_-9qtkRsXJX3B5a3Shbnk3zM3FYQRXXlTh_3p722ZbwrJcJZaQq9N0xJCOjGuvPeA&usqp=CAU'>
        </img>

        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
            <div>{props.isAuth ? props.email : null}</div>
            <div>{props.isAuth ? <button onClick={props.logout}>Log out</button> : null}</div>
            <button onClick={props.updateProfile}>UpdateProfile</button>
        </div>

    </header>
}

export default Header;