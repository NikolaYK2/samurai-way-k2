import s from "./MyPost.module.css";
import React from "react";
import {MyPostType} from "features/2-main/content/MyProfile/myPost/MyPostContainer";
import {FormTextarea} from "common/components/formTextArea/FormTextArea";

export const MyPost = (props: MyPostType) => {
    console.log('render My Post')

    const handlDeletePost = (postId: string) => {
        props.deletePost(postId)
    }
    //POSTS =====================================================================================

    const post = props.postData.map(pD => {

        return (
            <div key={pD.id} className={s.post}>
                <div className={s.content__profUsers}>
                    <div className={s.img}>
                        <img
                            src="https://avatars.mds.yandex.net/i?id=0eaa142d7202ac9bbd26ac279e7ae159_l-4898876-images-thumbs&n=27&h=384&w=480"
                            alt=""/>
                    </div>
                    <div className={s.postData}>
                        <div className={s.message}>{pD.sms}</div>
                        <div className={s.delPost} onClick={() => handlDeletePost(pD.id)}>X</div>
                    </div>
                </div>
                <div>
                    <span>like </span>{pD.like}
                </div>
            </div>
        )
    })

    return (
        <div className={s.continer}>
            <div className={s.content__myPost}>
                <h3>My post</h3>
                <FormTextarea messages={props.postData} addMessages={props.addPost}/>
            </div>
            <>
                {post}
            </>
        </div>
    );
}
//--------------------------------------------------------------------------------------
