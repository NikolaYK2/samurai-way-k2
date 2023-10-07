import React from 'react';
import s from "./Users.module.css";
import {store, useAppSelector} from "app/redux-store";
import {MemoNavLink} from "common/utills/MemoNavLink";

export const Users = () => {
  const messages = useAppSelector(state => state.messagesPage.usersMessages)
  return (
    <div className={s.dialogs__users}>
      {store.getState().messagesPage.users.map((u) => {
        return (
          <div key={u.id} className={s.users}>
            <MemoNavLink to={u.link} className={({isActive}) => isActive ? s.active : s.user}>
              <div className={s.users__avatar}><img src={u.avatar} alt=""/></div>
              <span>{u.name}</span>
              <span>{}</span>
            </MemoNavLink>
          </div>
        )
      })}
    </div>
  )
}

