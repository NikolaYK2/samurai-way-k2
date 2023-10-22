import React, {useRef, useState} from "react";
import s from "features/2-main/content/1-MyProfile/ui/MyProfile.module.css";
import {Loading} from "common/components/loading/Loading";
import {useAppSelector} from "app/redux-store";
import {optimizedProfileSelect} from "features/2-main/content/1-MyProfile/model/MyProfileSelectors";
import {ProfileUpdateInfo} from "features/2-main/content/1-MyProfile/ui/ProfileUpdateInfo/ProfileUpdateInfo";

export const Profile = () => {
  console.log('весь проф')
  const [statusProfile, setStatusProfile] = useState(true)

  const profile = useAppSelector(optimizedProfileSelect)

  const toggleStatusViewHandle = () => {
    setStatusProfile(true)
  }
  const toggleStatusEditHandle = () => {
    setStatusProfile(false)
  }


  if (!profile) {
    return <Loading/>;
  }
  return (
    <div className={s.content__profile}>

      <div className={s.statusProfile}>
        <div onClick={toggleStatusViewHandle} className={statusProfile ? s.isActive : ''}>View</div>
        <div onClick={toggleStatusEditHandle} className={!statusProfile ? s.isActive : ''}>Edit profile</div>
        <div className={s.slider} style={{left: `${statusProfile ? -9 : 77}px`}}></div>
      </div>

      <div className={s.profileInfo}>
        <ProfileUpdateInfo statusProfile={statusProfile}/>
      </div>
    </div>
  );
}