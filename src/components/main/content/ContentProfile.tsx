import React from "react";
import s from "./ContentProfile.module.css";
import {MyProfile} from "./MyProfile/MyProfile";
import {AppStateType} from "../../../redux/redux-store";
import {MyPostContainer} from "./MyProfile/myPost/MyPostContainer";

type ContentProfileType = {
    // store: StoreType,
    // addPost:()=>void,
    // proFilePage:proFilePageType,
    // addPostChange:(newMessageUsers: any)=>void,
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
            <MyPostContainer /*store={props.store}*/
                //     dispatch={props.store.dispatch.bind(props.store)}
                // // addPost={props.store.dispatch.bind(props.store)}
                // // addPostChange={props.addPostChange}
                // // addPostChange={props.store.dispatch.bind(props.store)}
                //     message={props.store.getState().proFilePage.message}
            />
        </section>
    );
}
