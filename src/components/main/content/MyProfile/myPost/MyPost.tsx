import s from "./MyPost.module.css";
import React from "react";
import {Post} from "../post/Post";
import {stateType} from "../../../../redux/state";

type MyPostType={
    state:stateType
}
export const MyPost = (props: MyPostType) => {
    return (
        <>
            <div className={s.content__myPost}>
                My post
                <div>
                    <textarea placeholder={"new post"}></textarea>
                    <button>Send</button>
                </div>
            </div>
            <Post postData={props.state.proFilePage.postData}/>
        </>
    );
}