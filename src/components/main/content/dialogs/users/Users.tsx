import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Users.module.css";

type usersType = {
    id: string,
    link: string
    name: string

}
type UserType = {
    users: usersType[]
}

export const Users = (props: UserType) => {
    return (
        <div className={s.dialogs__users}>
            Dialogs
            {props.users.map(el => {
                return (
                    <div key={el.id}>
                        <NavLink to={el.link} className={({isActive}) => isActive ? s.active : undefined}>{el.name}</NavLink>
                    </div>
                )
            })}
        </div>
    )
}

