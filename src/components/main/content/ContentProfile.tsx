import React from "react";
import s from "./ContentProfile.module.css";
import {MyPost} from "./MyProfile/myPost/MyPost";
import {MyProfile} from "./MyProfile/MyProfile";


export const ContentProfile = () => {
    return (
        <section className={s.content}>
            <div className={s.content__wrap}>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt=""/>
            </div>
            <MyProfile/>
            <MyPost/>
        </section>
    );
}
