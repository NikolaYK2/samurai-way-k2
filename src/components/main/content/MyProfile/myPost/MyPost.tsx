import s from "./MyPost.module.css";
import React from "react";
import {Post} from "../post/Post";
import {v1} from "uuid";

const postData = [
    {id: v1(), sms: "Ha, how are you?", like: 15,},
    {id: v1(), sms: "It's my first post", like: 43,},
]

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