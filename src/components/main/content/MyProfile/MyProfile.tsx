import React from "react";
import s from "./MyProfile.module.css";
import {Loading} from "../../../loading/Loading";
import {ProfileUserType} from "../../../../redux/proFilePageReducer";
import {MyProfileStatus} from "./MyProfileStatus";


type ProfileType = {
    profile: ProfileUserType | null,
    status: string,
    updStatus: (status:string)=>void,
}

export const Profile = (props: ProfileType) => {
// if(props.profile === null || props.profile)
    //сокращение
    if (!props.profile) {
        return <Loading/>;
    }
    return (
        <div className={s.content__profile}>
            {/*<div className={s.content__wrap}>*/}
            {/*    <img*/}
            {/*        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"*/}
            {/*        alt=""/>*/}
            {/*</div>*/}
            <div className={s.blockItem}>
                <div className={s.content__avatar}>
                    < img
                        src={props.profile.photos?.large}
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
            <MyProfileStatus status={props.status} updStatus={props.updStatus}/>
        </div>
        // <div className={s.content__profile}>
        //     <div className={s.content__avatar}>
        //         < img
        //             src={props.profile.photos.Large}
        //             alt=""/>
        //     </div>
        //     <div>
        //         <h2>Nikolaj K.</h2>
        //         <ul>
        //             <li><span>Date of Birth: </span>3 october</li>
        //             <li><span>City: </span>Molodechno</li>
        //             <li><span>Education: </span>BNTU</li>
        //             <li><span>Web Site: </span>HZ</li>
        //         </ul>
        //     </div>
        // </div>
    );
}
