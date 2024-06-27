import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/defoltAvatar.png'
import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";

const User = (props) => {
    return (
        <div key={props.user.id}>
            <span>
                <div className={s.avatar}>
                    <NavLink to={`/profile/` + props.user.id}>
                        <img src={props.user.photos.small || userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {
                        props.user.followed
                            ? <Button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => {
                                          props.unfollow(props.user.id);
                                      }}
                                      variant="contained"
                                      size="small">Unfollow</Button>
                            : <Button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => {
                                          props.follow(props.user.id);
                                      }}
                                      variant="contained"
                                      size="small">Follow</Button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{props.user.name && <div>Nickname: {props.user.name}</div>}</div>
                    <div>{props.user.status && <div>Status: {props.user.status}</div>}</div>
                    <div>{props.user.id && <div>Personal UserId: {props.user.id}</div>}</div>
                </span>
            </span>
        </div>
    )
}

export default User;