import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Users.module.css";
import {stateType} from "../../../../redux/state";

type UsersType={
    state:stateType
}

export const Users = (props: UsersType) => {
    return (
        <div className={s.dialogs__users}>
            Dialogs
            {props.state.messagesPage.users.map((u) => {
                return (
                    <div key={u.id} className="bob">
                        <NavLink to={u.link} className={({isActive}) => isActive ? s.active : s.users}>
                            <div className={s.users__avatar}><img src={u.avatar} alt=""/></div>
                            <span>{u.name}</span></NavLink>
                    </div>
                )
            })}
        </div>
    )
}

