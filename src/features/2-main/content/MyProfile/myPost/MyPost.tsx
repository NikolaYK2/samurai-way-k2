import s from "./MyPost.module.css";
import React from "react";
import {MyPostType} from "features/2-main/content/MyProfile/myPost/MyPostContainer";
import {FormTextarea} from "common/components/formTextArea/FormTextArea";

export const MyPost = (props: MyPostType) => {
    //POSTS =====================================================================================
    const post = props.postData.map(pD => {
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
    })

    return (
        <>
            <div className={s.content__myPost}>
                <h3>My post</h3>
                <FormTextarea messages={props.postData} addMessages={props.addPost}/>
            </div>
            <>
                {post}
            </>
        </>
    );
}
//--------------------------------------------------------------------------------------
