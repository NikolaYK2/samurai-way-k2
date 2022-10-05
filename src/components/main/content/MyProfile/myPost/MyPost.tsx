import s from "./MyPost.module.css";
import React, {ChangeEvent, useState} from "react";
import {Post} from "../post/Post";
import {ActionTypeFull, StoreType} from "../../../../../redux/redux-store";
import {addPostAC, addPostChangeAC} from "../../../../../redux/proFilePageReducer";

type MyPostType = {
    store: StoreType,
    dispatch: (action: ActionTypeFull)=>void,
    message: string,
    // addPost: () => void,
    // addPostChange: (newText: string) => void,
}
export const MyPost = (props: MyPostType) => {
    //ошибка при добавление пустой строки ===============================
    let [errorText, setErrorText] = useState<string | null>(null);
        //====================================================================
//======Добавления смс для кнопки======================================================
    // const newPostElement = React.createRef<HTMLTextAreaElement>();//событие для textarea
    const addPostButtonHandler = () => {
        // let text = newPostElement.current!.value;//привязываем событие к кнопке
        //newPostElement - обьект у которого ест св-во current и берем value
        // if (text !== '') {
        if (props.message !== '') {
            // props.addPost();//message - можно не получать этот текст, оно и так сидит в state

            //Переходим на dispatch и обязательно указываем тип ему, делая конкретный диспатч
            // props.dispatch({type: "addPost", postMessage: props.message });
            props.dispatch(addPostAC(props.message));
            // props.addPostChange('')//зачищаем пустой строкой смс после добавления / но лучше зачистку предоставить это BLL
            //     newPostElement.current!.value = '';//привязываем событие к кнопке
        } else {
            setErrorText(errorText)
        }
    }
    //===============================================================================
//добавление сообщения в textarea =========================================
    const onCHandlerValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(addPostChangeAC(event))
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
            <Post postData={props.store.getState().proFilePage.postData}/>
        </>
    );
}