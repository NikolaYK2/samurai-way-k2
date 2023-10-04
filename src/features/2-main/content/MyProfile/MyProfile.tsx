import React from "react";
import s from "./MyProfile.module.css";
import {ProfileUserType} from "features/redux/proFilePageReducer";
import {Loading} from "common/components/loading/Loading";
import {MyProfileStatusHook} from "features/2-main/content/MyProfile/MyProfileStatusHook";
import {IconSvg} from "common/components/iconSvg/IconSVG";


type ProfileType = {
  profile: ProfileUserType | null,
  status: string,
  updStatus: (status: string) => void,
}

export const Profile = (props: ProfileType) => {


  if (!props.profile) {
    return <Loading/>;
  }
  return (
    <div className={s.content__profile}>
      {/*<AvatarUser/>*/}
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
            <td><a href={props.profile.contacts?.facebook}><IconSvg name={'faceBook'}/></a></td>
            <td><a href={props.profile.contacts?.vk}><IconSvg name={'vk'}/></a></td>
            <td><a href={props.profile.contacts?.github}><IconSvg name={'gitHub'}/></a></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
