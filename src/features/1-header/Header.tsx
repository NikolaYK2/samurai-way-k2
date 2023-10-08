import React from 'react';
import s from "./Header.module.css";
import {ProfileTypeProps} from "features/1-header/HeaderContainer";
import {useAppDispatch, useAppSelector} from "app/redux-store";
import {logoutThunkC} from "features/redux/authReducer";
import {useLocation} from "react-router-dom";
import {BcAvatarProfile} from "common/components/bcAvatarProfile/BcAvatarProfile";
import {IconSvg} from "common/components/iconSvg/IconSVG";
import {MemoNavLink} from "common/utills/MemoNavLink";

export const Header = (props: ProfileTypeProps) => {
  console.log('header')
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector<boolean>(state => state.loginAuthorization.isAuth)
  const location = useLocation()

  const deleteHandle = () => {
    dispatch(logoutThunkC());
  }

  const headerProfile = location.pathname.includes('/profile');

  return (
      <header className={`${s.header} ${headerProfile && s.expanded}`}>
        {!headerProfile && <div className={s.log}>
            <MemoNavLink to={'/profile'}><IconSvg name={'logo'}/></MemoNavLink>
        </div>}
        <BcAvatarProfile onOffAvatar={headerProfile}/>
        <div className={s.loginBlock}>
          <div>
            <div>{props.login}</div>
            <button onClick={deleteHandle} disabled={!isAuth}>log out</button>
          </div>
        </div>
      </header>
  );
}