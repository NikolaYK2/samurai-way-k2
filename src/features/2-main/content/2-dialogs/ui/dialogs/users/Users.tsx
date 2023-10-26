import React, {memo, useEffect} from 'react';
import s from "features/2-main/content/2-dialogs/ui/dialogs/users/Users.module.css";
import {useAppDispatch, useAppSelector} from "app/model/redux-store";
import {MemoNavLink} from "common/utills/MemoNavLink";
import ava from 'assets/img/myProf/ava.jpg'
import {getFriendsThunkCreator} from "features/2-main/content/4-users/model/usersReducers";
import {getUsersSelector} from "features/2-main/content/4-users/model/usersSelectors";

export const Users = memo(() => {

  const friends = useAppSelector(getUsersSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getFriendsThunkCreator(true))
  }, []);

  return (
    <div className={`${s.dialogs__users} ${'customScroll'}`}>
      {friends.map((f) => {
        return (
          <div key={f.id} className={s.users}>
            <div className={s.users__avatar}>
              <MemoNavLink to={`/profile/${f.id}`}>
                <img src={f.photos?.small || ava} alt=""/>
              </MemoNavLink>
            </div>

            <MemoNavLink to={`/messages/${f.name}`} className={({isActive}) => isActive ? s.active : s.default}>
              <span>{f.name}</span>
              <span>{f.followed}</span>
            </MemoNavLink>

          </div>
        )
      })}
    </div>
  )
})

