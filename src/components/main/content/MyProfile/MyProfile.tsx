import React from "react";
import s from "./MyProfile.module.css";
import {Loading} from "../../../loading/Loading";
import {ProfileUserType} from "../../../../redux/proFilePageReducer";


type ProfileType = {
    profile: ProfileUserType | null,
}

export const Profile = (props: ProfileType) => {
// if(props.profile === null || props.profile)
    //сокращение
    if (!props.profile){
        return <Loading/>;
    }

        return (
            <div className={s.content__profile}>
                <div className={s.content__avatar}>
                    < img
                        src={props.profile.photos?.large}
                        alt=""/>
                </div>
                <div>
                    <h2>{props.profile.fullName}</h2>
                    <ul>
                        <li><span>aboutMe: </span>{props.profile.aboutMe}</li>
                        <li><span>lookingForAJobDescription: </span>{props.profile.lookingForAJobDescription}</li>
                    </ul>
                </div>
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
