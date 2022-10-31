import s from "./MyPost.module.css";
import React, {ChangeEvent, useState} from "react";
import {MyPostType} from "./MyPostContainer";
import {store} from "../../../../../redux/redux-store";

// type MyPostType = {
//     // store: StoreType,
//     // dispatch: (action: ActionTypeFull)=>void,
//     message: string,
//     addPost: () => void,
//     addPostChange: (event: ChangeEvent<HTMLTextAreaElement>) => void,
// }
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
            props.addPost(props.message);//message - можно не получать этот текст, оно и так сидит в state

            //Переходим на dispatch и обязательно указываем тип ему, делая конкретный диспатч
            // props.dispatch({type: "addPost", postMessage: props.message });
            // props.dispatch(addPostAC(props.message));
            // props.addPostChange('')//зачищаем пустой строкой смс после добавления / но лучше зачистку предоставить это BLL
            //     newPostElement.current!.value = '';//привязываем событие к кнопке
        } else {
            setErrorText('Может введешь что-нибудь, а?')
        }
    }
    //===============================================================================
//добавление сообщения в textarea =========================================
    const onCHandlerValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.addPostChange(text)
        // props.dispatch(addPostChangeAC(event))
        setErrorText('')
    }
    //=====================================================================================
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
                <div>
                    <textarea placeholder={errorText || "add post"}
                        // ref={newPostElement}
                              onChange={onCHandlerValue}
                              value={props.message}
                    />
                    <button onClick={addPostButtonHandler}>Send</button>
                </div>
            </div>
            <>
                {post}
            </>
        </>
    );
}