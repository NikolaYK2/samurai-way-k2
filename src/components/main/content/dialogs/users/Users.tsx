import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Users.module.css";
import {StoreType} from "../../../../../redux/redux-store";
import {StoreContext} from "../../../../../StoreContext";

type UsersType = {
    // store:StoreType
}

export const Users = (props: UsersType) => {
    return (
        <div className={s.dialogs__users}>
            Dialogs
            <StoreContext.Consumer>
                {(store) => (
                    <>
                        {/*props.*/store.getState().messagesPage.users.map((u) => {
                            return (
                                <div key={u.id}>
                                    <NavLink to={u.link} className={({isActive}) => isActive ? s.active : s.users}>
                                        <div className={s.users__avatar}><img src={u.avatar} alt=""/></div>
                                        <span>{u.name}</span></NavLink>
                                </div>
                            )
                        })}
                    </>
                )
                }
            </StoreContext.Consumer>
        </div>
    )
}

