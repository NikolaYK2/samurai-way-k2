import React, {useState} from "react";
import s from "features/2-main/content/1-MyProfile/ui/1-profile/MyProfile.module.css";
import {Loading} from "common/components/loading/Loading";
import {useAppSelector} from "app/model/redux-store";
import {optimizedProfileSelect} from "features/2-main/content/1-MyProfile/model/MyProfileSelectors";
import {myIdSelector} from "features/0-auth/model/authSelectors";
import {ProfileUpdateInfo} from "features/2-main/content/1-MyProfile/ui/2-ProfileUpdateInfo/ProfileUpdateInfo";

export const Profile = () => {
  const [statusProfile, setStatusProfile] = useState(true)

  const profile = useAppSelector(optimizedProfileSelect)
  const myId = useAppSelector(myIdSelector)


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

        {profile.userId === myId && <div onClick={toggleStatusEditHandle} className={!statusProfile ? s.isActive : ''}>Edit profile</div>}
          <div className={s.slider} style={{left: `${statusProfile ? -9 : 77}px`}}></div>
      </div>

      <div className={s.profileInfo}>
        <ProfileUpdateInfo statusProfile={statusProfile} setStatusProfile={setStatusProfile}/>
      </div>
    </div>
  );
}
