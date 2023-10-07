import React, {useLayoutEffect, useRef} from 'react';
import s from "common/components/bcAvatarProfile/BackgroundHeader.module.css";
import ava from "assets/img/myProf/ava.jpg";
import {useAppSelector} from "app/redux-store";


export const BcAvatarProfile = (props: { onOffAvatar?: boolean }) => {
  const profile = useAppSelector(state => state.proFilePage.profile)

  const styleOnAvatar = useRef<HTMLImageElement>(null)

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      styleOnAvatar.current?.classList.add(s.onAvatar)
    })
  }, []);

  return (
    <div className={s.contain}>
      <div className={`${s.avatar}`}>
        < img
          className={`${s.img} ${props.onOffAvatar && s.onImg}`}
          ref={styleOnAvatar}
          src={profile?.photos?.large || ava}
          alt=""/>
      </div>
    </div>
  );
};

