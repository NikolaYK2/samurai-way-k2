import {ActionTypeFull, postDataType, stateType} from "./store";
import {v1} from "uuid";
import {ChangeEvent} from "react";
import {ActionsTypeMessagesUsers} from "./messagesPageReducer";
//КОНСТАНТЫ ТИПОВ ЭКШЭНА=====================================================================
const addPost = 'addPost';
const addPostChange = 'addPostChange';
//==========================================================================================
//=====типизация actions add post==============================================================================
// type AddPostActionType ={
//     type: 'addPost'
//     postMessage: string,
//
// }
// type AddPostChangeActionType ={
//     type: 'addPostChange'
//     postMessage: string,
// }
//Автоматическое определение типа функции=============================================================
// type AddPostActionType = ReturnType<typeof addPostAC>;
// type AddPostChangeActionType = ReturnType<typeof addPostChangeActionCreator>;
export type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof addPostChangeAC>;
//Type messages Users Type===========================================================================================================
//======function Action Creator addPoast==============================================================================
export const addPostAC = (postMessage: string) => {
    return {
        type: 'addPost',
        postMessage: postMessage,
    } as const//воспринимать весь обьект как константу
}
export const addPostChangeAC = (event: ChangeEvent<HTMLTextAreaElement>)/*: AddPostChangeActionType - типизировали функцию вверху*/ => {
    return {
        type: 'addPostChange',
        postMessage: event.currentTarget.value,
    } as const
}

export const proFileReducer=(state: stateType, action: ActionTypeFull)=>{

    if (action.type === addPost) {
        //Добавление нового поста кнопка=================================================
        const newPost: postDataType = {id: v1(), sms: action.postMessage, like: 0,};//МОжно через переменную, протипизировав ее указав postDataType
        state.proFilePage.postData = [newPost, ...state.proFilePage.postData];
        // state.proFilePage.postData.push(newPost);
        // this._state.proFilePage.postData.push({id: v1(), sms: /*postMessage*/ this._state.proFilePage.message, like: 0,});
        state.proFilePage.message = '';//зачищаем строку здесь
    } else if (action.type === addPostChange) {
        //Добавление нового поста для change(update)=================================================
        //     this._state.proFilePage.message = postMessage;//message = переменной newTextPost, в которую будем сам и вписывать знаечния(контралируемая)
        state.proFilePage.message = action.postMessage;//Нужно упаковать для action, так как с переменной теперь работать не будет
        //MESSAGE USERS===============================`================================
    }
    return state;
}