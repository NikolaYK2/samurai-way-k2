import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Users.module.css";
import {store} from "app/redux-store";

export const Users = () => {
    return (
        <div className={s.dialogs__users}>
            Users
            <>
                {store.getState().messagesPage.users.map((u) => {
                    return (
                        <div key={u.id}>
                            <NavLink to={u.link} className={({isActive}) => isActive ? s.active : s.users}>
                                <div className={s.users__avatar}><img src={u.avatar} alt=""/></div>
                                <span>{u.name}</span></NavLink>
                        </div>
                    )
                })}
            </>
        </div>
    )
}

