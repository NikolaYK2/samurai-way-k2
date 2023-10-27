import React, {memo, useEffect} from 'react';
import s from "common/components/bcAvatarProfile/BackgroundHeader.module.css";
import ava from "assets/img/myProf/ava.jpg";
import {useAppDispatch, useAppSelector} from "app/model/redux-store";
import bc from 'assets/img/myProf/bc.jpg';
import {bcSelector, myIdSelector, optimizedProfileSelector} from "features/1-header/HeaderSelectors";
import {MyProfileStatusHook} from "features/2-main/content/1-MyProfile/ui/3-status/MyProfileStatusHook";
import {getUserProfileThunkCreator} from "features/2-main/content/1-MyProfile/model/proFilePageReducer";
import {useLocation} from "react-router-dom";


export const BcAvatarProfile = memo((props: { onOffAvatar?: boolean, classMod?: { ava: string, bc: string } }) => {

  const profile = useAppSelector(optimizedProfileSelector)
  const background = useAppSelector(bcSelector)
  const myId = useAppSelector(myIdSelector)
  const dispatch = useAppDispatch();
  const location = useLocation()
  const prof = location.pathname.includes('/profile');

  useEffect(() => {
    if (myId && !prof) dispatch(getUserProfileThunkCreator(myId))
  }, [prof]);

  return (
    <div className={`${s.contain} ${props.classMod?.bc}`}
         style={{backgroundImage: `url(${profile?.userId === myId ? background || bc : bc})`}}>
      <div className={`${s.avatar}`}>
        < img
          className={`${s.img} ${props.onOffAvatar && s.onImg} ${props.classMod?.ava}`}
          src={profile?.photos?.large || ava}
          alt=""/>
      </div>
      {props.onOffAvatar && <MyProfileStatusHook/>}
    </div>
  );
});

