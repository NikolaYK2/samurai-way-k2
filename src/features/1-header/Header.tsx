import React, {ChangeEvent} from 'react';
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

  const changePhotoUserHandle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files.length > 0) {
      dispatch(changePhotoTC(e.currentTarget.files[0]))
    }
  }
  const changeBackgroundUserHandle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files.length > 0) {
      const file = e.currentTarget.files[0]
      const reader = new FileReader()
      reader.onloadend = ()=>{
        dispatch(changeBackgroundAC(String(reader.result)))
      }
      reader.readAsDataURL(file)
    }
  }


  return (
    <header className={`${s.header} ${headerProfile && s.expanded}`}>
      {!headerProfile && <div className={s.log}>
          <MemoNavLink to={'/profile'}><IconSvg name={'logo'}/></MemoNavLink>
      </div>}
      <BcAvatarProfile onOffAvatar={headerProfile}/>

      <div className={s.loginBlock}>
        {profile?.userId === myId &&
            <div className={s.blockImg}>
                <label className={s.changeAva}><IconSvg name={'changeAva'}/>
                    <input type="file" onChange={changePhotoUserHandle}/>
                </label>

                <label className={s.changeAva}><IconSvg name={'changeBc'}/>
                    <input type="file" onChange={changeBackgroundUserHandle}/>
                </label>
            </div>
        }

        <div className={s.blockLogout}>
          {/*<div>{props.login}</div>*/}
          <button onClick={deleteHandle} disabled={!isAuth}><IconSvg name={'logOut'}/></button>
        </div>
      </div>
      {loadingToggle && <Loading/>}
    </header>
  );
}