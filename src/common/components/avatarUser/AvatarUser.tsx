import React, {useLayoutEffect, useRef} from "react";
import s from "common/components/avatarUser/AvatarUser.module.css";
import ava from 'assets/img/myProf/ava.jpg'
import {useAppSelector} from "app/redux-store";


export const AvatarUser = () => {
  const profile = useAppSelector(state => state.proFilePage.profile)

  const styleOnAvatar = useRef<HTMLImageElement>(null)

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      styleOnAvatar.current?.classList.add(s.onAvatar)
    })
  }, []);

  return (
      // <div className={`${s.content__avatar}`} ref={styleOnAvatar}>
        < img
          className={`${s.content__avatar}`}
          ref={styleOnAvatar}
          src={profile?.photos?.large || ava}
          alt=""/>
      // </div>
  );
}
