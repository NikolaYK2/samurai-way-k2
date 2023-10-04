import React from 'react';
import s from "./Header.module.css";
import {ProfileTypeProps} from "features/1-header/HeaderContainer";
import {useAppDispatch, useAppSelector} from "app/redux-store";
import {logoutThunkC} from "features/redux/authReducer";
import {useLocation} from "react-router-dom";
import {AvatarUser} from "common/components/avatarUser/AvatarUser";

export const Header = (props: ProfileTypeProps) => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector<boolean>(state => state.loginAuthorization.isAuth)
  const location = useLocation()

  const deleteHandle = () => {
    dispatch(logoutThunkC());
  }

  const headerProfile = location.pathname.includes('/profile');
  const Avatar = location.pathname.includes('/profile') ? <AvatarUser/> : '';

  return (
    <header className={`${s.header} ${headerProfile && s.expanded}`}>
      <div className={s.log}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
          alt=""/>
      </div>

      <div className={s.avatar}>
        {Avatar}
      </div>

      <div className={s.loginBlock}>
        <div>
          <div>{props.login}</div>
          <button onClick={deleteHandle} disabled={!isAuth}>log out</button>
        </div>
      </div>
    </header>
  );
}