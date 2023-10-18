import React from "react";
import s from "features/2-main/content/1-MyProfile/ui/MyProfile.module.css";
import {Loading} from "common/components/loading/Loading";
import {useAppSelector} from "app/redux-store";
import {optimizedProfileSelect} from "features/2-main/content/1-MyProfile/model/MyProfileSelectors";
import {ProfileUpdateInfo} from "features/2-main/content/1-MyProfile/ui/ProfileUpdateInfo/ProfileUpdateInfo";

export const Profile = () => {
  console.log('весь проф')
  const profile = useAppSelector(optimizedProfileSelect)



  if (!profile) {
    return <Loading/>;
  }
  return (
    <div className={s.content__profile}>

      <div className={s.profileInfo}>
        <ProfileUpdateInfo/>
      </div>
      {/*<div className={s.data}>*/}
      {/*  <table>*/}
      {/*    <tbody>*/}
      {/*    <tr>*/}
      {/*      <td>Full name</td>*/}
      {/*      <td>{profile.fullName}</td>*/}
      {/*    </tr>*/}
      {/*    <tr>*/}
      {/*      <td>AboutMe</td>*/}
      {/*      <td>{profile.aboutMe}</td>*/}
      {/*    </tr>*/}
      {/*    <tr>*/}
      {/*      <td>Contacts</td>*/}
      {/*      <td><a href={profile.contacts?.facebook}><IconSvg name={'faceBook'}/></a></td>*/}
      {/*      <td><a href={profile.contacts?.vk}><IconSvg name={'vk'}/></a></td>*/}
      {/*      <td><a href={profile.contacts?.github}><IconSvg name={'gitHub'}/></a></td>*/}
      {/*      <td><a href={profile.contacts?.github}><IconSvg name={''}/></a></td>*/}
      {/*    </tr>*/}
      {/*    </tbody>*/}
      {/*  </table>*/}
      {/*</div>*/}
    </div>
  );
}
