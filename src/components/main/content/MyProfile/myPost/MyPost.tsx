import s from "./MyPost.module.css";
import React, {ChangeEvent, useState} from "react";
import {MyPostType} from "./MyPostContainer";
import {SubmitHandler, useForm} from "react-hook-form";
import {postDataType} from "../../../../../redux/proFilePageReducer";
import {formOnSubmit} from "../../../../../formOnSubmit/formOnSubmit";

// type MyPostType = {
//     // store: StoreType,
//     // dispatch: (action: ActionTypeFull)=>void,
//     message: string,
//     addPost: () => void,
//     addPostChange: (event: ChangeEvent<HTMLTextAreaElement>) => void,
// }

export const MyPost = (props: MyPostType) => {
    //ошибка при добавление пустой строки ===============================
    // const [errorText, setErrorText] = useState<string | null>(null);
    // const [message, setMessage] = useState<string>('');
    // ====================================================================
//======Добавления смс для кнопки======================================================
    // const newPostElement = React.createRef<HTMLTextAreaElement>();//событие для textarea
    // const sendPostButtonHandler = () => {
    //     // let text = newPostElement.current!.value;//привязываем событие к кнопке
    //     //newPostElement - обьект у которого ест св-во current и берем value
    //     // if (text !== '') {
    //     if (message !== '') {
    //         props.addPost(message);//message - можно не получать этот текст, оно и так сидит в state
    //
    //         //Переходим на dispatch и обязательно указываем тип ему, делая конкретный диспатч
    //         // props.dispatch({type: "addPost", postMessage: props.message });
    //         // props.dispatch(addPostAC(props.message));
    //         // props.addPostChange('')//зачищаем пустой строкой смс после добавления / но лучше зачистку предоставить это BLL
    //         //     newPostElement.current!.value = '';//привязываем событие к кнопке
    //     } else {
    //         setErrorText('Может введешь что-нибудь, а?')
    //     }
    // }
    //===============================================================================
//добавление сообщения в textarea =========================================
//     const addMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
//         let text = event.currentTarget.value
//         setMessage(text);
//         // props.dispatch(addPostChangeAC(event))
//         setErrorText('')
//     }
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
                <PostForm postData={props.postData} addPost={props.addPost}/>
            </div>
            <>
                {post}
            </>
        </>
    );
}
//--------------------------------------------------------------------------------------




type PostForType={
    postData:postDataType[],
    addPost:(postMessage: string)=>void,
}
export const PostForm =(props:PostForType)=>{
    const {addPost}=props
    const [errorText, setErrorText] = useState<string | null>(null);
    const [message, setMessage] = useState<string>('');

    const addMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        setMessage(text);
        // props.dispatch(addPostChangeAC(event))
        setErrorText('')
    }

    //FORM ============================================================
    const {register, handleSubmit, watch, formState: {errors, isValid}, reset} = useForm<MyPostType>();
    // const onSubmit: SubmitHandler<MyPostType> = data => {
    //     if (message !== '') {
    //         addPost(message);//message - можно не получать этот текст, оно и так сидит в state
    //         console.log(data)
    //         setMessage('');
    //         //Переходим на dispatch и обязательно указываем тип ему, делая конкретный диспатч
    //         // props.dispatch({type: "addPost", postMessage: props.message });
    //         // props.dispatch(addPostAC(props.message));
    //         // props.addPostChange('')//зачищаем пустой строкой смс после добавления / но лучше зачистку предоставить это BLL
    //         //     newPostElement.current!.value = '';//привязываем событие к кнопке
    //     } else {
    //         setErrorText('Может введешь что-нибудь, а?')
    //     }
    //     // reset();//Очистка формы после отправки
    // }

    //FORM ==============================
    const onSubmit: SubmitHandler<MyPostType> = formOnSubmit(message, addPost, setMessage, setErrorText);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea
                        {...register('postData')}
                        placeholder={errorText || "add post"}
                        // ref={newPostElement}
                        onChange={addMessage}
                        value={message}
                    />
            <button>Send</button>
        </form>

    );
}