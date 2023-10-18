import React, {memo} from 'react';
import s from "common/components/bcAvatarProfile/BackgroundHeader.module.css";
import ava from "assets/img/myProf/ava.jpg";
import {useAppSelector} from "app/redux-store";
import bc from 'assets/img/myProf/bc.jpg';
import {myIdSelector, optimizedProfileSelector} from "features/1-header/HeaderSelectors";


export const BcAvatarProfile = memo((props: { onOffAvatar?: boolean, classMod?: { ava: string, bc: string } }) => {
  const profile = useAppSelector(optimizedProfileSelector)
  const background = useAppSelector(state => state.proFilePage.background)
  const myId = useAppSelector(myIdSelector)


  return (
    <div className={`${s.contain} ${props.classMod?.bc}`} style={{backgroundImage: `url(${profile?.userId === myId ? background : bc})`}}>
      <div className={`${s.avatar}`}>
        < img
          className={`${s.img} ${props.onOffAvatar && s.onImg} ${props.classMod?.ava}`}
          src={profile?.photos?.large || ava}
          alt=""/>
      </div>
    </div>
  );
});
