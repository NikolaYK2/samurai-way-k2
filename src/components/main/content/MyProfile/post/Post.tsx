import React from "react";
import s from "./Post.module.css";

type PostType={
    message:string
    like:number
}

export const Post = (props:PostType) => {
    return (
        <div>
            <div className={s.content__profUsers}>
                <div>
                    <img
                        src="https://avatars.mds.yandex.net/i?id=0eaa142d7202ac9bbd26ac279e7ae159_l-4898876-images-thumbs&n=27&h=384&w=480"
                        alt=""/>
                </div>
                {props.message}
            </div>
            <div>
                <span>like </span>{props.like}
            </div>
        </div>
    );
};