import s from "./MyPost.module.css";
import React, {useState} from "react";
import {Post} from "../post/Post";
import {stateType} from "../../../../redux/state";
import {text} from "stream/consumers";

type MyPostType = {
    state: stateType,
    addPost: (postMessage: string) => void,
}
export const MyPost = (props: MyPostType) => {
    let [errorText, setErrorText] = useState<string | null>(null)
    let [textStop, setTextStop] = useState('')


    const newPostElement = React.createRef<HTMLTextAreaElement>();//событие для textarea
    const addPostButtonHandler = () => {
        let text = newPostElement.current!.value || '';//привязываем событие к кнопке
        //newPostElement - обьект у которого ест св-во current и берем value
        if (text !== '') {
            props.addPost(text);
            newPostElement.current!.value = '';//привязываем событие к кнопке
        } else {
            setErrorText(null)
        }

    }
    // const onChangeTextareaHandltr=(event: ChangeEvent<HTMLTextAreaElement>)=>{
    //     props.addPost(event.currentTarget.value)
    // }
    return (
        <>
            <div className={s.content__myPost}>
                <h3>My post</h3>
                <div>
                    <textarea placeholder={"my post"}
                              ref={newPostElement}
                        // onChange={onChangeTextareaHandltr}
                        /*value={postMessage}*/></textarea>
                    <button onClick={addPostButtonHandler}>Send</button>
                </div>
            </div>
            <Post postData={props.state.proFilePage.postData}/>
        </>
    );
}