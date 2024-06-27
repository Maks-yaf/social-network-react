import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";
import logo from "../../assets/images/phoenix-logo-removebg-preview.png"

const Header = (props) => {
    return <header className={s.header}>
        <img className={s.image}
            src={logo}/>

        <div className={s.loginBlock}>
            {props.isAuth ? <div>Welcome dear: {props.login}</div> : <NavLink to={"/login"} className={s.loginText}><h3>Login</h3></NavLink>}
            <div>{props.isAuth ? <div>Your email: {props.email}</div>: null}</div>
            <div>{props.isAuth ? <Button onClick={props.logout} variant="contained" size="small">Log out</Button> : null}</div>
        </div>

    </header>
}

export default Header;