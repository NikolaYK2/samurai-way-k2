import React, {useLayoutEffect, useRef} from "react";
import s from "./MyProfile.module.css";
import {ProfileUserType} from "features/redux/proFilePageReducer";
import {Loading} from "common/components/loading/Loading";
import {MyProfileStatusHook} from "features/2-main/content/MyProfile/MyProfileStatusHook";
import ava from 'assets/img/myProf/ava.jpg'


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

      <div className={s.data}>
        <table>
          <tbody>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          </tbody>
        </table>
        <h2>{props.profile.fullName}</h2>
        <p><span>aboutMe: </span>{props.profile.aboutMe}</p>
        Contacts
        <ul>
          <li><a href={props.profile.contacts?.facebook}>facebook</a></li>
          <li><a href={props.profile.contacts?.vk}>vk</a></li>
          <li><a href={props.profile.contacts?.twitter}>twitter</a></li>
          <li><a href={props.profile.contacts?.instagram}>instagram</a></li>
          <li><a href={props.profile.contacts?.github}>github</a></li>
        </ul>
      </div>
      <MyProfileStatusHook/>
    </div>
  );
}
