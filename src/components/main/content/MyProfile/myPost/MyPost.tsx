import s from "./MyPost.module.css";
import React, {ChangeEvent, useState} from "react";
import {Post} from "../post/Post";
import {proFilePageType, state, stateType} from "../../../../redux/state";
import {text} from "stream/consumers";

type MyPostType = {
    state: stateType,
    addPost: () => void,
    message: string,
    addPostChange: (newText: string) => void,
}
export const MyPost = (props: MyPostType) => {
    let [errorText, setErrorText] = useState<string | null>(null)

//======Добавления смс для кнопки======================================================
    // const newPostElement = React.createRef<HTMLTextAreaElement>();//событие для textarea
    const addPostButtonHandler = () => {
        // let text = newPostElement.current!.value;//привязываем событие к кнопке
        //newPostElement - обьект у которого ест св-во current и берем value
        // if (text !== '') {
        if (state.proFilePage.message !== '') {
            props.addPost();//message - можно не получать этот текст, оно и так сидит в state
            // props.addPostChange('')//зачищаем пустой строкой смс после добавления / но лучше зачистку предоставить это BLL
            //     newPostElement.current!.value = '';//привязываем событие к кнопке
        } else {
            setErrorText(errorText)
        }
    }
    //===============================================================================
//добавление сообщения в textarea =========================================
    const onCHandlerValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.addPostChange(event.currentTarget.value)
    }
    //=====================================================================================
    return (
        <>
            <div className={s.content__myPost}>
                <h3>My post</h3>
                <div>
                    <textarea placeholder={"my post"}
                        // ref={newPostElement}
                              onChange={onCHandlerValue}
                              value={props.message}/>
                    <button onClick={addPostButtonHandler}>Send</button>
                </div>
            </div>
            <Post postData={props.state.proFilePage.postData}/>
        </>
    );
}