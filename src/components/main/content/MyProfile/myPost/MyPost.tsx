import s from "./MyPost.module.css";
import React from "react";
import {Post} from "../post/Post";

export const MyPost=()=>{
    return(
        <>
            <div className={s.content__myPost}>
                My post
                <div>
                    <textarea placeholder={"new post"}></textarea>
                    <button>Send</button>
                </div>
            </div>
            <Post message="Ha, how are you?" like={15}/>
            <Post message="It's my first post" like={43}/>
        </>
    );
}