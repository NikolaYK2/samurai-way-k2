import React from "react";
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
    if (!props.profile) {
        return <Loading/>;
    }
    return (
        <div className={s.content__profile}>
            <div className={s.blockItem}>
                <div className={s.content__avatar}>
                    < img
                        // src={props.profile.photos.large !== null ? props.profile.photos.large : ava}
                        src={props.profile?.photos?.large || ava}

                        alt=""/>
                </div>
                <div className={s.data}>
                    <h2>{props.profile.fullName}</h2>
                    <p><span>aboutMe: </span>{props.profile.aboutMe}</p>
                    <p><span>lookingForAJobDescription: </span>{props.profile.lookingForAJobDescription}</p>
                    Contacts
                    <ul>
                        <li><a href={props.profile.contacts?.facebook}>facebook</a></li>
                        <li><a href={props.profile.contacts?.vk}>vk</a></li>
                        <li><a href={props.profile.contacts?.twitter}>twitter</a></li>
                        <li><a href={props.profile.contacts?.instagram}>instagram</a></li>
                        <li><a href={props.profile.contacts?.github}>github</a></li>
                    </ul>
                </div>
            </div>
            {/*<MyProfileStatus status={props.status} updStatus={props.updStatus}/>*/}
            <MyProfileStatusHook/>
            {/*<MyProfileStatusHook status={props.status} updStatus={props.updStatus}/>*/}
        </div>
    );
}
