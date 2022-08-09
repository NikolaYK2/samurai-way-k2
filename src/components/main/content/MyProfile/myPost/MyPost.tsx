import s from "./MyPost.module.css";
import React from "react";
import {Post} from "../post/Post";
import {stateType} from "../../../../redux/state";

type MyPostType={
    state:stateType
}
export const MyPost = (props: MyPostType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostButtonHandler=()=>{
        let text = newPostElement.current?.value;//привязываем событие к кнопке
        //newPostElement - обьект у которого ест св-во current и берем value
        alert(text)
    }
    return (
        <>
            <div className={s.content__myPost}>
                <h3>My post</h3>
                <div>
                    <textarea placeholder={"my post"} ref={newPostElement}></textarea>
                    <button onClick={addPostButtonHandler}>Send</button>
                </div>
            </div>
            <Post postData={props.state.proFilePage.postData}/>
        </>
    );
}