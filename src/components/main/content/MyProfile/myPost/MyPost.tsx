import s from "./MyPost.module.css";
import React from "react";
import {Post} from "../post/Post";
import {postData} from "../../../../../index";


export const MyPost = () => {
    return (
        <>
            <div className={s.content__myPost}>
                My post
                <div>
                    <textarea placeholder={"new post"}></textarea>
                    <button>Send</button>
                </div>
            </div>
            <Post postData={postData}/>
        </>
    );
}