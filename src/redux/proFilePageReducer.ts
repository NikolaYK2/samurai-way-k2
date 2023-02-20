import {v1} from "uuid";
import {Dispatch} from "redux";
import {usersAPI} from "../components/api/api";
//КОНСТАНТЫ ТИПОВ ЭКШЭНА=====================================================================
const addPost = 'addPost';
const addPostChange = 'addPostChange';
const setUserProfile = 'setUserProfile';
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
export type ActionsTypeProfile = ReturnType<typeof addPostAC>
    | ReturnType<typeof addPostChangeAC>
    | ReturnType<typeof setUserProfileAC>;
//Type messages Users Type===========================================================================================================
//======function Action Creator addPoast==============================================================================
export const addPostAC = (postMessage: string) => {
    return {
        type: 'addPost',
        postMessage: postMessage,
    } as const//воспринимать весь обьект как константу
}
export const addPostChangeAC = (text: string)/*: AddPostChangeActionType - типизировали функцию вверху*/ => {
    return {
        type: 'addPostChange',
        postMessage: text,
    } as const
}
export const setUserProfileAC = (profile: ProfileUserType | null) => {
    return {
        type: 'setUserProfile',
        profile,
    } as const
}


export type postDataType = {
    id: string,
    sms: string,
    like: number,
}
export type ContactsType = {
    facebook: string,
    website: null,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: null,
    github: string,
    mainLink: null,
}
export type PhotosType = {
    small: string,
    large: string,
}
export type ProfileUserType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    photos: PhotosType
    userId: number,
}
export type proFilePageType = {
    message: string,
    postData: postDataType[],
    profile: ProfileUserType | null,
}

let initializationState: proFilePageType = {
    message: "",
    postData: [
        {id: v1(), sms: "Ha, how are you?", like: 15,},
        {id: v1(), sms: "It's my first post", like: 43,},
    ],
    profile: {} as ProfileUserType,
};

export const proFileReducer = (state = initializationState, action: ActionsTypeProfile) => {

    if (action.type === addPost) {
        //Добавление нового поста кнопка=================================================
        // const newPost: postDataType = {id: v1(), sms: action.postMessage, like: 0,};//МОжно через переменную, протипизировав ее указав postDataType
        // state.postData = [newPost, ...state.postData];
        // // state.proFilePage.postData.push(newPost);
        // // this._state.proFilePage.postData.push({id: v1(), sms: /*postMessage*/ this._state.proFilePage.message, like: 0,});
        // state.message = '';//зачищаем строку здесь
        return {...state, message: '', postData: [{id: v1(), sms: action.postMessage, like: 0}, ...state.postData]}

    } else if (action.type === addPostChange) {
        //Добавление нового поста для change(update)=================================================
        //     this._state.proFilePage.message = postMessage;//message = переменной newTextPost, в которую будем сам и вписывать знаечния(контралируемая)
        // state.message = action.postMessage;//Нужно упаковать для action, так как с переменной теперь работать не будет
        return {...state, message: action.postMessage}
        //MESSAGE USERS===============================`================================
    } else if (action.type === setUserProfile) {
        //Добавление нового поста для change(update)=================================================
        //     this._state.proFilePage.message = postMessage;//message = переменной newTextPost, в которую будем сам и вписывать знаечния(контралируемая)
        // state.message = action.postMessage;//Нужно упаковать для action, так как с переменной теперь работать не будет
        return {...state, profile: action.profile}
        //MESSAGE USERS===============================`================================
    }
    return state;
}

//THUNK =============================================================
export const getUserProfileThunkCreator = (userId:number) => {
    return (dispatch: Dispatch<ActionsTypeProfile>) => {
        usersAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfileAC(data));

        })
    }
}