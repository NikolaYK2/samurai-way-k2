import {v1} from "uuid";
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
export const addMessageUsersChangeAC = (text:string) => {
    return {
        type: 'addMessageUsersChange',
        newMessageUsers: text,
    } as const
}

export type usersType = {
    id: string,
    name: string,
    link: string,
    avatar: string,
}

export type usersMessagesType = {
    id: string,
    sms: string,
}

export type  messagesPageType = {
    users: usersType[],
    message: string,
    usersMessages: usersMessagesType[],
}


const initializationState: messagesPageType = {
    users: [
        {
            id: v1(),
            name: "Nik",
            link: "1",
            avatar: 'https://avatars.mds.yandex.net/get-ott/223007/2a0000016928ac39a6e32ce5657d59f31eb4/1344x756',
        },
        {
            id: v1(),
            name: "Vita",
            link: "2",
            avatar: "https://w7.pngwing.com/pngs/991/871/png-transparent-red-heart-illustration-heart-dark-red-heart-hd-love-image-file-formats-heart.png"
        },
        {
            id: v1(),
            name: "Vova",
            link: "3",
            avatar: 'https://i.pinimg.com/736x/e3/0e/94/e30e94e1b33eb88b6ab807050ad7ff2f.jpg'
        },
        {
            id: v1(),
            name: "Dima",
            link: "4",
            avatar: 'https://crosti.ru/patterns/00/18/72/5109ae65df/picture.jpg'
        },
    ],
    message: '',
    usersMessages: [
        {id: v1(), sms: "Hi",},
        {id: v1(), sms: "How is your",},
        {id: v1(), sms: "Eeeee",},
        {id: v1(), sms: "Cool",},
    ],
}

export const messagesPageReducer = (state = initializationState, action: ActionsTypeMessagesUsers):messagesPageType => {
//Если нужно преобразовали state
    switch (action.type) {
        case addMessageUsers:
            // const newMessages = {id: v1(), sms: action.newMessageUsers,}
            // state.usersMessages = [...state.usersMessages, newMessages];
            // state.message = '';
            // return state;
            return {...state, message: '', usersMessages:[...state.usersMessages, {id: v1(), sms:action.newMessageUsers}]};

        case addMessageUsersChange:
            // state.message = action.newMessageUsers;
            return {...state, message: action.newMessageUsers};
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

