import React from "react";
import s from "./Post.module.css";

type postDataType = {
    id: string,
    sms: string,
    like: number,

}
type PostType = {
    postData: postDataType[]
}

export const Post = (props: PostType) => {
    return (
        <>
            {props.postData.map(pD => {
                return (
                    <div key={pD.id}>
                        <div className={s.content__profUsers}>
                            <div>
                                <img
                                    src="https://avatars.mds.yandex.net/i?id=0eaa142d7202ac9bbd26ac279e7ae159_l-4898876-images-thumbs&n=27&h=384&w=480"
                                    alt=""/>
                            </div>
                            {pD.sms}
                        </div>
                        <div>
                            <span>like </span>{pD.like}
                        </div>
                    </div>
                )
            })}
        </>
    );
};