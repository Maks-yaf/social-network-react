import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";

const Header = (props) => {
    return <header className={s.header}>
        <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS390_-9qtkRsXJX3B5a3Shbnk3zM3FYQRXXlTh_3p722ZbwrJcJZaQq9N0xJCOjGuvPeA&usqp=CAU'>
        </img>
        <div className={s.loginBlock}>
            {props.isAuth ? <div>Welcome dear: {props.login}</div> : <NavLink to={"/login"} className={s.loginText}><h3>Login</h3></NavLink>}
            <div>{props.isAuth ? <div>Your email: {props.email}</div>: null}</div>
            <div>{props.isAuth ? <Button onClick={props.logout} variant="contained" size="small">Log out</Button> : null}</div>
        </div>

    </header>
}

export default Header;