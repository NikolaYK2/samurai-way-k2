import React from 'react';
import s from "./Header.module.css";
import {useAppDispatch, useAppSelector} from "app/model/redux-store";
import {logoutThunkC} from "features/0-auth/model/authReducer";
import {useLocation} from "react-router-dom";
import {BcAvatarProfile} from "common/components/bcAvatarProfile/BcAvatarProfile";
import {IconSvg} from "common/components/iconSvg/IconSVG";
import {MemoNavLink} from "common/utills/MemoNavLink";
import {
  isAuthSelector,
  loadingToggleSelector,
  myIdSelector,
  optimizedProfileSelector
} from "features/1-header/HeaderSelectors";
import {changeBackgroundAC, changePhotoTC} from "features/2-main/content/1-MyProfile/model/proFilePageReducer";
import {Loading} from "common/components/loading/Loading";
import logo from 'assets/img/logo/logo.png'
import {FileDownload} from "common/components/fileDownloud/fileDownload";

export const Header = () => {

  const dispatch = useAppDispatch();
  const profile = useAppSelector(optimizedProfileSelector)
  const myId = useAppSelector(myIdSelector)
  const isAuth = useAppSelector(isAuthSelector)
  const loadingToggle = useAppSelector(loadingToggleSelector)

  const location = useLocation()
  const headerProfile = location.pathname.includes('/profile');

  const deleteHandle = () => {
    dispatch(logoutThunkC());
  }

  return (
    <header className={`${s.header} ${headerProfile && s.expanded}`}>
      {!headerProfile && <div className={s.log}>
          <MemoNavLink to={'/profile'}><img src={logo} alt=""/></MemoNavLink>
        {/*<MemoNavLink to={'/profile'}><IconSvg name={'logo'}/></MemoNavLink>*/}
      </div>}
      <BcAvatarProfile onOffAvatar={headerProfile}/>

      <div className={s.loginBlock}>
        {profile?.userId === myId &&
            <>
                <FileDownload name={'changeAva'} callbackFile={changePhotoTC}/>
                <FileDownload name={'changeBc'} callbackAction={changeBackgroundAC}/>
            </>
        }

        <div className={s.blockLogout}>
          <button onClick={deleteHandle} disabled={!isAuth}><IconSvg name={'logOut'}/></button>
        </div>
      </div>
      {loadingToggle && <Loading/>}
    </header>
  );
}