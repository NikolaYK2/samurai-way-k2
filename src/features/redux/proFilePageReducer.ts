import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileApi} from "common/api/api";
//КОНСТАНТЫ ТИПОВ ЭКШЭНА=====================================================================
const addPost = 'addPost';
const setUserProfile = 'setUserProfile';
const setStatus = 'setStatus';
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
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>;
//Type messages Users Type===========================================================================================================
//======function Action Creator addPoast==============================================================================
export const addPostAC = (postMessage: string) => {
    return {
        type: 'addPost',
        postMessage: postMessage,
    } as const//воспринимать весь обьект как константу
}
export const setUserProfileAC = (profile: ProfileUserType | null) => {
    return {
        type: 'setUserProfile',
        profile,
    } as const
}
export const setStatusAC = (status: string) => {
    return {
        type: 'setStatus',
        status,
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
    postData: postDataType[],
    profile: ProfileUserType | null,
    status: string,
}

let initializationState: proFilePageType = {
    postData: [
        {id: v1(), sms: "Ha, how are you?", like: 15,},
        {id: v1(), sms: "It's my first post", like: 43,},
    ],
    profile: {} as ProfileUserType,
    status: '',
};

export const proFileReducer = (state = initializationState, action: ActionsTypeProfile) => {

    if (action.type === addPost) {
        //Добавление нового поста кнопка=================================================
        return {...state, /*message: '', */postData: [{id: v1(), sms: action.postMessage, like: 0}, ...state.postData]}
        //MESSAGE USERS===============================`================================
    } else if (action.type === setUserProfile) {
        return {...state, profile: action.profile}
    } else if (action.type === setStatus) {
        //Добавление нового поста для change(update)=================================================
        return {...state, status: action.status}
        //MESSAGE USERS===============================`================================
    }
    return state;
}

//THUNK =============================================================
export const getUserProfileThunkCreator = (userId: number) => {
    return (dispatch: Dispatch<ActionsTypeProfile>) => {
        profileApi.getUserProfile(userId).then(data => {
            dispatch(setUserProfileAC(data));
        })
    }
}

export const setStatusThunkCreator = (userId: number) => {
    return (dispatch: Dispatch<ActionsTypeProfile>) => {
        profileApi.getProfileStatusUser(userId).then(res => {
            dispatch(setStatusAC(res.data));
        })
    }
}
export const updStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch<ActionsTypeProfile>) => {
        profileApi.updProfileStatus(status).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatusAC(status));
            }
        })
    }
}