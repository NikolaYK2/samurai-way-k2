import React from "react";
import s from "./ContentProfile.module.css";
import {MyProfile} from "./MyProfile/MyProfile";
import {store} from "../../../redux/redux-store";
import MyPostContainer from "./MyProfile/myPost/MyPostContainer";
import {Post} from "./MyProfile/post/Post";

type ContentProfileType = {
    // store: StoreType,
    // addPost:()=>void,
    // proFilePage:proFilePageType,
    // addPostChange:(newMessageUsers: any)=>void,
}
export const ContentProfile = () => {
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
            <Post postData={/*props.*/store.getState().proFilePage.postData}/>
        </section>
    );
}
