import s from "./MyPost.module.css";
import React from "react";

export const MyPost=()=>{
    return(
        <div className={s.content__myPost}>
            My post
            <div>
                <textarea placeholder={"new post"}></textarea>
                <button>Send</button>
            </div>
        </div>
    );
}