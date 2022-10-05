import React, {ChangeEvent} from "react";
import {Post} from "../post/Post";
import {StoreType} from "../../../../../redux/redux-store";
import {addPostAC, addPostChangeAC} from "../../../../../redux/proFilePageReducer";
import {MyPost} from "./MyPost";

type MyPostType = {
    store: StoreType,
    // dispatch: (action: ActionTypeFull)=>void,
    // message: string,
    // addPost: () => void,
    // addPostChange: (event: string) => void,
}
export const MyPostContainer = (props: MyPostType) => {
    //ошибка при добавление пустой строки ===============================
    // let [errorText, setErrorText] = useState<string | null>(null);
        //====================================================================
//======Добавления смс для кнопки======================================================
    // const newPostElement = React.createRef<HTMLTextAreaElement>();//событие для textarea
    const addPostButtonHandler = () => {
        // let text = newPostElement.current!.value;//привязываем событие к кнопке
        //newPostElement - обьект у которого ест св-во current и берем value
        // if (text !== '') {
        // if (props.message !== '') {
            // props.addPost();//message - можно не получать этот текст, оно и так сидит в state

            //Переходим на dispatch и обязательно указываем тип ему, делая конкретный диспатч
            // props.dispatch({type: "addPost", postMessage: props.message });
            props.store.dispatch(addPostAC(props.store.getState().proFilePage.message));
            // props.addPostChange('')//зачищаем пустой строкой смс после добавления / но лучше зачистку предоставить это BLL
            //     newPostElement.current!.value = '';//привязываем событие к кнопке
        // } else {
        //     setErrorText('Может введешь что-нибудь, а?')
        // }
    }
    //===============================================================================
//добавление сообщения в textarea =========================================
    const onCHandlerValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
        // props.addPostChange(event.currentTarget.value)
        props.store.dispatch(addPostChangeAC(event))
        // setErrorText('')
    }
    //=====================================================================================
    return (
        <>
            <MyPost addPostChange={onCHandlerValue}
                    addPost={addPostButtonHandler}
                    message={props.store.getState().proFilePage.message}
                    store={props.store}
                    dispatch={props.store.dispatch}
            />
            <Post postData={props.store.getState().proFilePage.postData}/>
        </>
    );
}