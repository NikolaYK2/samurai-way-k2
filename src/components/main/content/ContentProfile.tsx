import React from "react";
import s from "./ContentProfile.module.css";
import {MyPost} from "./MyProfile/myPost/MyPost";
import {MyProfile} from "./MyProfile/MyProfile";
import {addPost, stateType} from "../../redux/state";

type ContentProfileType={
    state:stateType
    addPost:(postMessage: string)=>void,

}
export const ContentProfile = (props: ContentProfileType) => {
    return (
        <section className={s.content}>
            <div className={s.content__wrap}>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt=""/>
            </div>
            <MyProfile/>
            <MyPost state={props.state} addPost={props.addPost}/>
        </section>
    );
}
