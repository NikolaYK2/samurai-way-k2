import {ActionTypeFull, stateType} from "./store";
import {v1} from "uuid";
import {ChangeEvent} from "react";
import {ActionsType} from "./proFilePageReducer";
//КОНСТАНТЫ ТИПОВ ЭКШЭНА=====================================================================
const addMessageUsers = 'addMessageUsers';
const addMessageUsersChange = 'addMessageUsersChange';
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
//Type messages Users Type===========================================================================================================
export type ActionsTypeMessagesUsers = ReturnType<typeof addMessageUsersAC> | ReturnType<typeof addMessageUsersChangeAC>;
//FUNCTION ADD MESSAGES USERS=ЭКШЭН КРИЕЙТЕРЫ - AC======================================================
export const addMessageUsersAC = (newMessageUsers: string) => {
    return {
        type: 'addMessageUsers',
        newMessageUsers: newMessageUsers,
    } as const
}
export const addMessageUsersChangeAC = (event: ChangeEvent<HTMLTextAreaElement>) => {
    return {
        type: 'addMessageUsersChange',
        newMessageUsers: event.currentTarget.value
    } as const
}

export const messagesPageReducer = (state: stateType, action: ActionTypeFull) => {
//Если нужно преобразовали state
    switch (action.type) {
        case addMessageUsers:
            const newMessages = {id: v1(), sms: action.newMessageUsers,}
            state.messagesPage.usersMessages = [...state.messagesPage.usersMessages, newMessages];
            state.messagesPage.message = '';
            return state;
        case addMessageUsersChange:
            state.messagesPage.message = action.newMessageUsers;
            return state;
        default:
            return state;
    }

//     if (action.type === addMessageUsers) {
//         //add new message users=============================================
//         // this._state.messagesPage.usersMessages.push({id: v1(), sms: action.newMessageUsers,});
//         const newMessages = {id: v1(), sms: action.newMessageUsers,}
//         state.messagesPage.usersMessages = [...state.messagesPage.usersMessages, newMessages];
//         state.messagesPage.message = '';
//     } else if (action.type === addMessageUsersChange) {
//         //add Для Change update==========
//         state.messagesPage.message = action.newMessageUsers;
//     }
//
// Вернули преобразованный или не измененный state
//     return state;
}

