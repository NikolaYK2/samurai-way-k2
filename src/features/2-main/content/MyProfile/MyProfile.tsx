import React, {useLayoutEffect, useRef} from "react";
import s from "./MyProfile.module.css";
import {ProfileUserType} from "features/redux/proFilePageReducer";
import {Loading} from "common/components/loading/Loading";
import {MyProfileStatusHook} from "features/2-main/content/MyProfile/MyProfileStatusHook";
import ava from 'assets/img/myProf/ava.jpg'
import {IconSvg} from "common/components/iconSvg/IconSVG";


type ProfileType = {
  profile: ProfileUserType | null,
  status: string,
  updStatus: (status: string) => void,
}

export const Profile = (props: ProfileType) => {

  const styleOnAvatar = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      styleOnAvatar.current?.classList.add(s.onAvatar)
    })
  }, []);

  console.log(props.profile)
  if (!props.profile) {
    return <Loading/>;
  }
  return (
    <div className={s.content__profile}>
      <div className={`${s.content__avatar}`} ref={styleOnAvatar}>
        < img
          // src={props.profile.photos.large !== null ? props.profile.photos.large : ava}
          src={props.profile?.photos?.large || ava}

          alt=""/>
      </div>
      <MyProfileStatusHook/>

      <div className={s.data}>
        <table>
          <tbody>
          <tr>
            <td>Full name</td>
            <td>{props.profile.fullName}</td>
          </tr>
          <tr>
            <td>AboutMe</td>
            <td>{props.profile.aboutMe}</td>
          </tr>
          <tr>
            <td>Contacts</td>
            <td><a href={props.profile.contacts?.facebook}>facebook</a></td>
            <td><a href={props.profile.contacts?.vk}>vk</a></td>
            <td><a href={props.profile.contacts?.github}><IconSvg name={'gitHub'}/></a></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
